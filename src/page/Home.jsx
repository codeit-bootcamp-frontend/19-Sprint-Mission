import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import ItemsOdrderDropdown from '../components/ItemsOdrderDropdown';
import Input from '../components/Input';
import Pagination from '../components/Pagination';
import ProductList from '../components/ProductList';
import Title from '../components/Title';
import { useProducts } from '../hooks/useProducts';
import { useResponsiveProducts } from '../hooks/useResponsiveProducts';
import { usePagination } from '../hooks/usePagination';

const dropdownOptions = [
  {
    label: '최신순',
    value: 'recent',
  },
  {
    label: '좋아요순',
    value: 'favorite',
  },
];

function Home() {
  const { currentPage, handlePageChange } = usePagination(1);
  const { pageSize, bigPageSize } = useResponsiveProducts();

  const [dropState, setDropState] = useState(dropdownOptions[0]);

  // 드롭다운 상태
  const order = dropState.value;

  // 베스트 상품
  const { products: bestProducts } = useProducts(1, bigPageSize, 'favorite');

  // 전체 상품
  const { products: allProducts, totalPages } = useProducts(
    currentPage,
    pageSize,
    order
  );

  return (
    <>
      <ContentBody>
        <Title title="베스트 상품" />
        <ProductList products={bestProducts} size="big" />

        <AllProduct>
          <div>
            <Title title="전체 상품" />
            <div>
              <Input search={true} />
              <Button buttonName="상품 등록하기" to={'/addItem'} />
              <ItemsOdrderDropdown
                options={dropdownOptions}
                dropState={dropState}
                setDropState={setDropState}
              />
            </div>
          </div>
          <ProductList products={allProducts} size="small" />
        </AllProduct>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </ContentBody>
    </>
  );
}

export default Home;

const ContentBody = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 24px auto 0;

  // 테블릿
  @media (max-width: 900px) {
    padding: 0 24px;
  }
`;

const AllProduct = styled.div`
  margin-top: 40px;

  > div {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;

      > button,
      > a {
        margin-left: 12px;
      }

      > div {
        margin-left: 12px;
      }
    }
  }

  // 테블릿
  @media (max-width: 900px) {
    > div {
      display: block;
      h2 {
        margin-bottom: 20px;
      }
    }

    > div input {
      width: 242px;
    }
  }

  // 모바일
  @media (max-width: 600px) {
    > div {
      display: block;
      position: relative;

      > h2 {
        width: 100%;
        margin-bottom: 0;
      }

      > div {
        margin-top: 14px;
        align-items: center;

        > button,
        a {
          position: absolute;
          right: 0;
          top: -9px;
          height: 42px;
        }

        > div {
          width: 42px;
        }

        input {
          width: calc(100% - 53px);
          height: 42px;
        }
      }
    }
  }
`;
