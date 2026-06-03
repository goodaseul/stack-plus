import Link from "next/link";

export default function Logo({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="text-xl font-sekuya text-black dark:text-white 
  transition-colors hover:text-point group"
    >
      <span className="hidden sm:inline">STACK</span>
      <span className="sm:hidden">S</span>

      <span className="text-point transition-colors group-hover:text-black dark:group-hover:text-white">
        <span className="hidden sm:inline">PLUS</span>
        <span className="sm:hidden text-2xl">⁺</span>
      </span>
    </Link>
  );
}
