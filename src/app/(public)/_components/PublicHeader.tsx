// "use client";

// import { useState, useEffect } from "react";
// import Logo from "@/components/layout/header/logo";
// import Buttons from "@/components/layout/header/buttons";

// export default function PublicHeader() {
//   // 상태관리
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 1);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`
//       fixed top-0 left-0 w-full z-50
//       transition-all duration-300 backdrop-blur-md py-4

//       ${isScrolled ? "bg-blue/80" : "bg-transparent "}
//     `}
//     >
//       <div className="flex items-center justify-between max-w-7xl mx-auto px-6">
//         <Logo isScrolled={isScrolled} />
//         <Buttons isScrolled={isScrolled} />
//       </div>
//     </header>
//   );
// }
