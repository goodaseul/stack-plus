import Link from "next/link";
import { IoMoonSharp } from "react-icons/io5";
import { RiLoginCircleLine } from "react-icons/ri";

export default function Buttons({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className="flex items-center gap-5">
      <button type="button" className="cursor-pointer">
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
    </div>
  );
}
