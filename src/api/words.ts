import { supabase } from "@/lib/supabase/supabase";
import { FilterValue } from "@/constants/filter";
import { WordsApi } from "./types/words";
import { WordCreateInput, WordUpdateInput } from "@/types/word";

export async function getWords({
  filter,
  keyword,
  wordId,
  range,
  page = 1,
  pageSize = 20,
}: {
  filter?: FilterValue;
  keyword?: string;
  wordId?: string | null;
  range?: { from: number; to: number };
  page?: number;
  pageSize?: number;
}): Promise<{ words: WordsApi[]; totalCount: number }> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

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
      query = query.ilike("expression", `%${keyword}%`);
    }

    if (filter && filter in filterMap) {
      query = filterMap[filter](query);
    }
  }

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    throw error;
  }

  return {
    words: data ?? [],
    totalCount: count ?? 0,
  };
}

export async function getAllWords(): Promise<WordsApi[]> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

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
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const { error } = await supabase
    .from("words")
    .insert({
      ...word,
      user_id: user.id,
      bookmarked: word.bookmarked ?? false,
    })
    .select();

  if (error) {
    throw error;
  }
}

export async function modifyWords(word: WordUpdateInput) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const { id, ...updateData } = word;

  const { error } = await supabase
    .from("words")
    .update({
      ...updateData,
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
    .update({ bookmarked: !bookmarked })
    .eq("id", wordId);

  if (error) throw error;
}
