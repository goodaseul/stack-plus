import type { WordsRequest } from "@/api/types/words";

export type Word = Omit<WordsRequest, "updated_at">;

export type WordFormInput = Pick<
  WordsRequest,
  "id" | "expression" | "meaning" | "sentence" | "usage" | "memo"
>;

type BaseWord = {
  expression: string;
  meaning: string;
  sentence?: string;
  usage?: string;
  memo?: string;
  bookmarked?: boolean;
};
export type WordCreateInput = BaseWord;

export type WordUpdateInput = BaseWord & {
  id: number;
};

export type FormType = WordCreateInput | WordUpdateInput;
export type WordFormProps =
  | {
      mode: "create";
      initialValues: WordCreateInput;
      onSubmit: (item: WordCreateInput) => void;
      title: string;
      description: string;
      closeModal: () => void;
    }
  | {
      mode: "update";
      initialValues: WordUpdateInput;
      onSubmit: (item: WordUpdateInput) => void;
      title: string;
      description: string;
      closeModal: () => void;
    };
