import Input from "@/components/input/Input";
import { ModalField } from "./ModalField";
import { WordCreateInput, WordUpdateInput } from "@/types/word";
import { FiChevronDown } from "react-icons/fi";

type ModalBodyProps = {
  updateField: (
    name:
      | "expression"
      | "meaning"
      | "sentence"
      | "usage"
      | "memo"
      | "bookmarked",
    value: string
  ) => void;

  form: WordCreateInput | WordUpdateInput;
  errors: Record<
    "expression" | "meaning" | "sentence" | "usage" | "memo" | "bookmarked",
    string
  >;
};

export default function ModalBody({
  updateField,
  form,
  errors,
}: ModalBodyProps) {
  const InputStyles =
    "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition";
  const SelectStyles =
    "w-full appearance-none rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition";

  return (
    <>
      <ModalField label="단어*">
        <Input
          value={form.expression || ""}
          onChange={(e) => updateField("expression", e.target.value)}
          placeholder="book"
          errors={errors.expression}
        />
      </ModalField>
      <ModalField label="뜻*">
        <Input
          value={form.meaning || ""}
          onChange={(e) => updateField("meaning", e.target.value)}
          placeholder="책"
          errors={errors.meaning}
        />
      </ModalField>
      <ModalField label="예문">
        <Input
          value={form.sentence || ""}
          onChange={(e) => updateField("sentence", e.target.value)}
          placeholder="I bought a book yesterday."
        />
      </ModalField>
      <ModalField label="사용 장소">
        <div className="flex items-center relative">
          <select
            value={form.usage}
            onChange={(e) => updateField("usage", e.target.value)}
            className={SelectStyles}
          >
            <option value="일상생활">일상생활</option>
            <option value="회사">회사</option>
            <option value="학교">학교</option>
          </select>

          <FiChevronDown
            className="
                     pointer-events-none
                     absolute right-3
                     text-gray-400
                     "
            size={18}
          />
        </div>
      </ModalField>
      <ModalField label="메모">
        <textarea
          value={form.memo}
          onChange={(e) => updateField("memo", e.target.value)}
          placeholder="헷갈렸던 포인트 정리"
          className={`${InputStyles} min-h-[90px] resize-none`}
        />
      </ModalField>
    </>
  );
}
