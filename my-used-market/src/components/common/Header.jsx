import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import ProfileIcon from '@/assets/ic_profile.svg?react'
const primaryBlue = "text-blue-600";

const Header = () => {
  const location = useLocation();
  const isItemsActive = location.pathname === "/items";

  const itemsButtonStyle = isItemsActive
    ? `text-primary-100 font-bold ${primaryBlue}`
    : `text-gray-700 hover:${primaryBlue}`;

  const noticeboardButtonStyle = isItemsActive
    ? `text-gray-700 hover:${primaryBlue}`
    : `text-gray-700 hover:${primaryBlue}`;

  return (
    <header className="w-full h-[70px] shadow flex items-center p-4 border-b border-[#dfdfdf]">
      <Link
        to="/"
        className="shrink-0 ml-[200px] mr-[32px] tablet:mr-[35px] desktop:mr-[47px]"
      >
        <img src={logo} alt="서비스 로고" className="h-8 w-auto block" />
      </Link>

      <nav
        className="flex items-center  tablet:space-x-9 font-bold text-base tablet:text-lg text-gray-700"
      >
        <Link to="/noticeboard" className={noticeboardButtonStyle}>
          자유게시판
        </Link>

        <Link to="/items" className={`${itemsButtonStyle} ml-[15px]`}>
          중고마켓
        </Link>
      </nav>

      <div className="ml-auto mr-[200px] ">
        <Link to="myprofile" className="flex items-center w-10 h-10 rounded-full bg-gray-900 justify-center transition-opacity duration-300 hover:opacity-70">
        <ProfileIcon className='w-6 h-6 '/>
        </Link>
      </div>
    </header>
  );
};

export default Header;
