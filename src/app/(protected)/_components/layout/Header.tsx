"use client";

import Button from "@/components/button/Button";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useLogout } from "@/hooks/auth/useLogout";
import { ThemeToggle } from "@/components/layout/header/ThemeButton";
import MyMenu from "./Header/MyMenu";
import NavBtn from "./Header/NavBtn";
import Logo from "@/components/layout/header/Logo";

export default function Header() {
  const { logout } = useLogout();

  return (
    <header className="sticky top-0 z-20 p-6 bg-background backdrop-blur-md border-b border-gray-200 dark:border-gray-100/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Logo />

        <div className="relative flex items-center gap-">
          <ThemeToggle />

          <MyMenu />

          <Button type="button" variant="text" className="p-1" onClick={logout}>
            <RiLogoutBoxRLine className="text-lg" />
          </Button>

          <NavBtn />
        </div>
      </div>
    </header>
  );
}
