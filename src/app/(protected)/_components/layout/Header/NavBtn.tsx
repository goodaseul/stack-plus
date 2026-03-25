import Button from "@/components/button/Button";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function NavBtn({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (boolean: boolean) => void;
}) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, () => setIsMenuOpen(false), isMenuOpen);
  return (
    <div ref={menuRef}>
      <Button
        type="button"
        variant="text"
        className="p-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <IoClose className="text-xl" />
        ) : (
          <GiHamburgerMenu className="text-xl" />
        )}
      </Button>
    </div>
  );
}
