"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store/useUserStore";

import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { getMyProfile } from "@/api/profile";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setUser, clearUser, setInitialized } = useUserStore();
  const router = useRouter();
  const handleSession = async (session: Session | null) => {
    if (!session) {
      clearUser();
      setInitialized();
      return;
    }
    let nickname = session.user.user_metadata?.nickname ?? null;

    if (!nickname) {
      try {
        const profileData = await getMyProfile();
        nickname = profileData?.nickname ?? null;

        if (nickname) {
          await supabase.auth.updateUser({
            data: { nickname: nickname },
          });
          console.log("nickname 업데이트 성공:", nickname);
        }
      } catch (error) {
        console.error("nickname 구버전 계정 프로필 조회 실패", error);
        nickname = null;
      }
    }

    setUser({ id: session.user.id, nickname });
    setInitialized();
  };

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "TOKEN_REFRESHED" && !session) {
        clearUser();
        router.push("/login");
        return;
      }
      handleSession(session);
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return <>{children}</>;
}
