import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { signOut } from "@/lib/supabase";
import { useUserStore } from "@/store/useUserStore";

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const logout = async () => {
    try {
      await signOut();

      useUserStore.getState().clearUser();
      localStorage.clear();
      sessionStorage.clear();

      queryClient.clear();
      router.replace("/login");
      toast.success("로그아웃이 되었습니다.");
    } catch {
      toast.error("로그아웃이 실패했습니다.");
    }
  };

  return { logout };
};
