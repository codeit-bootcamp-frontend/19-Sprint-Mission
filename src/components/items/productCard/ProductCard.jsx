import icons from '@/assets/icons/icons';
import images from '@/assets/images/images';
import { formatPrice } from '@/utils/formatPrice';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { images: productImg, name, price, favoriteCount } = product;

  const imageSrc = productImg[0] || images.productEmpty;

  const handleError = (e) => {
    e.target.src = images.productEmpty;
    e.target.onerror = null;
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={imageSrc}
        alt="상품 사진"
        onError={handleError}
      />
      <p className={styles.title}>{name}</p>
      <span className={styles.price}>{formatPrice(price)}</span>
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

export default ProductCard;
