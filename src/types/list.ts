export type ListType = {
  id: number;
  word: string;
  meaning: string;
  sentence: string;
  usage: string;
};

export type ListProps = {
  lists: ListType[];
  onDeleteWord: (id: number) => void;
};
