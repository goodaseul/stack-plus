import Button from "@/components/button/Button";

type ModalBottomProps = {
  closeModal: () => void;
  children?: React.ReactNode;
};
export default function ModalBottom({
  closeModal,
  children,
}: ModalBottomProps) {
  return (
    <div className="flex justify-end gap-2 pt-4">
      <Button type="button" variant="outline" onClick={closeModal}>
        취소
      </Button>
      {children}
    </div>
  );
}
