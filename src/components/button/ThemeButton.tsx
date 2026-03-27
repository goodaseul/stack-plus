"use client";
import { useMobileSize } from "@/hooks/useMobileSize";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isMobile = useMobileSize();

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      className={`
        font-sekuya text-sm md:text-md bg-whiterounded-sm px-2 py-1`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark"
        ? isMobile
          ? "☀️"
          : "light"
        : isMobile
          ? "🌙"
          : "dark"}
    </button>
  );
}
