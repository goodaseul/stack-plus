"use client";
import { useFormFields } from "@/hooks/auth/useFormFields";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "@/utils/validator";
import Title from "../_components/title/Title";
import Input from "../../../components/input/Input";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { signUp } from "@/lib/supabase";

export default function JoinPage() {
  const [passwordShow, setPasswordShow] = useState({
    password: false,
    confirmPassword: false,
  });

  const router = useRouter();

  const { form, errors, setErrors, updateField } = useFormFields({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  const handleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      email: validateEmail(form.email),
      nickname: form.nickname ? "" : "별명을 입력해주세요.",
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
    } catch (error) {
      const message = (error as Error).message;
      if (message.includes("duplicate")) {
        setErrors((prev) => ({
          ...prev,
          nickname: "이미 사용 중인 별명입니다.",
        }));
      } else if (message.includes("email")) {
        setErrors((prev) => ({
          ...prev,
          nickname: "이미 존재하는 이메일입니다.",
        }));
      } else {
        alert("회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-lg rounded-2xl bg-white p-10 shadow-sm">
        <Title
          title="Join Us!"
          desc="Stack plus와 함께 영어 표현을 쌓아가세요."
        />

        <form className="mt-8 grid gap-5 font-pretendard" onSubmit={handleJoin}>
          <Input
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            type="email"
            placeholder="이메일을 입력하세요."
            errors={errors.email}
          />

          <Input
            value={form.nickname}
            onChange={(e) => updateField("nickname", e.target.value)}
            type="text"
            placeholder="별명을 입력하세요."
            errors={errors.nickname}
          />

          <Input
            value={form.password}
            onChange={(e) => updateField("password", e.target.value)}
            type={passwordShow.password ? "text" : "password"}
            placeholder="비밀번호를 입력하세요."
            errors={errors.password}
          >
            <FaRegEyeSlash
              onClick={() => {
                setPasswordShow((prev) => ({
                  ...prev,
                  password: !prev.password,
                }));
              }}
            />
          </Input>

          <Input
            value={form.confirmPassword}
            onChange={(e) => updateField("confirmPassword", e.target.value)}
            type={passwordShow.confirmPassword ? "text" : "password"}
            placeholder="비밀번호를 다시 입력하세요."
            errors={errors.confirmPassword}
          >
            <FaRegEyeSlash
              onClick={() => {
                setPasswordShow((prev) => ({
                  ...prev,
                  confirmPassword: !prev.confirmPassword,
                }));
              }}
            />
          </Input>

          <Button type="submit" className="mt-2">
            가입하기
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          이미 계정이 있으신가요?
          <Button variant="text_underline" href="/login" className="ml-1">
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
}
