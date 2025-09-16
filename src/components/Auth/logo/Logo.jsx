import { Link } from 'react-router';
import logos from '@/assets/logo/logo';
import styles from './Logo.module.css';

const Logo = ({ link = '/' }) => {
  return (
    <h1 className={styles.container}>
      <Link to={link}>
        <img src={logos.logo} alt="판다마켓 로고" />
      </Link>
    </h1>
  );
};

export default Logo;
