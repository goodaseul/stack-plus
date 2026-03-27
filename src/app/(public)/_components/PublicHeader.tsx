import Button from "@/components/button/Button";
import { ThemeToggle } from "@/components/button/ThemeButton";
import Link from "next/link";

export default function PublicHeader() {
  return (
    <header className="fixed top-0 left-0 z-20 w-full p-6 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="font-sekuya text-xl text-foreground transition-colors hover:text-point group"
        >
          STACK
          <span className="text-point transition-colors group-hover:text-foreground">
            PLUS
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <ThemeToggle />
          <Button type="button" variant="text_underline" href="/dashboard">
            시작하기
          </Button>
        </nav>
      </div>
    </header>
  );
}
