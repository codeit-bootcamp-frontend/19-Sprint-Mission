import { useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { getProducts } from '@/apis/product';
import icons from '@/assets/icons/icons';
import Button from '@/components/common/button/Button';
import Input from '@/components/common/input/Input';
import Title from '@/components/common/title/Title';
import PaginationButton from '@/components/items/paginationButton/PaginationButton';
import ProductCard from '@/components/items/productCard/ProductCard';
import ProductSkeletonCard from '@/components/items/productCard/ProductSkeletonCard';
import SortDropdown from '@/components/items/sortDropdown/SortDropdown';
import { SORT_OPTIONS } from '@/constants/sortOptions';
import useFetchProductList from '@/hooks/useFetchProductList';
import styles from './ProductList.module.css';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || '1');
  const keyword = searchParams.get('keyword') || '';
  const sort = searchParams.get('sort') || Object.keys(SORT_OPTIONS)[0];
  const [searchBar, setSearchBar] = useState(keyword);

  const handleSort = (sortValue) => {
    setSearchParams({
      keyword,
      page: '1',
      sort: sortValue,
    });
  };

  const handleChangeSearchBar = (e) => {
    setSearchBar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = { page: '1', sort };

    if (searchBar.trim() !== '') {
      params.keyword = searchBar;
    }
    setSearchParams(params);
  };

  const handleResetSearchBar = () => {
    setSearchBar('');
    setSearchParams({ page: '1', sort });
  };

  const handlePageChange = (newPage) => {
    setSearchParams((searchParams) => {
      searchParams.set('page', newPage);
      return searchParams;
    });
  };

  const { product, pageSize, totalCount, error, loading } = useFetchProductList(
    getProducts,
    'ALL_PRODUCTS',
    { page, orderBy: SORT_OPTIONS[sort], keyword }
  );

  if (error) {
    return <div>에러 발생: {error.message}</div>;
  }

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
            value={searchBar}
            onChange={handleChangeSearchBar}
          />
          {searchBar && (
            <button
              type="button"
              className={styles['reset-button']}
              onClick={handleResetSearchBar}>
              ✕
            </button>
          )}
        </form>
        <Button as={Link} to="/additem" size="xs">
          상품 등록하기
        </Button>
        <SortDropdown
          options={SORT_OPTIONS}
          selectedSort={sort}
          onSelect={handleSort}
        />
      </div>
      <div className={styles['contents-area']}>
        <div className={styles.contents}>
          {loading
            ? Array.from({ length: pageSize }).map((_, index) => {
                return <ProductSkeletonCard key={`Basic-${index}`} />;
              })
            : product.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
        </div>
        <PaginationButton
          totalCount={totalCount}
          pageSize={pageSize}
          page={page}
          onChangePage={handlePageChange}
        />
      </div>
    </section>
  );
};

export default ProductList;
