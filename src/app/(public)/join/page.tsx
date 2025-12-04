"use client";

import Button from "@/components/button/Button";
import Input from "../_components/input/Input";
import LinkButton from "@/components/link-button/LinkButton";
import Title from "../_components/title/Title";

export default function JoinPage() {
  return (
    <div className="px-6 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md text-center">
        {/* Title */}
        <Title
          title={"회원가입"}
          desc={"Stack+와 함께 영어 표현을 쌓아가세요."}
        />

        {/* Form */}
        <form className="grid gap-5">
          <Input type="email" placeholder="이메일을 적어주세요" />
          <Input type="password" placeholder="비밀번호를 적어주세요" />
          <Input type="password" placeholder="비밀번호를 다시 적어주세요" />

          <Button type="submit">가입하기</Button>
        </form>

        {/* Link to Login */}
        <p className="text-sm text-gray-500 mt-6">
          이미 계정이 있으신가요?
          <LinkButton variant="text" href="/login">
            로그인
          </LinkButton>
        </p>
      </div>
    </div>
  );
}
