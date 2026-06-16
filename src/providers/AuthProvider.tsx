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
    const nickname = session.user.user_metadata?.nickname ?? null;
    setUser({ id: session.user.id, nickname });
    setInitialized();
  };

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "TOKEN_REFRESHED" && !session) {
        clearUser();
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
