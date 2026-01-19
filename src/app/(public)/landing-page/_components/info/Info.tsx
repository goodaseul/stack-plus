"use client";
import SectionWrapper from "@/app/(public)/landing-page/_components/SectionWrapper";
import Button from "@/components/button/Button";
import { useAuthStatus } from "@/hooks/auth/useAuthStatus";

export default function InfoPage() {
  const { isReady, isLoggedIn } = useAuthStatus();

  if (!isReady) return null;

  return (
    <SectionWrapper
      bg="bg-linear-to-br from-point/25 to-point/5"
      title={
        <>
          나만의 단어장으로 <br />
          <span className="text-point">영어 실력</span>을 쌓아보세요.
        </>
      }
      desc={
        <>
          단어를 등록하고, 예문과 메모를 추가하고, 학습 기록을 추적하세요.
          <br />
          Stack Plus와 함께 효율적인 영어 학습을 시작하세요.
        </>
      }
    >
      {isLoggedIn ? (
        <Button href="./dashboard" type="button" className="mt-10 w-40 mx-auto">
          대시보드 보러가기
        </Button>
      ) : (
        <Button href="./login" type="button" className="mt-10 w-40 mx-auto">
          시작하기
        </Button>
      )}
    </SectionWrapper>
  );
}
