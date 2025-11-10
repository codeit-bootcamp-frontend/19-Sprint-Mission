import classNames from 'classnames';
import { Link, NavLink, useLocation } from 'react-router';
import images from '@/assets/images/images';
import logos from '@/assets/logo/logo';
import Button from '@/components/common/button/Button';
import styles from './Gnb.module.css';

const Gnb = ({ login = true }) => {
  const location = useLocation();

  const navLinkClassName = ({ isActive }) =>
    classNames({ [styles['menu-active']]: isActive });

  const navLinkItemsClassName = () => {
    const active =
      location.pathname.startsWith('/items') ||
      location.pathname === '/additem';
    return classNames({ [styles['menu-active']]: active });
  };

  return (
    <header className={styles.container}>
      <nav
        className={classNames(styles.gnb, {
          [styles['gnb-auth']]: login,
          [styles['gnb-guest']]: !login,
        })}>
        <h1 className={styles.logo}>
          <Link to="/">
            <picture>
              <source media="(max-width: 767px)" srcSet={logos.textLogo} />
              <img className={styles['logo-img']} src={logos.logo} alt="로고" />
            </picture>
          </Link>
        </h1>
        {login ? (
          <>
            <ul className={styles['menu-list']}>
              <li className={styles.menu}>
                <NavLink className={navLinkClassName} to="/boards">
                  자유게시판
                </NavLink>
              </li>
              <li className={styles.menu}>
                <NavLink className={navLinkItemsClassName} to="/items">
                  중고마켓
                </NavLink>
              </li>
            </ul>
            <button type="button">
              <img width={40} src={images.profile} alt="프로필 이미지" />
            </button>
          </>
        ) : (
          <Button as={Link} to="/login">
            로그인
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Gnb;
