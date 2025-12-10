import { useState } from "react";

export default function useValidation(pwValue, errorInit) {
  const [pwShow, setPwShow] = useState({
    password: false,
    passwordCheck: false,
  });
  const [inputError, setInputError] = useState(errorInit);

  const handleFocus = (e) => {
    const val = e.target.value.trim();
    const name = e.target.name;
    const emailReg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    let hasError = false;
    let message = "";

    switch (name) {
      case "email":
        if (val.length === 0) {
          message = "이메일을 입력해주세요.";
          hasError = true;
        } else if (!emailReg.test(val)) {
          message = "잘못된 이메일 형식입니다.";
          hasError = true;
        } else {
          message = "";
          hasError = false;
        }
        break;
      case "username":
        if (val.length === 0) {
          message = "닉네임을 입력해주세요.";
          hasError = true;
        } else {
          message = "";
          hasError = false;
        }
        break;
      case "password":
        if (val.length === 0) {
          message = "비밀번호를 입력해주세요";
          hasError = true;
        } else if (val.length < 8) {
          message = "비밀번호를 8자 이상 입력해주세요.";
          hasError = true;
        } else {
          message = "";
          hasError = false;
        }
        break;
      case "passwordCheck":
        if (val.length === 0) {
          message = "비밀번호를 입력해주세요";
          hasError = true;
        } else if (val.length < 8) {
          message = "비밀번호를 8자 이상 입력해주세요.";
          hasError = true;
        } else if (pwValue && pwValue !== val) {
          message = "비밀번호가 일치하지 않습니다.";
          hasError = true;
        } else {
          message = "";
          hasError = false;
        }
        break;
    }

    setInputError((prev) => ({ ...prev, [name]: { hasError, message } }));
  };

  // 비밀번호 숨김/표시
  const handlePassword = (name) => {
    setPwShow((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return { handleFocus, handlePassword, pwShow, inputError };
}
