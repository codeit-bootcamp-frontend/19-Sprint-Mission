import styled from "styled-components";

type ProductCardProps = {
  name: string;
  images: string[];
  price: number;
  favoriteCount: number;
  variant?: "best" | "default";
};

const ProductCard = ({
  name,
  images,
  price,
  favoriteCount,
  variant = "default",
}: ProductCardProps) => {
  const thumbnailUrl = images?.[0] || "/placeholder.png";

  return (
    <ProductCardStyled $variant={variant}>
      <img src={thumbnailUrl} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{price.toLocaleString()}원</p>
        <p>♥ {favoriteCount}</p>
      </div>
    </ProductCardStyled>
  );
};

// ----- styles -----

const ProductCardStyled = styled.li<{ $variant: "best" | "default" }>`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    display: block;

    // 베스트 상품
    ${({ $variant, theme }) =>
      $variant === "best" &&
      `
      @media ${theme.device.desktop} { height: 282px; }
      @media ${theme.device.tablet}  { height: 343px; }
      @media ${theme.device.mobile}  { height: 343px; }
    `}

    // 일반 상품
    ${({ $variant, theme }) =>
      $variant === "default" &&
      `
      @media ${theme.device.desktop} { height: 200px; }
      @media ${theme.device.tablet}  { height: 250px; }
      @media ${theme.device.mobile}  { height: 250px; }
    `}
  }

  .product-info {
    padding: 12px;

    h3 {
      font-size: 1rem;
      margin-bottom: 8px;
    }

    p {
      margin: 4px 0;
    }
  }
`;

export default ProductCard;
