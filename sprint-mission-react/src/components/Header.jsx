import React from "react";
import logo from "@/assets/images/logo/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" aria-label="홈으로 이동">
        <img src={logo} alt="판다마켓 로고" width="153" />
      </Link>
      <Link to="/login" id="loginLink" className="button">
        로그인
      </Link>
    </header>
  );
};

export default Header;
