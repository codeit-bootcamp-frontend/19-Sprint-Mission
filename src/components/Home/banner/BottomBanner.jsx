import images from '@/assets/images/images';
import styles from './Banner.module.css';

const BottomBanner = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.contents} ${styles['contents-bottom']}`}>
        <h4 className={styles.title}>
          믿을 수 있는 <br />
          판다마켓 중고 거래
        </h4>
        <img
          src={images.homeBottomBanner}
          alt="판다마켓 하단 배너"
          className={styles['banner-img']}
        />
      </div>
    </section>
  );
};

export default BottomBanner;
