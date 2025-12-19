import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../components/common/SocialLogin";
import Logo from "../assets/logo.svg?react";
import Input from "../components/Input/Input";
import EyeVisible from "../assets/Eyevisible.svg?react";
import EyeInvisible from "../assets/Eyeinvisible.svg?react";
import Button from "../components/common/Button";

const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid: boolean = 
    formData.email.trim() !== "" && 
    formData.nickname.trim() !== "" &&
    formData.password.trim() !== "" && 
    formData.passwordConfirmation.trim() !== "";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("회원가입 시도:", formData);
    }
  };

  return (
    <div className="w-full max-w-[640px] min-h-[618px] mx-auto my-10 lg:my-[231px] px-4 flex flex-col items-center">
      <div className="mb-10">
        <Link to="/">
          <Logo className="w-40 md:w-[200px] h-auto" />
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-bold text-black">이메일</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력해 주세요"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="nickname" className="text-sm font-bold text-black">닉네임</label>
          <Input
            id="nickname"
            name="nickname"
            type="text"
            placeholder="닉네임을 입력해 주세요"
            required
            value={formData.nickname}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-bold text-black">비밀번호</label>
          <div className="relative w-full">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호를 입력해 주세요"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full pr-10"
            />
            <div
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeVisible width="24" height="24" /> : <EyeInvisible width="24" height="24" />}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="passwordConfirmation" className="text-sm font-bold text-black">비밀번호 확인</label>
          <div className="relative w-full">
            <Input
              id="passwordConfirmation"
              name="passwordConfirmation"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="비밀번호를 다시 한 번 입력해 주세요"
              required
              value={formData.passwordConfirmation}
              onChange={handleChange}
              className="w-full pr-10"
            />
            <div
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer flex items-center"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeVisible width="24" height="24" /> : <EyeInvisible width="24" height="24" />}
            </div>
          </div>
        </div>

        <Button 
          variant={isFormValid ? "primary" : "secondary"} 
          type="submit" 
          fullWidth
          size="lg"
          className="mt-2 rounded-2xl transition-colors duration-300"
        >
          회원가입
        </Button>
      </form>

      <div className="w-full mt-10">
        <SocialLogin />
      </div>

      <div className="mt-auto pt-10 pb-4 text-sm">
        이미 회원이신가요?{" "}
        <Link to="/signin" className="text-[#3692FF] underline font-semibold">
          로그인
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;