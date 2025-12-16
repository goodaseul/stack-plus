import { fetcher } from "@/lib/fetcher/fetcher";
import { WordsApi } from "./types/words";

export async function getWords(): Promise<WordsApi[]> {
  return fetcher("/api/words");
}
