const PATTERN_TEXT = Array.from({ length: 30 }, () => "!");

export function MemoBannerPattern() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-10 top-1/2 w-[120%] -translate-y-1/2 rotate-12 font-permanent-marker">
        {Array.from({ length: 10 }).map((_, rowIdx) => (
          <p
            key={rowIdx}
            className="whitespace-nowrap text-7xl font-bold tracking-widest text-green opacity-[0.03]"
            style={{ transform: `translateY(${rowIdx * 6}px)` }}
          >
            {PATTERN_TEXT.map((text, idx) => (
              <span key={idx} className="mr-6">
                {text}
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}
