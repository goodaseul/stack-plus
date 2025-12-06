"use client";

import LinkButton from "@/components/link-button/LinkButton";
import Input from "../_components/input/Input";
import Button from "@/components/button/Button";
import Title from "../_components/title/Title";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "@/api/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      router.push("/dashboard"); // 로그인 성공 시 이동
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("알 수 없는 오류가 발생했어요!");
      }
    }
  };
  return (
    <div className="px-6 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md text-center">
        <Title
          title={"로그인"}
          desc={"Stack+를 계속 사용하려면 로그인 해주세요."}
        />

        <form className="grid gap-5" onSubmit={onSubmit}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="이메일을 적어주세요"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="비밀번호를 적어주세요"
          />

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
