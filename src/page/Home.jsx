import { getProducts } from '../utill/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import Input from '../components/Input';
import Pagination from '../components/Pagination';
import ProductList from '../components/ProductList';
import Title from '../components/Title';

function Home() {
  const [best, setBest] = useState([]);
  const [all, setAll] = useState([]);
  const [dropState, setDropState] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [bigPageSize, setBigPageSize] = useState(4);

  useEffect(() => {
    const fetchBest = async () => {
      const res = await getProducts(1, bigPageSize, 'favorite');
      setBest(res.list);
    };

    fetchBest();
  }, [bigPageSize]);

  useEffect(() => {
    const fetchAll = async () => {
      const order = dropState ? 'recent' : 'favorite';
      const res = await getProducts(currentPage, pageSize, order);
      setAll(res.list);

      if (res.totalCount) {
        setTotalPages(Math.ceil(res.totalCount / pageSize));
      }
    };
    fetchAll();
  }, [dropState, currentPage, pageSize]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newPageSize;
      let newBigPageSize;

      if (width <= 600) {
        newPageSize = 4;
        newBigPageSize = 1;
      } else if (width <= 900) {
        newPageSize = 6;
        newBigPageSize = 2;
      } else {
        newPageSize = 10;
        newBigPageSize = 4;
      }

      if (newPageSize !== pageSize) {
        setPageSize(newPageSize);
        setBigPageSize(newBigPageSize);
        setCurrentPage(1);
      }
    };

    handleResize(); // 초기 실행
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [pageSize]);

  return (
    <>
      <ContentBody>
        <Title title="베스트 상품" />
        <ProductList product={best} size="big" />

        <AllProduct>
          <div>
            <Title title="전체 상품" />
            <div>
              <Input search={true} />
              <Button buttonName="상품 등록하기" to={'/addItem'} />
              <Dropdown dropState={dropState} setDropState={setDropState} />
            </div>
          </div>
          <ProductList product={all} size="small" />
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
