"use client";

import { createPortal } from "react-dom";
import { ReactNode, useEffect } from "react";

type ModalProps = {
  children: ReactNode;
  closeModal: () => void;
};

export default function Modal({ children, closeModal }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  if (typeof window === "undefined") return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <div
      className="
        fixed inset-0 z-9999
        flex items-center justify-center
        bg-black/40
        px-4
      "
      onClick={closeModal}
    >
      <div
        className="
          w-full max-w-2xl
          overflow-y-auto
        "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    modalRoot
  );
}
