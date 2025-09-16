import { useEffect, useState } from 'react';
import { getBestProducts } from '@/apis/product';
import Title from '@/components/common/title/Title';
import Card from '@/components/items/card/Card';
import styles from '@/style/page/Items.module.css';

const Items = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getBestProducts();
        setBestProducts(data.list);
      } catch (err) {
        setError(err);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>에러 발생 : {error.message}</div>;
  }

  return (
    <main>
      <section className={styles['best-product-area']}>
        <Title>베스트 상품</Title>
        <div className={styles.contents}>
          {bestProducts.map(({ id, images, name, price, favoriteCount }) => {
            return (
              <Card
                key={id}
                image={images[0]}
                name={name}
                price={price}
                favoriteCount={favoriteCount}
              />
            );
          })}
        </div>
      </section>
      <section>
        <Title>전체 상품</Title>
      </section>
    </main>
  );
};

export default Items;
