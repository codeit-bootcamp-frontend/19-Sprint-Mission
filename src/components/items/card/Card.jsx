import icons from '@/assets/icons/icons';
import images from '@/assets/images/images';
import styles from './Card.module.css';

const Card = ({ image, name, price, favoriteCount }) => {
  const img = image === 'https://example.com/...' ? images.productEmpty : image;

  return (
    <div className={styles.container}>
      <img className={styles.img} src={img} alt="상품 사진" />
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
