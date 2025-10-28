import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Title from './components/Title';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Header />
      <ContentBody>
        <Title title="베스트 상품" />
        <ProductCard />
        <Title title="전체 상품" />
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
