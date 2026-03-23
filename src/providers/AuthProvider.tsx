"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store/useUserStore";
import { getMyProfile } from "@/api/profile";

import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
}

function subscribeAuthChange(callback: (session: Session | null) => void) {
  return supabase.auth.onAuthStateChange((_, session) => {
    callback(session);
  });
}

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
        console.error("profile 불러오기 실패", error);
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
        console.error("profile 불러오기 실패", error);
      }

      setInitialized();
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, [setUser, clearUser, setInitialized]);

  return <>{children}</>;
}
