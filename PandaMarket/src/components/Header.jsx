import style from "./Header.module.css";
import headerLogo from "../assets/logo.svg";
import profile from "../assets/profile.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className={style.header}>
      <div className={style.headerInner}>
        <Link to="/">
          <img className={style.logo} src={headerLogo} />
        </Link>
        <div className={style.tab}>
          <button className={style.board}>자유게시판</button>
          <Link to="/items">
            <button
              className={`${
                location.pathname === "/items" ? style.activeTab : ""
              }`}
            >
              중고마켓
            </button>
          </Link>
        </div>
        <img className={style.profile} src={profile} />
      </div>
    </header>
  );
};

export default Header;
