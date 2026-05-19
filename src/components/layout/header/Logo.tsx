import Link from "next/link";

export default function Logo({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="text-xl font-sekuya text-black dark:text-white transition-colors hover:text-point group"
    >
      STACK
      <span className="text-point transition-colors group-hover:text-black dark:group-hover:text-white">
        PLUS
      </span>
    </Link>
  );
}
