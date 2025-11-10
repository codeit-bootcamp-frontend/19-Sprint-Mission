import icons from '@/assets/icons/icons';
import styles from './LikeButton.module.css';

const LikeButton = ({ favoriteCount, isFavorite }) => {
  return (
    <button type="button" aria-label="상품 좋아요" className={styles.container}>
      {isFavorite ? (
        <icons.HeartActiveIcon />
      ) : (
        <icons.HeartIcon width={32} height={32} />
      )}
      <span className={styles.text}>{favoriteCount}</span>
    </button>
  );
};

export default LikeButton;
