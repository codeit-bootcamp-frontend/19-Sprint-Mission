import React from "react";
import "@/assets/styles/auth.css";
import logo from "@/assets/images/logo/logo.svg";

import googleLogo from "@/assets/images/social/google-logo.png";
import kakaoLogo from "@/assets/images/social/kakao-logo.png";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { validateEmail, validatePassword } from "../utils/auth";
import InputItem from "../components/InputItem";
import { useAuthForm } from "../hooks/useAuthForm";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const [errors, setErrors] = useState({
  //   email: { empty: "", invalid: "" },
  //   password: { empty: "", invalid: "" },
  // });

  const { values, errors, validateCheckedForm, handleChange, handleBlur } =
    useAuthForm();

  // const emailInvalidError = validateEmail(email);

  // const isLoginValid = emailInvalidError && validatePassword(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateCheckedForm) return;
  };
  return (
    <main className="auth-container">
      <Link to="/" className="logo-home-link" aria-label="홈으로 이동">
        <img src={logo} alt="판다마켓 로고" />
      </Link>

      <form id="loginForm" method="post" onSubmit={handleSubmit}>
        <InputItem
          id="email"
          name="email"
          type="email"
          label="이메일"
          placeholder="이메일을 입력해 주세요"
          autoComplete="email"
          onBlur={handleBlur}
          value={values.email}
          errorMessages={errors.email}
          onChange={handleChange}
        />

        <InputItem
          id="password"
          name="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요"
          autoComplete="password"
          onBlur={handleBlur}
          value={values.password}
          errorMessages={errors.password}
          onChange={handleChange}
        />

        <button
          className="button pill-button full-width"
          disabled={!validateCheckedForm}
        >
          로그인
        </button>
      </form>

      <div className="social-login-container">
        <h3>간편 로그인하기</h3>
        <div className="social-login-links-container">
          <Link
            to="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="구글 로그인"
          >
            <img src={googleLogo} alt="구글 로그인" width="42" />
          </Link>
          <Link
            to="https://www.kakaocorp.com/page/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="카카오톡 로그인"
          >
            <img src={kakaoLogo} alt="카카오톡 로그인" width="42" />
          </Link>
        </div>
      </div>

      <div className="auth-switch">
        판다마켓이 처음이신가요? <Link to="/signup">회원가입</Link>
      </div>
    </main>
  );
};

export default Login;
