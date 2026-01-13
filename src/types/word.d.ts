type WordType = {
  id: number;
  expression: string;
  meaning: string;
  sentence?: string;
  bookmarked: boolean;
  usage: string;
  memo?: string;
  created_at: string;
};

type PopupAddType = {
  id: number;
  expression: string;
  meaning: string;
  sentence?: string;
  usage: string;
  memo?: string;
};
