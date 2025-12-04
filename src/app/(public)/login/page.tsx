"use client";

import LinkButton from "@/components/link-button/LinkButton";
import Input from "../_components/input/Input";
import Button from "@/components/button/Button";
import Title from "../_components/title/Title";

export default function LoginPage() {
  return (
    <div className="px-6 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md text-center">
        <Title
          title={"로그인"}
          desc={"Stack+를 계속 사용하려면 로그인 해주세요."}
        />

        <form className="grid gap-5">
          <Input type="email" placeholder="이메일을 적어주세요" />
          <Input type="password" placeholder="비밀번호를 적어주세요" />

          <Button type="submit">로그인</Button>
        </form>

        <p className="text-sm text-gray-500 mt-6">
          아직 계정이 없으신가요?
          <LinkButton variant="text" href="/join">
            회원가입
          </LinkButton>
        </p>
      </div>
    </div>
  );
}
