import { Outlet } from 'react-router';
import Gnb from '@/components/common/gnb/Gnb';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Gnb login={true} />
      <div className={styles.contents}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
