import Link from "next/link";
import { usePathname } from "next/navigation";

const menuLinks = [
  { url: "/dashboard", link: "Dashboard" },
  { url: "/record", link: "Record" },
  { url: "/game", link: "Game" },
];
export default function Menu() {
  const pathname = usePathname();
  return (
    <nav className="ml-auto mr-5 ">
      <ul className="font-permanent-marker flex items-center gap-5">
        {menuLinks.map((menuLink) => {
          const isActive = pathname === menuLink.url;
          return (
            <li
              key={menuLink.link}
              className={` hover:text-blue transition-all group ${
                isActive ? "text-blue hover:pr-0" : "hover:pr-5"
              }`}
            >
              <Link href={menuLink.url}>
                {menuLink.link}
                <span
                  className={`ml-2 invisible group-hover:visible transition-all ${
                    isActive && "group-hover: visible text-blue"
                  }`}
                >
                  +
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
