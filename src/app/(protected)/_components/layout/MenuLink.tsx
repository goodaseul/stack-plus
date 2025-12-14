import Link from "next/link";
import { usePathname } from "next/navigation";

const menuLinks = [
  { url: "/dashboard", link: "Home" },
  { url: "/record", link: "Record" },
  //   { url: "/quiz", link: "Quiz" },
];

export default function MenuLink({ isMenuOpen }: { isMenuOpen: boolean }) {
  const pathname = usePathname();

  return (
    <nav
      className={`
        fixed top-17 right-0 z-40
        transition-transform duration-300 ease-out
        ${isMenuOpen ? "-translate-x-6" : "translate-x-full"}
      `}
    >
      <ul className="font-permanent-marker flex items-center gap-5 rounded-xl bg-white/80 px-4 py-3 shadow-lg backdrop-blur-md">
        {menuLinks.map((menuLink) => {
          const isActive = pathname === menuLink.url;

          return (
            <li
              key={menuLink.link}
              className={`
                group transition-all text-gray px-2 
                ${isActive ? "text-green" : "hover:text-green"}
              `}
            >
              <Link href={menuLink.url} className="flex items-center relative ">
                {menuLink.link}
                <span
                  className={`
                  absolute -right-3 -top-1  ${
                    isActive ? "visible" : "invisible group-hover:visible"
                  }`}
                >
                  <sup>+</sup>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
