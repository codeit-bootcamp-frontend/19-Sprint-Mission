import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Button from "@/components/Button";
import Profile from "@/components/Profile";

function Header() {
  const location = useLocation();
  const indexPage = ["/"].includes(location.pathname);

  const navigate = useNavigate();
  const handleLink = () => navigate("/login");
  return (
    <header className="header">
      <div className="inner">
        <Link to="/" className="logo">
          <span className="blind">판다마켓</span>
        </Link>
        <div className="nav">
          <NavLink
            to="/board"
            className={({ isActive }) =>
              `navLink ${isActive ? "isActive" : ""}`
            }
          >
            자유게시판
          </NavLink>
          <NavLink
            to="/items"
            className={({ isActive }) =>
              `navLink ${isActive ? "isActive" : ""}`
            }
          >
            중고마켓
          </NavLink>
        </div>
        <div className="util">
          {indexPage ? (
            <Button onClick={handleLink} size="mid">
              로그인
            </Button>
          ) : (
            <Profile />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
