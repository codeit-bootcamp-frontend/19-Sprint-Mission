import "./Header.scss";
import pandaLoga from "@/assets/images/panda_logo.svg";
import profile from "@/assets/images/profile.svg";

const Header = () => {
  return (
    <div className="Header">
      <img className="logo-image" src={pandaLoga} />
      <nav className="nav">
        <ul>
          <li>
            <a>자유게시판</a>
          </li>
          <li>
            <a>중고마켓</a>
          </li>
        </ul>
      </nav>
      <img className="profile-image" src={profile} />
    </div>
  );
};

export default Header;
