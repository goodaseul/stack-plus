"use client";
import Button from "@/components/button/Button";
import { useAuthStatus } from "@/hooks/auth/useAuthStatus";

export default function BannerPage() {
  const { isReady, isLoggedIn } = useAuthStatus();

  if (!isReady) return null;
  return (
    <section className="bg-linear-to-br from-point/25 to-point/5 text-black py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="break-keep text-2xl font-bold tracking-tight">
          오늘 배운 영어 표현부터
          <br />
          Stack+에 차곡차곡 쌓아보세요.
        </h2>
        {isLoggedIn ? (
          <Button
            href="./dashboard"
            variant="outline"
            type="button"
            className="mt-10 w-40 mx-auto hover:bg-white hover:text-black"
          >
            대시보드 보러가기
          </Button>
        ) : (
          <Button
            href="./login"
            variant="outline"
            type="button"
            className="mt-10 w-40 mx-auto hover:bg-white hover:text-black"
          >
            지금 시작하기
          </Button>
        )}
      </div>
    </section>
  );
}
