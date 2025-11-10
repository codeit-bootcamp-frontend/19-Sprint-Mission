import ProductImg from '@/components/common/productImg/ProductImg';
import TagItem from '@/components/common/tag/TagItem';
import LikeButton from '@/components/detailItem/likeButton/LikeButton';
import MoreDropdown from '@/components/detailItem/MoreDropdown/MoreDropdown';
import UserInfo from '@/components/detailItem/userInfo/UserInfo';
import { formatDate } from '@/utils/formatDate';
import { formatPrice } from '@/utils/formatPrice';
import styles from './ProductDetail.module.css';

const ProductDetail = ({ product, onEdit, onDelete }) => {
  const {
    name,
    price,
    description,
    tags,
    ownerNickname,
    images,
    updatedAt,
    isFavorite,
    favoriteCount,
  } = product;

  return (
    <div className={styles.container}>
      <div className={styles['img-area']}>
        <ProductImg imgArray={images} />
      </div>
      <div className={styles['contents']}>
        <div className={styles['top-area']}>
          <div className={styles['text-area']}>
            <h2 className={styles.product}>{name}</h2>
            <span className={styles.price}>{formatPrice(price)}</span>
          </div>
          <MoreDropdown
            items={[
              { label: '수정하기', onClick: onEdit },
              { label: '삭제하기', onClick: onDelete },
            ]}
          />
        </div>
        <div className={styles['detail-area']}>
          <h3 className={styles['detail-title']}>상품 소개</h3>
          <p>{description}</p>
        </div>
        <div className={styles['detail-area']}>
          <h3 className={styles['detail-title']}>상품 태그</h3>
          <ul className={styles['tag-area']}>
            {tags.map((t) => {
              return <TagItem key={t} tag={t} />;
            })}
          </ul>
        </div>
        <div className={styles['bottom-area']}>
          <UserInfo nickname={ownerNickname} date={formatDate(updatedAt)} />
          <span className={styles.divider} />
          <LikeButton favoriteCount={favoriteCount} isFavorite={isFavorite} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
