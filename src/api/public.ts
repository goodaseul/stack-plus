import { supabase } from "@/lib/supabase";
import { PublicWordRequest } from "./types/words";

const PAGE_SIZE = 6;

export async function getPublicWords({
  pageParam = 0,
}: {
  pageParam: number;
}): Promise<{
  data: PublicWordRequest[];
  nextPage: number | undefined;
  totalCount: number;
}> {
  const from = pageParam * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const { count } =
    pageParam === 0
      ? await supabase
          .from("words")
          .select("*", { count: "exact", head: true })
          .eq("is_public", true)
      : { count: null };

  const { data, error } = await supabase
    .from("words")
    .select(`*, profiles(nickname)`)
    .eq("is_public", true)
    .range(from, to);

  if (error) throw error;

  return {
    data: data ?? [],
    nextPage: data?.length === PAGE_SIZE ? pageParam + 1 : undefined,
    totalCount: count ?? 0,
  };
}
