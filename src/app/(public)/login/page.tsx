"use client";

import { useFormFields } from "@/hooks/useFormFields";
import { validateEmail, validatePassword } from "@/utils/validator";
import { signIn } from "@/api/auth";
import Title from "../_components/title/Title";
import Input from "../_components/input/Input";
import Button from "@/components/button/Button";
import LinkButton from "@/components/link-button/LinkButton";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const { form, errors, setErrors, updateField } = useFormFields({
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      email: validateEmail(form.email),
      password: validatePassword(form.password),
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    try {
      await signIn(form.email, form.password);
      router.push("/dashboard");
    } catch {
      setErrors((prev) => ({
        ...prev,
        password: "이메일 또는 비밀번호가 올바르지 않습니다.",
      }));
    }
  };

  return (
    <div className="px-6 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md text-center">
        <Title
          title="로그인"
          desc="Stack+를 계속 사용하려면 로그인 해주세요."
        />

        <form className="grid gap-5" onSubmit={onSubmit}>
          <Input
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            type="email"
            placeholder="이메일을 적어주세요"
            errors={errors.email}
          />

          <Input
            value={form.password}
            onChange={(e) => updateField("password", e.target.value)}
            type="password"
            placeholder="비밀번호를 적어주세요"
            errors={errors.password}
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
