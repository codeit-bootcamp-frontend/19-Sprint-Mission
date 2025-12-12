import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLinks from "@/components/AuthLinks";
import InputForm from "@/components/InputForm";
import Button from "@/components/Button";
import useValidation from "@/hooks/useValidation";
import styles from "./Signup.module.scss";
import PasswordToggleButton from "@/components/Button/PasswordToggleButton";

export default function Signup() {
  const [authForm, setAuthForm] = useState({
    email: "",
    username: "",
    password: "",
    passwordCheck: "",
  });
  const { inputError, handleFocus, handlePassword, pwShow } = useValidation(
    authForm.password,
    {
      email: { hasError: null },
      username: { hasError: null },
      password: { hasError: null },
      passwordCheck: { hasError: null },
    }
  );
  const handleValue = (name, value) => {
    setAuthForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // 전체 폼 에러확인
  const hasFormError = Object.values(inputError).some((el) => {
    return el.hasError === true || el.hasError === null;
  });
  const handleSubmit = () => {};

  return (
    <main className={styles.formWrap}>
      <h1 className={styles.logo}>
        <Link to="/">
          <span className="blind">판다마켓</span>
        </Link>
      </h1>

      <form className={styles.authForm}>
        <InputForm
          label="이메일"
          id="email"
          name="email"
          type="email"
          placeholder="이메일을 입력해 주세요."
          value={authForm.email}
          onChange={(value) => handleValue("email", value)}
          handleFocus={handleFocus}
          inputError={inputError.email}
        />
        <InputForm
          label="닉네임"
          id="username"
          name="username"
          type="text"
          placeholder="닉네임을 입력해 주세요."
          value={authForm.username}
          onChange={(value) => handleValue("username", value)}
          handleFocus={handleFocus}
          inputError={inputError.username}
        />
        <InputForm
          label="비밀번호"
          id="pw"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          value={authForm.password}
          onChange={(value) => handleValue("password", value)}
          handleFocus={handleFocus}
          pwShow={pwShow}
          inputError={inputError.password}
          suffix={
            <PasswordToggleButton
              name="password"
              pwShow={pwShow}
              onToggle={() => handlePassword("password")}
            />
          }
        />
        <InputForm
          label="비밀번호 확인"
          id="pwCheck"
          name="passwordCheck"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          value={authForm.passwordCheck}
          onChange={(value) => handleValue("passwordCheck", value)}
          handleFocus={handleFocus}
          pwValue={authForm.password}
          pwShow={pwShow}
          inputError={inputError.passwordCheck}
          suffix={
            <PasswordToggleButton
              name="passwordCheck"
              pwShow={pwShow}
              onToggle={() => handlePassword("passwordCheck")}
            />
          }
        />
        <div className={styles.btnArea}>
          <Button size="lg" onClick={handleSubmit} disabled={hasFormError}>
            회원가입
          </Button>
        </div>
      </form>

      <AuthLinks type="Signup" />
    </main>
  );
}
