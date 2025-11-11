import images from '@/assets/images/images';
import styles from './ProductImg.module.css';

const ProductImg = ({ imgArray }) => {
  const imageSrc = imgArray[0] || images.productEmpty;

  const handleError = (e) => {
    e.target.src = images.productEmpty;
    e.target.onerror = null;
  };

  return (
    <img
      className={styles.container}
      src={imageSrc}
      alt="상품 사진"
      onError={handleError}
    />
  );
};

export default ProductImg;
