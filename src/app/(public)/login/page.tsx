"use client";

import Title from "../_components/title/Title";
import Input from "../../../components/input/Input";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "@/api/auth";
import { useTheme } from "next-themes";

type LoginInputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  const [passwordShow, setPasswordShow] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = async (formData) => {
    try {
      await signIn({
        email: formData.email,
        password: formData.password,
      });
      toast.success("로그인에 성공했습니다.");
      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
      toast.error("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-lg rounded-2xl p-10 shadow-sm">
        <Title
          title="환영합니다"
          desc={
            <>
              <span className="font-sekuya">stack plus</span>를 이용하기 위해서
              로그인을 해주세요.
            </>
          }
        />

        <form className="mt-8 grid gap-5" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            {...register("email", {
              required: "이메일을 입력하세요.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "이메일이 틀렸습니다.",
              },
            })}
            placeholder="이메일을 입력하세요."
            errors={errors.email?.message}
          />

          <Input
            type={passwordShow ? "text" : "password"}
            {...register("password", {
              required: "비밀번호를 입력하세요.",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,
                message: "비밀번호가 틀렸습니다.",
              },
            })}
            placeholder="비밀번호를 입력하세요."
            errors={errors.password?.message}
          >
            <FaRegEyeSlash
              className={`${resolvedTheme === "dark" ? "text-white" : "text-black"}`}
              onClick={() => {
                setPasswordShow((prev) => !prev);
              }}
            />
          </Input>
          <Button type="submit" className="mt-2">
            로그인
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          아직 계정이 없으신가요?
          <Button variant="text_underline" href="/join" className="ml-1">
            회원가입
          </Button>
        </div>
      </div>
    </div>
  );
}
