import { IoClose } from "react-icons/io5";

type ModalTopProps = {
  closeModal: () => void;
  title: string;
  description: string;
};

export default function ModalTop({
  closeModal,
  title,
  description,
}: ModalTopProps) {
  return (
    <>
      <button
        type="button"
        onClick={closeModal}
        className="absolute right-4 top-4 rounded-md p-1 text-gray-500
            hover:text-black hover:bg-gray-100 transition"
        aria-label="닫기"
      >
        <IoClose className="text-xl" />
      </button>

      <div>
        <h2 className="text-xl font-semibold text-black">{title}</h2>
        <p className="mt-1 text-sm text-gray-600">{description} </p>
      </div>
    </>
  );
}
