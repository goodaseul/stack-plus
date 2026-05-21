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

export type BaseWord = {
  id: number;
  expression: string;
  meaning: string;
  usage: string;
  memo?: string;
  sentence?: string;
  bookmarked?: boolean;
  is_public: boolean;
};
export type WordCreateInput = Omit<BaseWord, "id">;

export type WordUpdateInput = BaseWord;

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
