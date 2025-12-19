import React from "react";
import Kakao from "../../assets/kakao.svg?react";
import Google from "../../assets/google.svg?react";

const SocialLogin = () => {
  return (
    <div className="flex h-20 bg-primary-100/20 justify-between px-4 rounded-md">
      <div className="flex items-center">
        <h3 className="text-sm font-medium">간편 로그인하기</h3>
      </div>

      <div className="flex h-full gap-4 items-center">
        <div className="flex items-center justify-center w-10 h-10 bg-white p-2.5 rounded-full border border-gray-200">
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
            className="flex"
          >
            <Google />
          </a>
        </div>

        <div className="flex items-center justify-center w-10 h-10  rounded-full">
          <a
            href="https://www.kakaocorp.com/page/"
            target="_blank"
            rel="noreferrer"
            className="flex"
          >
            <Kakao />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
