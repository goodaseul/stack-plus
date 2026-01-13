import { fetcher } from "@/lib/fetcher/fetcher";
import { WordsApi } from "./types/words";
import { FilterValue } from "@/constants/filter";

export async function getWords({
  filter,
}: {
  filter?: FilterValue;
}): Promise<WordsApi[]> {
  return fetcher("/api/words", {
    params: filter ? { filter } : undefined,
  });
}
