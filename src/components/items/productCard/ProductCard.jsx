import { Link } from 'react-router';
import icons from '@/assets/icons/icons';
import ProductImg from '@/components/common/productImg/ProductImg';
import { formatPrice } from '@/utils/formatPrice';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { id, images: productImg, name, price, favoriteCount } = product;

  return (
    <Link to={`/items/${id}`} className={styles.container}>
      <ProductImg imgArray={productImg} />
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
