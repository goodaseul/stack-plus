import Button from "@/components/button/Button";
import Logo from "@/components/layout/header/Logo";
import { ThemeToggle } from "@/components/layout/header/ThemeButton";

export default function PublicHeader() {
  return (
    <header className="fixed top-0 left-0 z-20 w-full p-6 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Logo href="./" />
        <nav className="flex items-center gap-4">
          <ThemeToggle />
          <Button type="button" href="/explore" variant="text_underline">
            전체 표현
          </Button>
          <Button type="button" variant="text_underline" href="/dashboard">
            시작하기
          </Button>
        </nav>
      </div>
    </header>
  );
}
