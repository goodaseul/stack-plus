import type { WordsApi } from "@/api/types/words";

export type Word = Omit<WordsApi, "updated_at">;

export type WordFormInput = Pick<
  WordsApi,
  "id" | "expression" | "meaning" | "sentence" | "usage" | "memo"
>;

export type WordCreateInput = Pick<
  WordsApi,
  "expression" | "meaning" | "sentence" | "usage" | "memo"
> & {
  bookmarked?: boolean;
};

export type WordUpdateInput = {
  id: number;
} & Partial<WordCreateInput>;
