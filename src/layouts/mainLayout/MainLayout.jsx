import { Outlet } from 'react-router';
import Gnb from '@/components/common/gnb/Gnb';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Gnb />
      <Outlet />
    </div>
  );
};

export default MainLayout;
