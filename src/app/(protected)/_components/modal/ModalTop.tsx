import Button from "@/components/button/Button";
import { IoClose } from "react-icons/io5";

type ModalTopProps = {
  children: React.ReactNode;
  handleSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  title: string;
  description: string;
};

export default function ModalTop({
  children,
  handleSubmit,
  onClose,
  title,
  description,
}: ModalTopProps) {
  return (
    <form onSubmit={handleSubmit}>
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
          <h2 className="text-xl font-semibold text-black">{title}</h2>
          <p className="mt-1 text-sm text-gray-600">{description} </p>
        </div>
        {children}

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
