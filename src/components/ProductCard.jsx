import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ProductCard({ images, name, price, favorite }) {
  return (
    <ProductWrap>
      <Link to="/">
        <ImageWrap>
          <img src={images} alt={name} />
        </ImageWrap>
        <div>{name}</div>
        <strong>{price.toLocaleString('ko-KR')}원</strong>
        <LikeArea>
          <i>
            <img src="/ico_like.svg" alt="좋아요" />
          </i>
          <span>{favorite}</span>
        </LikeArea>
      </Link>
    </ProductWrap>
  );
}

export default ProductCard;

const ProductWrap = styled.div`
  div {
    margin-top: 16px;
    font-size: 14px;
    font-weight: 500;
  }

  strong {
    display: block;
    margin-top: 6px;
    font-weight: 700;
  }

  a {
    display: block;

    & img {
      transition: all 0.3s;
    }
    & :hover img {
      transform: scale(1.2);
    }
  }
`;

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 16px;
`;

const LikeArea = styled.div`
  display: flex;
  margin-top: 6px;

  span {
    position: relative;
    top: 1px;
    margin-left: 4px;
    font-weight: 500;
    font-size: 12px;
    color: #4b5563;
  }
`;
