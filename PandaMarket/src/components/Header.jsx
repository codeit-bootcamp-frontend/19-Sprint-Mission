import "./Header.css";
import headerLogo from "../assets/logo.svg";
import profile from "../assets/profile.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={headerLogo} />
      <div className="tap">
        <button className="board">자유게시판</button>
        <button className="market">중고마켓</button>
      </div>
      <img className="profile" src={profile} />
    </div>
  );
};

export default Header;
