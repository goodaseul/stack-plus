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

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="mx-auto flex h-14 items-center justify-between px-6">
          {/* Logo */}
          <h1 className="font-permanent-marker text-2xl text-gray-900">
            <Link href="/dashboard">
              STACK<sup className="text-xs ml-0.5">+</sup>
            </Link>
          </h1>

          {/* User actions */}
          <div className="flex items-center gap-3 text-gray-600">
            <Link href="/mypage" className="text-sm hover:underline">
              다슬기
            </Link>

            <Button type="button" variant="text" className="p-1">
              <RiLogoutBoxRLine className="text-lg" />
            </Button>

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
        </div>
      </header>

      <MenuLink isMenuOpen={isMenuOpen} />
    </>
  );
}
