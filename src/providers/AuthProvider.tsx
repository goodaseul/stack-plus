"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store/useUserStore";
import { getMyProfile } from "@/api/profile";

import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setUser, clearUser, setInitialized } = useUserStore();

  const handleSession = async (session: Session | null) => {
    if (!session) {
      clearUser();
      setInitialized();
      return;
    }

    try {
      const profile = await getMyProfile();
      if (!profile) {
        setUser({
          id: session.user.id,
          nickname: null,
        });
        return;
      }
      setUser({
        id: session.user.id,
        nickname: profile.nickname,
      });
    } catch (error) {
      console.error("프로필 불러오기 실패", JSON.stringify(error));
      setUser({ id: session.user.id, nickname: null });
    } finally {
      setInitialized();
    }
  };

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, sesseion) => {
      handleSession(sesseion);
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return <>{children}</>;
}
