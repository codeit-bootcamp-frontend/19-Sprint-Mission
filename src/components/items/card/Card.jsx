import icons from '@/assets/icons/icons';
import images from '@/assets/images/images';
import styles from './Card.module.css';

const Card = ({ image, name, price, favoriteCount }) => {
  const handleError = (e) => {
    e.target.src = images.productEmpty;
    e.target.onerror = null;
  };

  const imageSrc = image || images.productEmpty;

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={imageSrc}
        alt="상품 사진"
        onError={handleError}
      />
      <p className={styles.title}>{name}</p>
      <span className={styles.price}>{price}</span>
      <div className={styles['favorite-button-area']}>
        <button
          className={styles['favorite-button']}
          type="button"
          aria-label="상품 좋아요">
          <icons.HeartIcon />
        </button>
        <span className={styles['favorite-text']}>{favoriteCount}</span>
      </div>
    </div>
  );
};

export default Card;
