import classNames from 'classnames';
import { Outlet, useLocation } from 'react-router';
import Gnb from '@/components/common/gnb/Gnb';
import styles from './MainLayout.module.css';

const ITEM_DETAIL = /^\/items\/\d+$/;

const MainLayout = () => {
  const location = useLocation();
  const isItemDetail = ITEM_DETAIL.test(location.pathname);

  return (
    <div
      className={classNames(styles.container, {
        [styles['detail-item-bg']]: isItemDetail,
      })}>
      <Gnb login={true} />
      <div className={styles.contents}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
