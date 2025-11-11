import { useEffect, useState } from "react";

export default function InputForm({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  pwValue,
  onChange,
  onError,
}) {
  const [pwShow, setPwShow] = useState(false);
  const [pwType, setPwType] = useState("password");
  const [error, setError] = useState("");

  // 인풋
  const handleChange = (e) => {
    const val = e.target.value.trim();
    onChange(val);
  };
  // 인풋 벨리데이션
  const handleFocus = (e) => {
    const val = e.target.value.trim();
    const emailReg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    let errorMsg = "";

    switch (name) {
      case "email":
        if (val.length === 0) {
          errorMsg = "이메일을 입력해주세요.";
          onError(true);
        } else if (!emailReg.test(val)) {
          errorMsg = "잘못된 이메일 형식입니다.";
          onError(true);
        } else {
          errorMsg = "";
          onError(false);
        }
        break;
      case "username":
        if (val.length === 0) {
          errorMsg = "닉네임을 입력해주세요.";
          onError(true);
        } else {
          errorMsg = "";
          onError(false);
        }
        break;
      case "password":
        if (val.length === 0) {
          errorMsg = "비밀번호를 입력해주세요";
          onError(true);
        } else if (val.length < 8) {
          errorMsg = "비밀번호를 8자 이상 입력해주세요.";
          onError(true);
        } else if (pwValue && val !== pwValue) {
          errorMsg = "비밀번호가 일치하지 않습니다.";
          onError(true);
        } else {
          errorMsg = "";
          onError(false);
        }
        break;
      case "passwordCheck":
        if (val.length === 0) {
          errorMsg = "비밀번호를 입력해주세요";
          onError(true);
        } else if (val.length < 8) {
          errorMsg = "비밀번호를 8자 이상 입력해주세요.";
          onError(true);
        } else if (pwValue && val !== pwValue) {
          errorMsg = "비밀번호가 일치하지 않습니다.";
          onError(true);
        } else {
          errorMsg = "";
          onError(false);
        }
        break;
    }

    setError(errorMsg);
  };
  // 비밀번호 숨김/표시
  const handlePassword = () => {
    setPwShow(!pwShow);
    setPwType((prev) => (prev === "password" ? "text" : "password"));
  };
  // 비밀번호, 비밀번호 확인 매칭확인
  const matchPassword = () => {
    // 비밀번호 관련 필드가 아니면 실행하지 않음
    if (name !== "password" && name !== "passwordCheck") return;
    // 둘 다 값이 있고, 8자 이상일 때만 체크
    if (value && pwValue && value.length >= 8 && pwValue.length >= 8) {
      if (value !== pwValue) {
        setError("비밀번호가 일치하지 않습니다.");
        onError(true);
      } else {
        setError("");
        onError(false);
      }
    }
  };

  useEffect(() => {
    matchPassword();
  }, [pwValue, value]);

  return (
    <div className="iptBox">
      <label htmlFor={id}>{label}</label>
      <div className="ipt">
        <input
          id={id}
          name={name}
          type={pwShow ? pwType : type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleFocus}
          className={error && "error"}
        />
        {type === "password" && (
          <button
            type="button"
            className={`btnEye ${pwShow ? "on" : ""}`}
            onClick={handlePassword}
          >
            <span className="blind">비밀번호 {pwShow ? "숨김" : "표시"}</span>
          </button>
        )}
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
