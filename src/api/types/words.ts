import { FilterValue } from "@/constants/filter";

export interface WordsRequest {
  id: number;
  user_id: string;
  meaning: string;
  expression: string;
  sentence?: string;
  memo?: string;
  usage: string;
  bookmarked: boolean;
  created_at: string;
  updated_at: string;
}

export type WordsResponse = {
  words: WordsRequest[];
  totalCount: number;
};

export type WordsQueryRequest = {
  filter?: FilterValue;
  keyword?: string;
  wordId?: string | null;
  page?: number;
  pageSize?: number;
};
