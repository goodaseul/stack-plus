"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUserEmail(user?.email ?? null);
    };

    fetchUser();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Dashboard</h1>
      {userEmail ? (
        <p>반가워요! {userEmail}님 🎉</p>
      ) : (
        <p>로그인 정보를 불러오는 중...</p>
      )}
    </div>
  );
}
