"use client";
import {
  FormType,
  WordCreateInput,
  WordFormProps,
  WordUpdateInput,
} from "@/types/word";
import ModalContainer from "./ModalContainer";
import ModalBody from "./ModalBody";
import { useForm } from "react-hook-form";

export default function WordModal({
  mode,
  initialValues,
  onSubmit,
  title,
  description,
  closeModal,
}: WordFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: initialValues,
  });

  const submitHandler = (data: FormType) => {
    if (mode === "create") {
      onSubmit(data as WordCreateInput);
    } else {
      onSubmit(data as WordUpdateInput);
    }
  };

  return (
    <ModalContainer
      handleSubmit={handleSubmit(submitHandler)}
      closeModal={closeModal}
      title={title}
      description={description}
    >
      <ModalBody register={register} errors={errors} />
    </ModalContainer>
  );
}
