"use client";

import { useFormFields } from "@/hooks/form/useFormFields";
import { WordCreateInput, WordUpdateInput } from "@/types/word";
import ModalContainer from "./ModalContainer";
import ModalBody from "./ModalBody";

type WordFormProps = {
  initialValues: WordCreateInput | WordUpdateInput;
  onSubmit: (item: WordCreateInput | WordUpdateInput) => void;
  title: string;
  description: string;
  closeModal: () => void;
};

export default function WordModal({
  initialValues,
  onSubmit,
  title,
  description,
  closeModal,
}: WordFormProps) {
  const { form, errors, setErrors, updateField } = useFormFields<
    WordCreateInput | WordUpdateInput
  >(initialValues);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      ...errors,
      expression: form.expression?.trim() ? "" : "단어를 입력해주세요.",
      meaning: form.meaning?.trim() ? "" : "뜻을 입력해주세요.",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    onSubmit(form);
    closeModal();
  };

  return (
    <ModalContainer
      handleSubmit={handleSubmit}
      closeModal={closeModal}
      title={title}
      description={description}
    >
      <ModalBody updateField={updateField} form={form} errors={errors} />
    </ModalContainer>
  );
}
