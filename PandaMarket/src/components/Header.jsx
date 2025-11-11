import style from "./Header.module.css";
import headerLogo from "../assets/logo.svg";
import profile from "../assets/profile.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerInner}>
        <Link to="/">
          <img className={style.logo} src={headerLogo} />
        </Link>
        <div className={style.tab}>
          <button className={style.board}>자유게시판</button>
          <Link to="/items">
            <button className={style.market}>중고마켓</button>
          </Link>
        </div>
        <img className={style.profile} src={profile} />
      </div>
    </header>
  );
};

export default Header;
