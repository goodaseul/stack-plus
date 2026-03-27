import Button from "@/components/button/Button";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import MenuLink from "./MenuLink";

export default function NavBtn() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <MenuLink isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}
