"use client";

import Button from "@/components/button/Button";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import MenuLink from "./MenuLink";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className="
          sticky top-0 left-0 w-full z-50
          backdrop-blur-md py-4
        "
      >
        <div className="mx-auto flex items-center justify-between px-6">
          <h1 className="font-permanent-marker text-3xl text-green hover-letter">
            <Link href="/dashboard">
              STACK <sup>+</sup>
            </Link>
          </h1>

          <div className="flex items-center text-gray-strong">
            <p className="mr-2">
              <Link href="./mypage" className="underline">
                다슬기
              </Link>
              님<span className="hidden md:visible">반갑습니다!</span>
            </p>

            <Button type="button" variant="text">
              <RiLogoutBoxRLine />
            </Button>

            <Button type="button" variant="text" onClick={toggleMenu}>
              {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
            </Button>
          </div>
        </div>
      </header>

      <MenuLink isMenuOpen={isMenuOpen} />
    </>
  );
}
