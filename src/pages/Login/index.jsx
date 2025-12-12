import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLinks from "@/components/AuthLinks";
import InputForm from "@/components/InputForm";
import Button from "@/components/Button";
import useValidation from "@/hooks/useValidation";
import styles from "./../Signup/Signup.module.scss";
import PasswordToggleButton from "@/components/Button/PasswordToggleButton";

function Login() {
  const [authForm, setAuthForm] = useState({
    email: "",
    password: "",
  });
  const { inputError, handleFocus, handlePassword, pwShow } = useValidation(
    null,
    {
      email: { hasError: null },
      password: { hasError: null },
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
          label="비밀번호"
          id="pw"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          value={authForm.password}
          onChange={(value) => handleValue("password", value)}
          handleFocus={handleFocus}
          handlePassword={handlePassword}
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
        <div className={styles.btnArea}>
          <Button size="lg" onClick={handleSubmit} disabled={hasFormError}>
            로그인
          </Button>
        </div>
      </form>

      <AuthLinks type="Login" />
    </main>
  );
}

export default Login;
