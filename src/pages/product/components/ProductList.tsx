import styled from "styled-components";
import ProductCard from "@/pages/product/components/ProductCard";
import type { Product } from "@/type/product";

type ProductListProps = {
  products: Product[];
  columns: number;
  columnsTablet: number;
  columnsMobile: number;
  variant?: "best" | "default";
};

interface GridProps {
  $columns: number;
  $columnsTablet: number;
  $columnsMobile: number;
}

const ProductList = ({
  products,
  columns = 4,
  columnsTablet = 2,
  columnsMobile = 1,
  variant = "default",
}: ProductListProps) => {
  if (!products || products.length === 0) {
    return <div>상품이 없습니다.</div>;
  }
  return (
    <ProductListStyled
      $columns={columns}
      $columnsTablet={columnsTablet}
      $columnsMobile={columnsMobile}
    >
      {products.map(({ id, name, images, price, favoriteCount }) => (
        <ProductCard
          key={id}
          images={images}
          name={name}
          price={price}
          favoriteCount={favoriteCount}
          variant={variant}
        />
      ))}
    </ProductListStyled>
  );
};

// ----- styles -----

const ProductListStyled = styled.ul<GridProps>`
  display: grid;
  gap: 20px;
  margin: 0 auto;
  max-width: 1200px;

  @media ${({ theme }) => theme.device.desktop} {
    grid-template-columns: repeat(${(props) => props.$columns || 4}, 1fr);
  }

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: repeat(${(props) => props.$columnsTablet || 2}, 1fr);
  }

  @media ${({ theme }) => theme.device.mobile} {
    grid-template-columns: repeat(${(props) => props.$columnsMobile || 1}, 1fr);
  }
`;

export default ProductList;
