"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";

export default function ProtectedProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const userId = useUserStore((state) => state.id);
  const isInitialized = useUserStore((state) => state.isInitialized);

  useEffect(() => {
    if (isInitialized && !userId) {
      router.replace("/login");
    }
  }, [userId, router, isInitialized]);

  if (!isInitialized) {
    return null;
  }

  if (!userId) {
    return null;
  }

  return <>{children}</>;
}
