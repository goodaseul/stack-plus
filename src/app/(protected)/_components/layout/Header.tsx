"use client";

import Button from "@/components/button/Button";
import { useState } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import MenuLink from "./Header/MenuLink";
import { useLogout } from "@/hooks/auth/useLogout";
import { ThemeToggle } from "@/components/button/ThemeButton";
import MyMenu from "./Header/MyMenu";
import NavBtn from "./Header/NavBtn";
import Logo from "./Header/Logo";

export default function Header() {
  const { logout } = useLogout();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 p-6 bg-background backdrop-blur-md border-b border-gray-200 dark:border-gray-100/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Logo />

        <div className="relative flex items-center gap-1 text-gray-600">
          <ThemeToggle />

          <MyMenu />

          <Button type="button" variant="text" className="p-1" onClick={logout}>
            <RiLogoutBoxRLine className="text-lg" />
          </Button>

          <NavBtn isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <MenuLink isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
    </header>
  );
}
