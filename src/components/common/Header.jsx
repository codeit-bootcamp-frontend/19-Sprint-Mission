import "./Header.scss";
import pandaLogo from "@/assets/images/panda_logo.svg";
import profile from "@/assets/images/profile.svg";
import pandaText from "@/assets/images/panda_text.svg";
import { useLocation } from "react-router-dom";
const Header = () => {
  const { pathname } = useLocation();
  const additemPage = pathname.startsWith("/additem");
  const itemsPage = pathname.startsWith("/items");
  return (
    <div className="Header">
      <img className="logo-image" src={pandaLogo} />
      <img className="logo-text" src={pandaText} />
      <nav className="nav">
        <ul>
          <li>
            <a>자유게시판</a>
          </li>
          <li
            className={`${additemPage || itemsPage ? "secondhand-market" : ""}`}
          >
            <a>중고마켓</a>
          </li>
        </ul>
      </nav>
      <img className="profile-image" src={profile} />
    </div>
  );
};

export default Header;
