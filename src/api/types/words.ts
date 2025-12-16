export interface WordsApi {
  id: number;
  meaning: string;
  expression: string;
  sentence?: string;
  memo?: string;
  usage: string;
  bookmarked: boolean;
  created_at: string;
  updated_at: string;
}
