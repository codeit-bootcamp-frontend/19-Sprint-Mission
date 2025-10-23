import React, { useState } from "react";
import Input from "../components/Input";
import eyeInvisible from "@/assets/images/icons/eye-invisible.svg";
import eyevisible from "@/assets/images/icons/eye-visible.svg";

const InputItem = ({ value, label, errorMessages, ...props }) => {
  const { empty, invalid } = errorMessages; //에러 두타입 빈값,유효x
  const [showPassword, setShowPassword] = useState(false);

  //패스워드 눈 아이콘
  const toggleShowPwd = () => {
    setShowPassword((prev) => !prev);
  };

  // 패스워드 타입
  const inputType = showPassword === false ? "password" : "text";

  return (
    <div className="input-item">
      <label htmlFor="email">{label}</label>
      <div className="input-wrapper">
        <Input {...props} type={inputType} />
        {props.name === "password" && (
          <button
            type="button"
            className="password-toggle-button"
            onClick={toggleShowPwd}
            aria-label="비밀번호 보기"
          >
            <img
              className="password-toggle-icon"
              src={!showPassword ? eyevisible : eyeInvisible}
              alt="비밀번호 숨김 상태 아이콘"
            />
          </button>
        )}
      </div>
      {!value && <span className="error-message">{empty}</span>}
      {invalid && <span className="error-message">{invalid}</span>}
    </div>
  );
};

export default InputItem;
