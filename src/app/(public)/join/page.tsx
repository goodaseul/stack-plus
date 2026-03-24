"use client";

import Title from "../_components/title/Title";
import Input from "../../../components/input/Input";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { signUp } from "@/api/auth";

type JoinInputs = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
};

export default function JoinPage() {
  const router = useRouter();
  const [passwordShow, setPasswordShow] = useState({
    password: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<JoinInputs>();

  const onSubmit: SubmitHandler<JoinInputs> = async (formData) => {
    try {
      await signUp({
        email: formData.email,
        nickname: formData.nickname,
        password: formData.password,
      });
      toast.success("로그인이 되었습니다.");
      router.push("/login");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
      toast.error("회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-lg rounded-2xl bg-white p-10 shadow-sm">
        <Title
          title="회원가입"
          desc={
            <>
              <span className="font-sekuya">stack plus</span>함께 표현을
              쌓아가세요.
            </>
          }
        />
        <form
          className="mt-8 grid gap-5 font-pretendard"
          onSubmit={handleSubmit(onSubmit)}
        >
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
            type="text"
            {...register("nickname")}
            placeholder="별명을 입력하세요."
          />

          <Input
            type={passwordShow.password ? "text" : "password"}
            {...register("password", {
              required: "비밀번호를 입력하세요",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,
                message: "비밀번호는 영문과 숫자를 포함한 6~20자여야 합니다.",
              },
            })}
            placeholder="비밀번호를 입력하세요."
            errors={errors.password?.message}
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
            type={passwordShow.confirmPassword ? "text" : "password"}
            {...register("passwordConfirm", {
              required: "비밀번호를 다시 입력하세요",
              validate: (value) =>
                value === getValues("password") ||
                "비밀번호가 일치하지 않습니다",
            })}
            placeholder="비밀번호를 다시 입력하세요."
            errors={errors.passwordConfirm?.message}
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

        <div className="mt-6 text-center text-sm text-gray-600">
          이미 계정이 있으신가요?
          <Button variant="text_underline" href="/login" className="ml-1">
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
}
