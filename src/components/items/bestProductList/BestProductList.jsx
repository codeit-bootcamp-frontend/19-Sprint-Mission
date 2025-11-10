import { getBestProducts } from '@/apis/product';
import Title from '@/components/common/title/Title';
import ProductCard from '@/components/items/productCard/ProductCard';
import useFetchProduct from '@/hooks/useFetchProduct';
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
          {product.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </section>
  );
};

export default BestProductList;
