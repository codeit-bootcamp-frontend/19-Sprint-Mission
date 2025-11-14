import { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "@/components/InputForm";
import AuthLinks from "@/components/AuthLinks";
import Button from "@/components/Button";

function Login() {
  const [authForm, setAuthForm] = useState({
    email: "",
    password: "",
  });
  // 초기는 값이 없음. 전체 에러
  const [inputError, setInputError] = useState({
    email: true,
    password: true,
  });
  const handleError = (name, value) => {
    //value가 true면 hasError도 true (=에러)
    // const hasError = value ? true : false;
    const hasError = !!value;
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
  // const hasFormError = Object.values(inputError).some(Boolean);
  const handleSubmit = () => {};
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
        />
        <InputForm
          label="비밀번호"
          id="pw"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          onChange={(value) => handleValue("password", value)}
          onError={(value) => handleError("password", value)}
        />
        <Button
          size="lg"
          onClick={handleSubmit}
          disabled={hasFormError ? false : true}
        >
          로그인
        </Button>
      </form>

      <AuthLinks type="Login" />
    </main>
  );
}

export default Login;
