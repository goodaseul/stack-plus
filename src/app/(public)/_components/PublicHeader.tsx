"use client";

import Link from "next/link";
import { RiLoginCircleLine } from "react-icons/ri";
import { IoMoonSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function PublicHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 1);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
      fixed top-0 left-0 w-full z-50 
      transition-all duration-300 backdrop-blur-md py-4

      ${isScrolled ? "bg-blue/80" : "bg-transparent "}
    `}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6">
        <Link
          href="/"
          className={`
            text-3xl font-permanent-marker font-bold text-blue tracking-normal transition-all
            ${isScrolled && "text-white tracking-widest"}
          `}
        >
          Stack+
        </Link>

        <nav className="flex items-center gap-5">
          <button>
            <IoMoonSharp
              className={`
                w-5 h-5 transition-all 
                ${isScrolled ? "text-white" : "text-blue"}
              `}
            />
          </button>
          <Link href="/login">
            <RiLoginCircleLine
              className={`
                w-5 h-5 transition-all 
                ${isScrolled ? "text-white" : "text-blue"}
              `}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}
