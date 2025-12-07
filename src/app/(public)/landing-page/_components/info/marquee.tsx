"use client";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

type MarqueeProps = {
  text?: string;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  color?: string;
};

export default function Marquee({
  text = " stack+ ",
  speed = 50,
  direction = "left",
  className = "",
  color = "text-white",
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);

  useAnimationFrame((t, delta) => {
    if (!containerRef.current) return;
    const width = containerRef.current.scrollWidth / 2;

    const move = (speed * delta) / 1000;
    x.current += direction === "left" ? -move : move;

    if (direction === "left" && x.current <= -width) x.current = 0;
    if (direction === "right" && x.current >= 0) x.current = -width;

    containerRef.current.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <motion.div
        ref={containerRef}
        className={`flex whitespace-nowrap opacity-[0.07] font-black font-permanent-marker items-center h-full ${color} ${className}`}
        style={{ willChange: "transform" }}
      >
        <span>{text.repeat(6)}</span>
        <span>{text.repeat(6)}</span>
      </motion.div>
    </div>
  );
}
