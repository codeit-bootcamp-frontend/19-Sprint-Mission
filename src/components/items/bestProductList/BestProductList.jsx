import { getBestProducts } from '@/apis/product';
import Title from '@/components/common/title/Title';
import Card from '@/components/items/card/Card';
import useFetchProduct from '@/hooks/useFetchProduct';
import { formatPrice } from '@/utils/formatPrice';
import styles from './BestProductList.module.css';

const BestProductList = () => {
  const { product, error } = useFetchProduct(getBestProducts, 'BEST_PRODUCTS');

  return (
    <section className={styles.container}>
      <Title>베스트 상품</Title>
      {error ? (
        <div>에러 발생 : {error.message}</div>
      ) : (
        <div className={styles.contents}>
          {product.map(({ id, images, name, price, favoriteCount }) => {
            return (
              <Card
                key={id}
                image={images.length > 0 ? images[0] : null}
                name={name}
                price={formatPrice(price)}
                favoriteCount={favoriteCount}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default BestProductList;
