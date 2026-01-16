export interface WordsApi {
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
  words: WordsApi[];
  totalCount: number;
};
