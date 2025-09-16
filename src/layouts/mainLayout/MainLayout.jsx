import { Outlet, useLocation } from 'react-router';
import Footer from '@/components/common/footer/Footer';
import Gnb from '@/components/common/gnb/Gnb';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  // ✅ TODO: 로그인 기능 추가 시 수정 예정
  const { pathname } = useLocation();
  const isMain = pathname === '/';

  return (
    <>
      <div className={styles.container}>
        <Gnb login={!isMain} />
        <Outlet />
      </div>
      {isMain && <Footer />}
    </>
  );
};

export default MainLayout;
