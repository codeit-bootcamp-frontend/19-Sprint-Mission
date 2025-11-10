import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthLinks from "@/components/AuthLinks";
import InputForm from "@/components/InputForm";
import Button from "@/components/Button";

export default function Signup() {
  const [authForm, setAuthForm] = useState({
    email: "",
    username: "",
    password: "",
    passwordCheck: "",
  });
  // 초기는 값이 없음. 전체 에러
  const [inputError, setInputError] = useState({
    email: true,
    username: true,
    password: true,
    passwordCheck: true,
  });
  const handleError = (name, value) => {
    //value가 true면 hasError도 true (=에러)
    const hasError = value ? true : false;
    setInputError((prev) => ({
      ...prev,
      [name]: hasError,
    }));
  };
  const handleValue = (name, value) => {
    setAuthForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 전체 폼 에러확인
  const hasFormError = Object.values(inputError).every((el) => el !== true);
  const handleSubmit = () => {};

  useEffect(() => {
    if (!authForm.password || !authForm.passwordCheck) return;
    const passwordsMatch = authForm.password === authForm.passwordCheck;

    // 비밀번호가 일치하면 두 필드의 에러를 false로 설정
    if (passwordsMatch && authForm.password.length >= 8) {
      setInputError((prev) => ({
        ...prev,
        password: false,
        passwordCheck: false,
      }));
    }
  }, [authForm.password, authForm.passwordCheck]);
  return (
    <main className="formWrap">
      <h1 className="logo">
        <Link to="/">
          <span className="blind">판다마켓</span>
        </Link>
      </h1>

      <form className="authForm">
        <InputForm
          label="이메일"
          id="email"
          name="email"
          type="email"
          placeholder="이메일을 입력해 주세요."
          onChange={(value) => handleValue("email", value)}
          onError={(value) => handleError("email", value)}
          value={authForm.email}
        />
        <InputForm
          label="닉네임"
          id="username"
          name="username"
          type="text"
          placeholder="닉네임을 입력해 주세요."
          onChange={(value) => handleValue("username", value)}
          onError={(value) => handleError("username", value)}
          value={authForm.username}
        />
        <InputForm
          label="비밀번호"
          id="pw"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          onChange={(value) => handleValue("password", value)}
          onError={(value) => handleError("password", value)}
          value={authForm.password}
          pwValue={authForm.passwordCheck}
        />
        <InputForm
          label="비밀번호 확인"
          id="pwCheck"
          name="passwordCheck"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          onChange={(value) => handleValue("passwordCheck", value)}
          onError={(value) => handleError("passwordCheck", value)}
          value={authForm.passwordCheck}
          pwValue={authForm.password}
        />
        <Button
          size="lg"
          onClick={handleSubmit}
          disabled={hasFormError ? false : true}
        >
          회원가입
        </Button>
      </form>

      <AuthLinks type="Signup" />
    </main>
  );
}
