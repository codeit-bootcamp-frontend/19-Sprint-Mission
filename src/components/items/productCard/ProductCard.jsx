import { Link } from 'react-router';
import icons from '@/assets/icons/icons';
import images from '@/assets/images/images';
import { formatPrice } from '@/utils/formatPrice';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { id, images: productImg, name, price, favoriteCount } = product;

  const imageSrc = productImg[0] || images.productEmpty;

  const handleError = (e) => {
    e.target.src = images.productEmpty;
    e.target.onerror = null;
  };

  return (
    <Link to={`/items/${id}`} className={styles.container}>
      <img
        className={styles.img}
        src={imageSrc}
        alt="상품 사진"
        onError={handleError}
      />
      <p className={styles.title}>{name}</p>
      <span className={styles.price}>{formatPrice(price)}</span>
      <div className={styles['favorite-info-area']}>
        <icons.HeartIcon />
        <span className={styles['favorite-text']}>{favoriteCount}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
