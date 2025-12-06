"use client";

import Link from "next/link";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "outline" | "text";
  className?: string;
};

export default function LinkButton({
  href,
  children,
  variant = "default",
  className = "",
}: LinkButtonProps) {
  const baseStyles = `inline-flex items-center justify-center cursor-pointer font-bold transition-all focus:outline-none rounded-md text-sm`;

  const variants = {
    default: `px-6 py-2.5 border bg-white text-blue border-blue hover:border-white hover:bg-blue hover:text-white`,
    outline: `px-6 py-2.5 border bg-blue text-white border-blue hover:border-blue hover:bg-white hover:text-blue`,
    text: `px-3 py-1.5 hover:font-bold`,
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
