import { useEffect, useState } from "react";

export function useMobileSize() {
  const [isSm, setIsSm] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsSm(window.innerWidth < 640); // tailwind sm 기준
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isSm;
}
