import Link from "next/link";
import Button from "@/components/button/Button";
import LinkButton from "@/components/link-button/LinkButton";

export default function PublicHeader() {
  return (
    <header className="sticky left-0 top-0 flex justify-between items-center px-8 py-5 border-b border-gray-200 bg-white">
      <Link
        href="/"
        className="text-4xl font-permanent-marker font-semibold transition-all hover:tracking-widest"
      >
        Stack <span className="absolute text-2xl -right-4-top-1">+</span>
      </Link>
      <div className="flex items-center gap-4">
        <Button variant="default">Dark</Button>
        <LinkButton variant="outline" href="/login">
          로그인
        </LinkButton>
      </div>
    </header>
  );
}
