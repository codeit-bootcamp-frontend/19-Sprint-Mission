import { useEffect, useState } from 'react';
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
import useResponsiveSize from '@/hooks/useResponsiveSize';
import { formatPrice } from '@/utils/formatPrice';
import styles from './ProductList.module.css';

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const pageSize = useResponsiveSize('ALL_PRODUCTS');
  const [totalCount, setTotalCount] = useState(0);

  const [sort, setSort] = useState(Object.keys(SORT_OPTIONS)[0]);

  const handleSort = (sortValue) => {
    setSort(sortValue);
    setPage(1);
  };

  const [search, setSearch] = useState('');
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(search);
    setPage(1);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts({
          page,
          pageSize,
          orderBy: SORT_OPTIONS[sort],
          keyword,
        });
        setProduct(data.list);
        setTotalCount(data.totalCount);
      } catch (error) {
        setError(error);
      }
    };
    fetchProduct();
  }, [page, pageSize, sort, keyword]);

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
