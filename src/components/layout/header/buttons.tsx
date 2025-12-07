import Link from "next/link";
import { IoMoonSharp } from "react-icons/io5";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { GrLogin, GrLogout } from "react-icons/gr";
export default function Buttons({ isScrolled }: { isScrolled: boolean }) {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const onLogout = async () => {
    await supabase.auth.signOut();
    // 필요하면 redirect
    router.push("/");
  };

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
        // 로그인 상태 → 로그아웃 아이콘
        <button onClick={onLogout}>
          <GrLogout
            className={`
                   cursor-pointer
              w-5 h-5 transition-all 
              ${isScrolled ? "text-white" : "text-blue"}
            `}
          />
        </button>
      ) : (
        // 비로그인 → 로그인 페이지 이동
        <Link href="/login">
          <GrLogin
            className={`
                cursor-pointer
              w-5 h-5 transition-all 
              ${isScrolled ? "text-white" : "text-blue"}
            `}
          />
        </Link>
      )}
    </div>
  );
}
