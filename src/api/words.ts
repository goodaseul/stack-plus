import { FilterValue } from "@/constants/filter";
import { WordsQueryRequest, WordsRequest } from "./types/words";
import { WordCreateInput, WordUpdateInput } from "@/types/word";
import { DuplicateWordError } from "./types/errors";
import { supabase } from "@/lib/supabase";

async function getUserOrThrow() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}
export function normalizeMemo(memo?: string | null) {
  return memo?.trim() === "" ? null : memo;
}
export async function getWords({
  filter,
  keyword,
  wordId,
  page = 1,
  pageSize = 20,
}: WordsQueryRequest): Promise<{ words: WordsRequest[]; totalCount: number }> {
  const user = await getUserOrThrow();

  let query = supabase
    .from("words")
    .select("*", { count: "exact" })
    .eq("user_id", user.id)
    .order("id", { ascending: false });

  const filterMap: Record<
    Exclude<FilterValue, null>,
    (queryBuilder: typeof query) => typeof query
  > = {
    hasMemo: (queryBuilder) => queryBuilder.not("memo", "is", null),
    noMemo: (queryBuilder) => queryBuilder.is("memo", null),
    bookmarked: (queryBuilder) => queryBuilder.eq("bookmarked", true),
  };

  if (wordId) {
    query = query.eq("id", wordId);
  } else {
    if (keyword) {
      query = query.or(
        `expression.ilike.%${keyword}%,meaning.ilike.%${keyword}%,memo.ilike.%${keyword}%,sentence.ilike.%${keyword}%`,
      );
    }

    if (filter && filter in filterMap) {
      query = filterMap[filter](query);
    }
  }

  const from = (page - 1) * pageSize;

  query = query.range(from, from + pageSize - 1);

  const { data, error, count } = await query;

  if (error) {
    throw error;
  }

  return {
    words: data ?? [],
    totalCount: count ?? 0,
  };
}
export async function getAllWords(): Promise<WordsRequest[]> {
  const user = await getUserOrThrow();

  const { data, error } = await supabase
    .from("words")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data ?? [];
}
export async function uploadWords(word: WordCreateInput) {
  const user = await getUserOrThrow();

  const normalizedMemo = normalizeMemo(word.memo);

  const { data: existingWord } = await supabase
    .from("words")
    .select("id, expression")
    .eq("user_id", user.id)
    .ilike("expression", word.expression)
    .maybeSingle();

  if (existingWord) {
    throw {
      code: "DUPLICATE_WORD",
      wordId: existingWord.id,
      expression: existingWord.expression,
    } as DuplicateWordError;
  }

  const { error } = await supabase
    .from("words")
    .insert({
      ...word,
      memo: normalizedMemo,
      user_id: user.id,
      bookmarked: word.bookmarked ?? false,
    })
    .select();

  if (error) {
    throw error;
  }
}
export async function modifyWords(word: WordUpdateInput) {
  const user = await getUserOrThrow();

  const { id, memo, ...updateData } = word;
  const normalizedMemo = normalizeMemo(memo);

  const { error } = await supabase
    .from("words")
    .update({
      ...updateData,
      memo: normalizedMemo,
      bookmarked: word.bookmarked ?? false,
    })
    .eq("id", id)
    .eq("user_id", user.id)
    .select();

  if (error) {
    throw error;
  }
}
export async function deleteWords(wordId: number) {
  const { error } = await supabase.from("words").delete().eq("id", wordId);
  if (error) {
    throw error;
  }
}
export async function toggleBookmark(wordId: number, bookmarked: boolean) {
  const { error } = await supabase
    .from("words")
    .update({ bookmarked: bookmarked })
    .eq("id", wordId);

  if (error) throw error;
}
