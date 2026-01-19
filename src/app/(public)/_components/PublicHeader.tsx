"use client";
import Button from "@/components/button/Button";
import { useAuthStatus } from "@/hooks/auth/useAuthStatus";
import Link from "next/link";
import { useLogout } from "@/hooks/auth/useLogout";

export default function PublicHeader() {
  const { logout } = useLogout();
  const { isReady, isLoggedIn } = useAuthStatus();
  if (!isReady) return null;

  return (
    <header className="fixed top-0 left-0 z-20 w-full p-6 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="font-sekuya text-xl text-black transition-colors hover:text-point group"
        >
          STACK
          <span className="text-point transition-colors group-hover:text-black">
            PLUS
          </span>
        </Link>

        {isLoggedIn ? (
          <nav className="flex items-center gap-4">
            <Button type="button" variant="text_underline" href="/dashboard">
              대시보드
            </Button>
            <Button type="button" variant="text_underline" onClick={logout}>
              로그아웃
            </Button>
          </nav>
        ) : (
          <nav className="flex items-center gap-4">
            <Button type="button" variant="text_underline" href="/login">
              로그인
            </Button>
            <Button type="button" variant="text_underline" href="/join">
              회원가입
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
