"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store/useUserStore";
import { getMyProfile, getSession, subscribeAuthChange } from "@/lib/supabase";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setUser, clearUser, setInitialized } = useUserStore();

  useEffect(() => {
    getSession().then(async (session) => {
      if (!session) {
        setInitialized();
        return;
      }

      setUser({ id: session.user.id });

      try {
        const profile = await getMyProfile(session.user.id);
        setUser({ nickname: profile.nickname });
      } catch (error) {
        console.error("❌ profile 불러오기 실패", error);
      } finally {
        setInitialized();
      }
    });

    const { data } = subscribeAuthChange(async (session) => {
      if (!session) {
        clearUser();
        return;
      }

      setUser({ id: session.user.id });

      try {
        const profile = await getMyProfile(session.user.id);
        setUser({ nickname: profile.nickname });
      } catch (error) {
        console.error("❌ profile 불러오기 실패", error);
      }

      setInitialized();
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, [setUser, clearUser, setInitialized]);

  return <>{children}</>;
}
