import Button from './components/Button';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Input from './components/Input';
import Pagination from './components/Pagination';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';
import Title from './components/Title';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Header />
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

export default App;

const ContentBody = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 24px auto 0;
`;

const AllProduct = styled.div`
  margin-top: 40px;
`;
