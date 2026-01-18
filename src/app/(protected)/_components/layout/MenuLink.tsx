import { useClickOutside } from "@/hooks/useClickOutside";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const menuLinks = [
  { url: "/dashboard", link: "Home" },
  { url: "/record", link: "Record" },
];

export default function MenuLink({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (boolean: boolean) => void;
}) {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);

  useClickOutside(
    navRef,
    () => {
      setIsMenuOpen(false);
    },
    isMenuOpen,
  );
  return (
    <nav
      ref={navRef}
      className={`
        absolute top-10 right-0 z-40
        opacity-0 pointer-events-none:
        transition-transform duration-300 ease-out
        ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      <ul className="rounded-xl bg-white px-5 py-3 border border-gray-200 shadow-sm font-bold">
        {menuLinks.map(({ url, link }) => {
          const isActive = pathname === url;

          return (
            <li key={link} className="py-2">
              <Link
                href={url}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  relative text-lg
                  transition-colors
                  ${isActive ? "text-point" : "text-gray-600 hover:text-point"}
                `}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
