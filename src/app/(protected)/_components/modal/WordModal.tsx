"use client";

import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import { useFormFields } from "@/hooks/auth/useFormFields";
import { WordCreateInput } from "@/types/word";
import { FiChevronDown } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { ModalField } from "./ModalField";

type WordFormProps = {
  onAdd: (item: WordCreateInput) => void;
  onClose: () => void;
};

export default function WordModal({ onAdd, onClose }: WordFormProps) {
  const { form, errors, setErrors, updateField } = useFormFields({
    expression: "",
    meaning: "",
    sentence: "",
    usage: "일상생활",
    memo: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      ...errors,
      expression: form.expression.trim() ? "" : "단어를 입력해주세요",
      meaning: form.meaning.trim() ? "" : "뜻을 입력해주세요",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    onAdd({ ...form });
    onClose();
  };

  const InputStyles =
    "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition";
  const SelectStyles =
    "w-full appearance-none rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition";

  return (
    <form onSubmit={onSubmit}>
      <div className="relative mx-auto max-w-[640px] rounded-2xl bg-white p-8 space-y-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md p-1 text-gray-500 hover:text-black hover:bg-gray-100 transition"
          aria-label="닫기"
        >
          <IoClose className="text-xl" />
        </button>

        <div>
          <h2 className="text-xl font-semibold text-black">단어 추가</h2>
          <p className="mt-1 text-sm text-gray-600">
            단어와 의미만 입력해도 충분해요
          </p>
        </div>

        <ModalField label="단어*">
          <Input
            value={form.expression}
            onChange={(e) => updateField("expression", e.target.value)}
            placeholder="book"
            errors={errors.expression}
          />
        </ModalField>
        <ModalField label="뜻*">
          <Input
            value={form.meaning}
            onChange={(e) => updateField("meaning", e.target.value)}
            placeholder="책"
            errors={errors.meaning}
          />
        </ModalField>
        <ModalField label="예문">
          <Input
            value={form.sentence}
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
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={onClose}>
            취소
          </Button>
          <Button type="submit">저장</Button>
        </div>
      </div>
    </form>
  );
}
