import Button from "@/components/button/Button";
import Link from "next/link";

export default function PublicHeader() {
  return (
    <header className="sticky top-0 left-0 z-20 w-full bg-transparent p-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="text-xl text-black transition-colors hover:text-point group"
        >
          STACK
          <span className="text-point transition-colors group-hover:text-black">
            PLUS
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <Button type="button" variant="text_underline" href="/login">
            로그인
          </Button>
          <Button type="button" variant="text_underline" href="/join">
            회원가입
          </Button>
        </nav>
      </div>
    </header>
  );
}
