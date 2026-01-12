"use client";

import { useFormFields } from "@/hooks/useFormFields";
import { validateEmail, validatePassword } from "@/utils/validator";
import { signIn } from "@/api/auth";
import Title from "../_components/title/Title";
import Input from "../_components/input/Input";
import Button from "@/components/button/Button";
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
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-lg rounded-2xl bg-white p-10 shadow-sm">
        <Title
          title="Welcome!"
          desc="stack plus를 이용하기 위해서 로그인을 해주세요."
        />

        <form className="mt-8 grid gap-5" onSubmit={onSubmit}>
          <Input
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            type="email"
            placeholder="이메일을 입력하세요."
            errors={errors.email}
          />

          <Input
            value={form.password}
            onChange={(e) => updateField("password", e.target.value)}
            type="password"
            placeholder="비밀번호를 입력하세요."
            errors={errors.password}
          />

          <Button type="submit" className="mt-2">
            로그인
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          아직 계정이 없으신가요?
          <Button variant="text" href="/join" className="ml-1">
            회원가입
          </Button>
        </div>
      </div>
    </div>
  );
}
