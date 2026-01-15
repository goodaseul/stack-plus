"use client";

import { useFormFields } from "@/hooks/auth/useFormFields";
import { WordCreateInput, WordUpdateInput } from "@/types/word";
import ModalTop from "./ModalTop";
import ModalBody from "./ModalBody";

type WordFormProps = {
  initialValues: WordCreateInput | WordUpdateInput;
  onSubmit: (item: WordCreateInput | WordUpdateInput) => void;
  title: string;
  description: string;
  onClose: () => void;
};

export default function WordModal({
  initialValues,
  onSubmit,
  title,
  description,
  onClose,
}: WordFormProps) {
  const { form, errors, setErrors, updateField } = useFormFields<
    WordCreateInput | WordUpdateInput
  >(initialValues);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      ...errors,
      expression: form.expression?.trim() ? "" : "단어를 입력해주세요",
      meaning: form.meaning?.trim() ? "" : "뜻을 입력해주세요",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    onSubmit(form);
    onClose();
  };

  return (
    <ModalTop
      handleSubmit={handleSubmit}
      onClose={onClose}
      title={title}
      description={description}
    >
      <ModalBody updateField={updateField} form={form} errors={errors} />
    </ModalTop>
  );
}
