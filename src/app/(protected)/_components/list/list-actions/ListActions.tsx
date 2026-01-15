import { useClickOutside } from "@/hooks/useClickOutside";
import { useRef, useState } from "react";
import { Word } from "@/types/word";

import ListActionsView from "./ListActionsView";
import { ModalType } from "@/types/modal";

export default function ListActions({ ...word }: Word) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownWrapperRef = useRef<HTMLDivElement | null>(null);
  const [openModal, setOpenModal] = useState<ModalType>(null);

  useClickOutside(
    dropdownWrapperRef,
    () => {
      setIsDropdownOpen(false);
    },
    isDropdownOpen
  );

  const openEditModal = () => setOpenModal("edit");
  const openDeleteModal = () => setOpenModal("delete");
  const closeModal = () => setOpenModal(null);

  return (
    <ListActionsView
      word={word}
      isDropdownOpen={isDropdownOpen}
      toggleDropdown={() => setIsDropdownOpen((prev) => !prev)}
      openEditModal={openEditModal}
      openDeleteModal={openDeleteModal}
      closeModal={closeModal}
      dropdownWrapperRef={dropdownWrapperRef}
      openModal={openModal}
    />
  );
}
