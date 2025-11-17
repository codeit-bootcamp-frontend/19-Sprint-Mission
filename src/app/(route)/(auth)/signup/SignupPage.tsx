"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/base/Button";
import { useState } from "react";
import IC_GOOGLE from "@/components/icons/ic_google.svg";

const signupSchema = z
  .object({
    email: z.string().email("올바른 이메일을 입력해주세요"),
    password: z.string().min(6, "비밀번호는 6자 이상이어야 합니다"),
    confirmPassword: z.string().min(6, "비밀번호 확인란을 입력해주세요"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "비밀번호가 일치하지 않습니다",
  });

type SignupFormInputs = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit = (data: SignupFormInputs) => {
    console.log("회원가입 데이터:", data);
  };

  return (
    <div className="auth-container mt-[90px] flex flex-col items-center gap-6 md:mt-[190px] md:gap-10 lg:mt-58">
      <div className="relative h-[66px] w-[198px] md:h-[132px] md:w-[396px]">
        <Image src="/images/logo.png" alt="logo and link to home page" fill />
      </div>

      <div className="auths mx-4 md:mx-[52px]">
        <form
          className="form-container flex flex-col items-center gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* 이메일 */}
          <div className="input-container flex w-fit flex-col items-start gap-4">
            <label htmlFor="email" className="text-[18px]">
              이메일
            </label>
            <Input
              type="email"
              id="email"
              placeholder="이메일을 입력하세요"
              className="w-[343px] md:w-[640px]"
              {...register("email")}
            />
            {errors.email && <div className="text-red">{errors.email.message}</div>}
          </div>

          {/* 비밀번호 */}
          <div className="input-container flex w-fit flex-col items-start gap-4">
            <label htmlFor="password" className="text-[18px]">
              비밀번호
            </label>
            <div className="relative w-[343px] md:w-[640px]">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="비밀번호를 입력하세요"
                className="w-[343px] md:w-[640px]"
                {...register("password")}
              />

              <Image
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                src={
                  showPassword ? "/images/ic_visibility_on.png" : "/images/ic_visibility_off.png"
                }
                alt="비밀번호 표시 아이콘"
                width={24}
                height={24}
              />
            </div>
            {errors.password && <div className="text-red">{errors.password.message}</div>}
          </div>

          {/* 비밀번호 확인 */}
          <div className="input-container flex w-fit flex-col items-start gap-4">
            <label htmlFor="confirmPassword" className="text-[18px]">
              비밀번호 확인
            </label>
            <div className="relative w-[343px] md:w-[640px]">
              <Input
                type={showConfirm ? "text" : "password"}
                id="confirmPassword"
                placeholder="비밀번호를 다시 입력하세요"
                className="w-[343px] md:w-[640px]"
                {...register("confirmPassword")}
              />

              <Image
                onClick={() => setShowConfirm((prev) => !prev)}
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                src={showConfirm ? "/images/ic_visibility_on.png" : "/images/ic_visibility_off.png"}
                alt="비밀번호 표시 아이콘"
                width={24}
                height={24}
              />
            </div>
            {errors.confirmPassword && (
              <div className="text-red">{errors.confirmPassword.message}</div>
            )}
          </div>

          <Button type="submit" radius="full" className="w-full" disabled={!isValid}>
            회원가입
          </Button>
        </form>

        <div className="easy-login mt-6 flex items-center justify-between rounded-[8px] bg-[#E6F2FF] px-[23px] py-4">
          <span className="text-[16px]">간편 로그인하기</span>
          <div className="social-icon-container">
            <div className="flex gap-4">
              <Link href="https://www.google.com/" target="_blank" rel="noreferrer">
                <IC_GOOGLE
                  alt="google login button"
                  className="h-10 w-10 items-center justify-center rounded-full bg-white p-2"
                />
              </Link>
              <Link href="https://www.kakaocorp.com/" target="_blank" rel="noreferrer">
                <Image
                  className="kakao"
                  src="/images/ic_kakao.png"
                  alt="카카오 로그인 아이콘"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="auth-toggle mt-6 flex w-full justify-center gap-1">
          <span>이미 계정이 있으신가요?</span>
          <Link className="text-[#3692FF] underline" href="/login">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
