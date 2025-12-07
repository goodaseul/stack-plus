import Link from "next/link";
import { IoMoonSharp } from "react-icons/io5";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { GrLogin, GrLogout } from "react-icons/gr";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
export default function Buttons({ isScrolled }: { isScrolled: boolean }) {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const onLogout = async () => {
    await supabase.auth.signOut();
    // 필요하면 redirect
    router.push("/");
  };

  console.log("로그인 여부:", isLoggedIn);

  return (
    <div className="flex items-center gap-5">
      {/* 다크모드 버튼 */}
      <button type="button" className="cursor-pointer">
        <IoMoonSharp
          className={`
               cursor-pointer
            w-5 h-5 transition-all 
            ${isScrolled ? "text-white" : "text-blue"}
          `}
        />
      </button>
      {isLoggedIn ? (
        <button className="cursor-pointer" onClick={onLogout}>
          <FaSignOutAlt
            className={`w-5 h-5 ${isScrolled ? "text-white" : "text-blue"}`}
          />
        </button>
      ) : (
        <Link href="/login" className="cursor-pointer">
          <FaUser
            className={`w-5 h-5 ${isScrolled ? "text-white" : "text-blue"}`}
          />
        </Link>
      )}
    </div>
  );
}
