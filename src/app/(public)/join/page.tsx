"use client";

import { useFormFields } from "@/hooks/useFormFields";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "@/utils/validator";
import { signUp } from "@/api/auth";
import Title from "../_components/title/Title";
import Input from "../_components/input/Input";
import LinkButton from "@/components/link-button/LinkButton";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";

export default function JoinPage() {
  const router = useRouter();

  const { form, errors, setErrors, updateField } = useFormFields({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      email: validateEmail(form.email),
      nickname: form.nickname ? "" : "별명을 입력해주세요!",
      password: validatePassword(form.password),
      confirmPassword: validateConfirmPassword(
        form.password,
        form.confirmPassword
      ),
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    try {
      await signUp(form.email, form.password, form.nickname);
      router.push("/login");
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        email: "이미 존재하는 이메일입니다!",
      }));
    }
  };

  return (
    <div className="px-6 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md text-center">
        <Title title="회원가입" desc="Stack+와 함께 영어 표현을 쌓아가세요." />

        <form className="grid gap-5" onSubmit={onSubmit}>
          <Input
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            type="email"
            placeholder="이메일을 적어주세요"
            errors={errors.email}
          />

          <Input
            value={form.nickname}
            onChange={(e) => updateField("nickname", e.target.value)}
            type="text"
            placeholder="별명을 적어주세요"
            errors={errors.nickname}
          />

          <Input
            value={form.password}
            onChange={(e) => updateField("password", e.target.value)}
            type="password"
            placeholder="비밀번호를 적어주세요"
            errors={errors.password}
          />

          <Input
            value={form.confirmPassword}
            onChange={(e) => updateField("confirmPassword", e.target.value)}
            type="password"
            placeholder="비밀번호를 다시 적어주세요"
            errors={errors.confirmPassword}
          />

          <Button type="submit">가입하기</Button>
        </form>

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
