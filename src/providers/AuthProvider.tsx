"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store/useUserStore";

import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

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
    const nickname = session.user.user_metadata?.nickname ?? null;
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
