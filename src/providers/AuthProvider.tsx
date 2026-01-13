"use client";

import { useEffect } from "react";
import { getMyProfile } from "@/lib/profile";
import { useUserStore } from "@/store/useUserStore";
import { supabase } from "@/lib/supabase/supabase";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setUser, clearUser, setInitialized } = useUserStore();

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data, error }) => {
      console.log(error);

      const session = data.session;

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

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "INITIAL_SESSION") {
        return;
      }

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
      subscription.unsubscribe();
    };
  }, [setUser, clearUser, setInitialized]);

  return <>{children}</>;
}
