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
  const baseStyles = `
  inline-flex items-center justify-center
  cursor-pointer font-medium transition-all
  focus:outline-none
  rounded-md text-sm 
`;

  const variants = {
    default: `
    px-6 py-2.5
    bg-gray-900 text-white
    hover:bg-gray-800
  `,
    outline: `
    px-6 py-2.5
    border border-gray-900 text-gray-900 bg-white
    hover:bg-gray-100
  `,
    text: `
    px-3 py-1.5 hover:font-bold
  `,
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
