import ProductCard from './ProductCard';
import styled from 'styled-components';

function ProductList() {
  return (
    <ProductListWrap>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
    </ProductListWrap>
  );
}

export default ProductList;

const ProductListWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;
