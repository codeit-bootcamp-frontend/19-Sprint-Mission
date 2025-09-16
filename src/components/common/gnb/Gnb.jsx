import { Link, NavLink } from 'react-router';
import profile from '@/assets/gnb/profile.png';
import logos from '@/assets/logo/logo';
import Button from '@/components/common/button/Button';
import styles from './Gnb.module.css';

const Gnb = ({ login = true }) => {
  const gnbClassName = `${styles.gnb} ${
    login ? styles['gnb-auth'] : styles['gnb-guest']
  }`;

  const navLinkClassName = ({ isActive }) => {
    return isActive ? `${styles['menu-active']}` : '';
  };

  return (
    <header className={styles.container}>
      <nav className={gnbClassName}>
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
                <NavLink className={navLinkClassName} to="/items">
                  중고마켓
                </NavLink>
              </li>
            </ul>
            <button type="button">
              <img width={40} src={profile} alt="프로필 이미지" />
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
