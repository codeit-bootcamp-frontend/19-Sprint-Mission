import ProductCard from './ProductCard';
import styled from 'styled-components';

function ProductList({ product, size }) {
  return (
    <ProductListWrap className={size}>
      {product.map((item) => (
        <li key={item.id}>
          <ProductCard
            images={item.images}
            name={item.name}
            price={item.price}
            favorite={item.favoriteCount}
          />
        </li>
      ))}
    </ProductListWrap>
  );
}

export default ProductList;

const ProductListWrap = styled.ul`
  display: flex;
  margin-top: -24px;
  margin-left: -24px;
  flex-wrap: wrap;

  li {
    margin-top: 40px;
    margin-left: 24px;
    > div {
      width: 100%;
    }
  }

  &.big li {
    width: calc((100% / 4) - 24px);
  }

  &.small li {
    width: calc((100% / 5) - 24px);
  }

  // 태블릿
  @media (max-width: 900px) {
    margin-left: -10px;

    li {
      margin-left: 10px;
    }

    &.big li {
      width: calc((100% / 2) - 10px);
    }

    &.small li {
      width: calc((100% / 3) - 10px);
    }
  }

  // 모바일
  @media (max-width: 600px) {
    &.big li {
      width: 100%;
    }

    &.small li {
      width: calc((100% / 2) - 10px);
    }
  }
`;
