import { useClickOutside } from "@/hooks/useClickOutside";
import { useRef, useState } from "react";
import { Word } from "@/types/word";

import ListActionsView from "./ListActionsView";

export default function ListActions({ ...word }: Word) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownWrapperRef = useRef<HTMLDivElement | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useClickOutside(
    dropdownWrapperRef,
    () => {
      setIsDropdownOpen(false);
    },
    isDropdownOpen
  );

  return (
    <ListActionsView
      word={word}
      isDropdownOpen={isDropdownOpen}
      toggleDropdown={() => setIsDropdownOpen((prev) => !prev)}
      onOpen={() => setIsOpenModal(true)}
      onClose={() => setIsOpenModal(false)}
      dropdownWrapperRef={dropdownWrapperRef}
      isOpenModal={isOpenModal}
    />
  );
}
