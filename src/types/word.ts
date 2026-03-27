import type { WordsRequest } from "@/api/types/words";

export type Word = Omit<WordsRequest, "updated_at">;

export type WordFormInput = Pick<
  WordsRequest,
  "id" | "expression" | "meaning" | "sentence" | "usage" | "memo"
>;

type BaseFormProps = {
  title: string;
  description: string;
  closeModal: () => void;
};

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
  | (BaseFormProps & {
      mode: "create";
      initialValues: WordCreateInput;
      onSubmit: (item: WordCreateInput) => void;
    })
  | (BaseFormProps & {
      mode: "update";
      initialValues: WordUpdateInput;
      onSubmit: (item: WordUpdateInput) => void;
    });
