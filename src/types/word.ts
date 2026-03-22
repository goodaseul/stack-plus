import type { WordsRequest } from "@/api/types/words";

export type Word = Omit<WordsRequest, "updated_at">;

export type WordFormInput = Pick<
  WordsRequest,
  "id" | "expression" | "meaning" | "sentence" | "usage" | "memo"
>;

export type WordCreateInput = Pick<
  WordsRequest,
  "expression" | "meaning" | "sentence" | "usage" | "memo"
> & {
  bookmarked?: boolean;
};

export type WordUpdateInput = {
  id: number;
} & Partial<WordCreateInput>;
