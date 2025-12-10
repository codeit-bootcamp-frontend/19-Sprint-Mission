import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Button from "@/components/Button";
import Profile from "@/components/Profile";
import styles from "./Header.module.scss";
import clsx from "clsx";

function Header() {
  const location = useLocation();
  const indexPage = ["/"].includes(location.pathname);

  const isItemsActive =
    location.pathname.startsWith("/items") ||
    location.pathname.startsWith("/additem");

  const navigate = useNavigate();
  const handleLink = () => navigate("/login");
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.blind}>판다마켓</span>
        </Link>
        <div className={styles.nav}>
          <NavLink
            to="/board"
            className={({ isActive }) =>
              clsx(styles.navLink, {
                [styles.isActive]: isActive,
              })
            }
          >
            자유게시판
          </NavLink>
          <NavLink
            to="/items"
            className={() =>
              clsx(styles.navLink, {
                [styles.isActive]: isItemsActive,
              })
            }
          >
            중고마켓
          </NavLink>
        </div>
        <div className={styles.util}>
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
