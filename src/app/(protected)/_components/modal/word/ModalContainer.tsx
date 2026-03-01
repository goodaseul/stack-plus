import Button from "@/components/button/Button";
import ModalTop from "../ModalTop";
import ModalBottom from "../ModalBottom";

type ModalContainerProps = {
  children: React.ReactNode;
  handleSubmit: (e: React.FormEvent) => void;
  closeModal: () => void;
  title: string;
  description: string;
};

export default function ModalContainer({
  children,
  handleSubmit,
  closeModal,
  title,
  description,
}: ModalContainerProps) {
  return (
    <form onSubmit={handleSubmit} className="max-h-screen overflow-y-auto">
      <div className="relative mx-auto max-w-[640px] rounded-2xl bg-white p-8 space-y-8">
        <ModalTop
          closeModal={closeModal}
          title={title}
          description={description}
        />
        <div className="flex-1 overflow-y-auto">{children}</div>
        <ModalBottom closeModal={closeModal}>
          <Button type="submit">저장</Button>
        </ModalBottom>
      </div>
    </form>
  );
}
