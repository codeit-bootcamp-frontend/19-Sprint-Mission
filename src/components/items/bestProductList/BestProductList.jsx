import { getBestProducts } from '@/apis/products';
import Title from '@/components/common/title/Title';
import ProductCard from '@/components/items/productCard/ProductCard';
import ProductSkeletonCard from '@/components/items/productCard/ProductSkeletonCard';
import useFetchProductList from '@/hooks/useFetchProductList';
import styles from './BestProductList.module.css';

const BestProductList = () => {
  const { product, error, pageSize, loading } = useFetchProductList(
    getBestProducts,
    'BEST_PRODUCTS'
  );

  if (error) {
    return <div>에러 발생: {error.message}</div>;
  }

  return (
    <section className={styles.container}>
      <Title>베스트 상품</Title>
      <div className={styles.contents}>
        {loading
          ? Array.from({ length: pageSize }).map((_, index) => {
              return <ProductSkeletonCard key={`Best-${index}`} />;
            })
          : product.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
      </div>
    </section>
  );
};

export default BestProductList;
