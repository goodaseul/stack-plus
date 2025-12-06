import Link from "next/link";

export default function Logo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Link
      href="/"
      className={`text-3xl font-permanent-marker font-bold text-blue tracking-normal transition-all ${
        isScrolled && "text-white tracking-widest"
      } `}
    >
      Stack+
    </Link>
  );
}
