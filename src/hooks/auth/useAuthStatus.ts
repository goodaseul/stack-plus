"use client";

import { useUserStore } from "@/store/useUserStore";

export function useAuthStatus() {
  const { id, isInitialized } = useUserStore();

  return {
    isReady: isInitialized,
    isLoggedIn: Boolean(id),
    userId: id,
  };
}
