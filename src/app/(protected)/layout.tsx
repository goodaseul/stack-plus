"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./_components/Header";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/login"); // 로그인 안하면 튕김
      } else {
        setIsChecking(false);
      }
    };

    checkUser();
  }, [router]);

  if (isChecking) {
    return <p className="p-6">사용자 확인 중...</p>; // 잠깐 보여줄 로딩 UI
  }

  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}
