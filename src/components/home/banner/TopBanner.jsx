import { Link } from 'react-router';
import images from '@/assets/images/images';
import Button from '@/components/common/button/Button';
import styles from './Banner.module.css';

const TopBanner = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.contents} ${styles['contents-top']}`}>
        <div className={styles['text-area']}>
          <h2 className={styles.title}>
            일상의 모든 물건을 <br className={styles['title-br']} />
            거래해 보세요
          </h2>
          <Button as={Link} to="/items" size="l">
            구경하러 가기
          </Button>
        </div>
        <img
          src={images.homeTopBanner}
          alt="판다마켓 상단 배너"
          className={styles['banner-img']}
        />
      </div>
    </section>
  );
};

export default TopBanner;
