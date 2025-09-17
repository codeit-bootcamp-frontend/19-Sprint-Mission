import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { getBestProducts } from '@/apis/product';
import icons from '@/assets/icons/icons';
import Button from '@/components/common/button/Button';
import Input from '@/components/common/input/Input';
import Title from '@/components/common/title/Title';
import Card from '@/components/items/card/Card';
import SelectBox from '@/components/items/selectBox/SelectBox';
import { SORT_OPTIONS } from '@/constants/sortOptions';
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

  const handleSort = (sortValue) => {
    console.log(`서버에 보낼 값: ${sortValue}`);
  };

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
      <section className={styles['product-area']}>
        <div className={styles['top-area']}>
          <Title>전체 상품</Title>
          <div className={styles['search-area']}>
            <icons.SearchIcon className={styles['search-icon']} />
            <Input
              id="search"
              className={styles['search-input']}
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
          <Button as={Link} to="/additem" size="xs">
            상품 등록하기
          </Button>
          <SelectBox options={SORT_OPTIONS} onSelect={handleSort} />
        </div>
        <div className={styles.contents} />
      </section>
    </main>
  );
};

export default Items;
