import Link from "next/link";
import { usePathname } from "next/navigation";

const menuLinks = [
  { url: "/dashboard", link: "Home" },
  { url: "/record", link: "Record" },
];

export default function MenuLink({ isMenuOpen }: { isMenuOpen: boolean }) {
  const pathname = usePathname();

  return (
    <nav
      className={`
        absolute top-10 right-0 z-40
        opacity-0
        transition-transform duration-300 ease-out
        ${isMenuOpen ? "opacity-100" : "opactiy-0"}
      `}
    >
      <ul className="rounded-xl bg-white px-5 py-3 border border-gray-200 shadow-sm">
        {menuLinks.map(({ url, link }) => {
          const isActive = pathname === url;

          return (
            <li key={link} className="py-2">
              <Link
                href={url}
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
