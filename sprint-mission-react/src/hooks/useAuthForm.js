import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/auth";

export const useAuthForm = (init = { email: "", password: "" }) => {
  const [values, setValues] = useState(init);
  const [errors, setErrors] = useState({
    email: { empty: "", invalid: "" },
    password: { empty: "", invalid: "" },
  });

  const validateCheckedForm =
    validateEmail(values.email) && validatePassword(values.password);

  const handleChange = (e) => {
    const { name, value } = e.target;
    //입력값 교체
    setValues((prev) => ({ ...prev, [name]: value }));

    //입력중엔 오류메세지 초기화
    setErrors((prev) => ({
      ...prev,
      [name]: { empty: "", invalid: "" },
    }));
  };

  const handleBlur = (name) => {
    const value = values[name];
    if (name === "email") {
      //입력값 없을때 메세지
      if (!value) {
        setErrors((prev) => ({
          ...prev,
          email: { empty: "이메일을 입력해 주세요", invalid: "" },
        }));
        //유효성 오류시 메세지
      } else if (!validateEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          email: { empty: "", invalid: "잘못된 이메일 형식입니다" },
        }));
      } else {
        //정상적일때 오류메세지 초기화
        setErrors((prev) => ({
          ...prev,
          email: { empty: "", invalid: "" },
        }));
      }
    }

    if (name === "password") {
      //입력값 없을때 메세지
      if (!value) {
        setErrors((prev) => ({
          ...prev,
          password: { empty: "비밀번호를 입력해 주세요", invalid: "" },
        }));
        //유효성 오류시 메세지
      } else if (!validatePassword(value)) {
        setErrors((prev) => ({
          ...prev,
          password: { empty: "", invalid: "비밀번호는 8자 이상 입력해 주세요" },
        }));
      } else {
        //정상적일때 오류메세지 초기화
        setErrors((prev) => ({
          ...prev,
          password: { empty: "", invalid: "" },
        }));
      }
    }
  };

  //이메일&패스워드 입력값, 에러상태값, 유효성값, 입력값수정, 에러메세지 넣기
  return { values, errors, validateCheckedForm, handleChange, handleBlur };
};
