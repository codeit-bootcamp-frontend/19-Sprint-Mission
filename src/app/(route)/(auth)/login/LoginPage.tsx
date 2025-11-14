"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import Button from "@/components/Button/base/Button"; // 필요시 Button 컴포넌트 사용
import Link from "next/link";

// Zod 스키마 정의
const loginSchema = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요"),
  password: z.string().min(6, "비밀번호는 6자 이상이어야 합니다"),
});

// 타입 추출
type LoginFormInputs = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log("로그인 데이터:", data);
    // TODO: 로그인 기능 구현
  };

  return (
    <div className="auth-container">
      <Link className="logo-link" href="/">
        <Image src="/images/logo.png" alt="logo and link to home page" width={120} height={40} />
      </Link>

      <div className="auths">
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              placeholder="이메일을 입력하세요"
              {...register("email")}
            />
            {errors.email && <div className="error-message">{errors.email.message}</div>}
          </div>

          <div className="input-container">
            <label htmlFor="password">비밀번호</label>
            <div className="password-input-container">
              <input
                type="password"
                id="password"
                placeholder="비밀번호를 입력하세요"
                {...register("password")}
              />
              <Image
                id="toggle-password"
                className="icon-button visibility"
                src="/images/ic_visibility_off.png"
                alt="비밀번호 표시 아이콘"
                width={24}
                height={24}
              />
            </div>
            {errors.password && <div className="error-message">{errors.password.message}</div>}
          </div>

          <Button type="submit" className="button submit" disabled={!isValid}>
            로그인
          </Button>
        </form>

        <div className="easy-login">
          <span>간편 로그인하기</span>
          <div className="social-icon-container">
            <Link href="https://www.google.com/" target="_blank" rel="noreferrer">
              <Image
                className="google"
                src="/images/ic_google.png"
                alt="구글 로그인 아이콘"
                width={40}
                height={40}
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

        <div className="auth-toggle">
          <span>판다마켓이 처음이신가요?</span>
          <Link className="signup-link" href="/signup">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
