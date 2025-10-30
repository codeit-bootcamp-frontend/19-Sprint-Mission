import { useState } from 'react';
import { Link } from 'react-router';
import { getProducts } from '@/apis/product';
import icons from '@/assets/icons/icons';
import Button from '@/components/common/button/Button';
import Input from '@/components/common/input/Input';
import Title from '@/components/common/title/Title';
import Card from '@/components/items/card/Card';
import PaginationButton from '@/components/items/paginationButton/PaginationButton';
import SelectBox from '@/components/items/selectBox/SelectBox';
import { SORT_OPTIONS } from '@/constants/sortOptions';
import useFetchProduct from '@/hooks/useFetchProduct';
import { formatPrice } from '@/utils/formatPrice';
import styles from './ProductList.module.css';

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(Object.keys(SORT_OPTIONS)[0]);
  const [search, setSearch] = useState('');
  const [keyword, setKeyword] = useState('');

  const handleSort = (sortValue) => {
    setSort(sortValue);
    setPage(1);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(search);
    setPage(1);
  };

  const { product, pageSize, totalCount, error } = useFetchProduct(
    getProducts,
    'ALL_PRODUCTS',
    { page, orderBy: SORT_OPTIONS[sort], keyword }
  );
  return (
    <section className={styles.container}>
      <div className={styles['top-area']}>
        <Title>전체 상품</Title>
        <form
          name="keyword"
          onSubmit={handleSubmit}
          className={styles['search-area']}>
          <icons.SearchIcon className={styles['search-icon']} />
          <Input
            id="search"
            className={styles['search-input']}
            placeholder="검색할 상품을 입력해주세요"
            value={search}
            onChange={handleSearch}
          />
        </form>
        <Button as={Link} to="/additem" size="xs">
          상품 등록하기
        </Button>
        <SelectBox
          options={SORT_OPTIONS}
          selectedSort={sort}
          onSelect={handleSort}
        />
      </div>
      {error ? (
        <div>에러 발생 : {error.message}</div>
      ) : (
        <div className={styles['contents-area']}>
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
          <PaginationButton
            totalCount={totalCount}
            pageSize={pageSize}
            page={page}
            setPage={setPage}
          />
        </div>
      )}
    </section>
  );
};

export default ProductList;
