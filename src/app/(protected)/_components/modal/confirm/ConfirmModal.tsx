import Button from "@/components/button/Button";
import ModalTop from "../ModalTop";
import ModalBottom from "../ModalBottom";
import { toast } from "sonner";

type ModalContainerProps = {
  closeModal: () => void;
  title: string;
  description: string;
  deleteWord: () => void;
};

export default function ConfirmModal({
  closeModal,
  title,
  description,
  deleteWord,
}: ModalContainerProps) {
  return (
    <div className="relative mx-auto max-w-[640px] rounded-2xl bg-white p-8 space-y-8">
      <ModalTop
        closeModal={closeModal}
        title={title}
        description={description}
      />

      <ModalBottom closeModal={closeModal}>
        <Button
          type="button"
          onClick={() => {
            deleteWord();
            toast.success("삭제가 되었습니다.");
            closeModal();
          }}
        >
          삭제
        </Button>
      </ModalBottom>
    </div>
  );
}
