import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import Input from '../components/Input';
import Pagination from '../components/Pagination';
import ProductList from '../components/ProductList';
import Title from '../components/Title';
import styled from 'styled-components';

function Home() {
  return (
    <>
      <ContentBody>
        <Title title="베스트 상품" />
        <ProductList />

        <AllProduct>
          <div>
            <Title title="전체 상품" />
            <div>
              <Input />
              <Button buttonName="상품 등록하기" />
              <Dropdown />
            </div>
          </div>
          <ProductList />
        </AllProduct>
        <Pagination />
      </ContentBody>
    </>
  );
}

export default Home;

const ContentBody = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 24px auto 0;
`;

const AllProduct = styled.div`
  margin-top: 40px;

  > div {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;

      > button {
        margin-left: 12px;
      }

      > div {
        margin-left: 12px;
      }
    }
  }
`;
