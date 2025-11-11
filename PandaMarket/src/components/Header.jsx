import style from "./Header.module.css";
import headerLogo from "../assets/logo.svg";
import profile from "../assets/profile.svg";

const Header = () => {
  return (
    <div className={style.header}>
      <img className={style.logo} src={headerLogo} />
      <div className={style.tab}>
        <button className={style.board}>자유게시판</button>
        <button className={style.market}>중고마켓</button>
      </div>
      <img className={style.profile} src={profile} />
    </div>
  );
};

export default Header;
