import Link from "next/link";

export default function PublicHeader() {
  return (
    <header className="fixed top-0 left-0 z-20 w-full bg-transparent px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="font-permanent-marker text-xl text-gray-900">
          Stack+
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            로그인
          </Link>
          <Link
            href="/join"
            className="rounded-full border border-gray-900 px-4 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition"
          >
            시작하기
          </Link>
        </nav>
      </div>
    </header>
  );
}
