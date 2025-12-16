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
        fixed top-16 right-0 z-40
        transition-transform duration-300 ease-out
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <ul className="flex items-center gap-6 rounded-xl bg-white px-5 py-3 border border-gray-200 shadow-sm">
        {menuLinks.map(({ url, link }) => {
          const isActive = pathname === url;

          return (
            <li key={link}>
              <Link
                href={url}
                className={`
                  relative font-permanent-marker text-lg
                  transition-colors
                  ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }
                `}
              >
                {link}

                {isActive && (
                  <sup className="absolute -right-3 -top-1 text-xs">+</sup>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
