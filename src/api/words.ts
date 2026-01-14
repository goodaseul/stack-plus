import { supabase } from "@/lib/supabase/supabase";
import { FilterValue } from "@/constants/filter";
import { WordsApi } from "./types/words";
import { WordCreateInput } from "@/types/word";

export async function getWords({
  filter,
  range,
}: {
  filter?: FilterValue;
  range?: { from: number; to: number };
}): Promise<WordsApi[]> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  let query = supabase
    .from("words")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const filterMap: Record<
    Exclude<FilterValue, null>,
    (queryBuilder: typeof query) => typeof query
  > = {
    hasMemo: (queryBuilder) => queryBuilder.not("memo", "is", null),
    noMemo: (queryBuilder) => queryBuilder.is("memo", null),
    bookmarked: (queryBuilder) => queryBuilder.eq("bookmarked", true),
  };

  if (filter && filter in filterMap) {
    query = filterMap[filter](query);
  }

  if (range) {
    query = query.range(range.from, range.to);
  }

  const { data, error } = await query;

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

export async function toggleBookmark(wordId: number, bookmarked: boolean) {
  const { error } = await supabase
    .from("words")
    .update({ bookmarked: !bookmarked })
    .eq("id", wordId);

  if (error) throw error;
}
