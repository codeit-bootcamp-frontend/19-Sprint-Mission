import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import ProfileIcon from "../../assets/Icons/ic_profile.svg?react";

const primaryBlue = "text-blue-600";

const Header = () => {
  const location = useLocation();
  const isItemsActive = location.pathname === "/items";

  const itemsButtonStyle = isItemsActive
    ? `text-primary-100 font-bold ${primaryBlue}`
    : `text-gray-700 hover:${primaryBlue}`;

  const noticeboardButtonStyle = `text-gray-700 hover:${primaryBlue}`;

  return (
    <header className="
      w-full h-[70px] shadow flex items-center px-4
      border-b border-[#dfdfdf]
      sm:px-6 md:px-10 lg:px-20
    ">
      
      {/* 로고 */}
      <Link
        to="/"
        className="
          shrink-0 mr-4
          ml-2
          sm:ml-[50px]
          md:ml-[100px]
          lg:ml-[200px]
        "
      >
        <img src={logo} alt="서비스 로고" className="h-8 w-auto block" />
      </Link>

      {/* 내비게이션 메뉴 */}
      <nav
        className="
          flex items-center space-x-4
          font-bold text-base text-gray-700
          whitespace-nowrap  /* 줄바꿈 방지 */
          sm:space-x-8 sm:text-lg
        "
      >
        <Link to="/noticeboard" className={noticeboardButtonStyle}>
          자유게시판
        </Link>

        <Link to="/items" className={itemsButtonStyle}>
          중고마켓
        </Link>
      </nav>

      {/* 프로필 */}
      <div
        className="
          ml-auto 
          mr-2
          sm:mr-[50px]
          md:mr-[100px]
          lg:mr-[200px]
        "
      >
        <Link
          to="/myprofile"
          className="flex items-center w-10 h-10 rounded-full bg-gray-300 justify-center transition-opacity duration-300 hover:opacity-70"
        >
          <ProfileIcon className="w-6 h-6" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
