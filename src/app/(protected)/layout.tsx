"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "./_components/Header";
import { useAuth } from "@/hooks/useAuth";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isLoggedIn, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.replace("/");
    }
  }, [loading, isLoggedIn, router]);

  if (loading) return null;
  if (!isLoggedIn) return null;

  return (
    <>
      <Header />
      {children}
    </>
  );
}
