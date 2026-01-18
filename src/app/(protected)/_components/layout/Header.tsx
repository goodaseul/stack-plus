"use client";

import Button from "@/components/button/Button";
import Link from "next/link";
import { useState, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import MenuLink from "./MenuLink";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";
import { signOut } from "@/lib/supabase";
import { useWordStats } from "@/hooks/queries/words";
import MyTooltip from "./MyTooltip";
import { useClickOutside } from "@/hooks/useClickOutside";

export default function Header() {
  const { id, nickname } = useUserStore();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMyOpen, setIsMyOpen] = useState(false);
  const { total, memo, bookmark } = useWordStats();

  const myWrapperRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(myWrapperRef, () => setIsMyOpen(false), isMyOpen);

  const handleLogout = async () => {
    try {
      await signOut();
      router.push("/login");
    } catch {
      alert("로그아웃 실패");
    }
  };

  return (
    <header className="sticky top-0 z-20 p-6 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/dashboard"
          className="text-xl font-sekuya text-black transition-colors hover:text-point group"
        >
          STACK
          <span className="text-point transition-colors group-hover:text-black">
            PLUS
          </span>
        </Link>

        <div className="relative flex items-center gap-3 text-gray-600">
          <div ref={myWrapperRef} className="relative">
            <Button
              onClick={() => setIsMyOpen((prev) => !prev)}
              variant="text_underline"
            >
              {id && nickname}
            </Button>

            {isMyOpen && (
              <MyTooltip
                nickname={nickname}
                total={total}
                memo={memo}
                bookmark={bookmark}
              />
            )}
          </div>

          <Button
            type="button"
            variant="text"
            className="p-1"
            onClick={handleLogout}
          >
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

          <MenuLink isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
    </header>
  );
}
