import styled from 'styled-components';

function ProductCard() {
  return (
    <ProductWrap>
      <a href="#;">
        <ImageWrap>
          <img src="/aa.png" alt="임시" />
        </ImageWrap>
        <p>아이패드 미니 팝니다.</p>
        <strong>500,000원</strong>
        <LikeArea>
          <i>
            <img src="/ico_like.svg" alt="좋아요" />
          </i>
          <span>240</span>
        </LikeArea>
      </a>
    </ProductWrap>
  );
}

export default ProductCard;

const ProductWrap = styled.div`
  p {
    margin-top: 16px;
    font-size: 14px;
    font-weight: 500;
  }

  strong {
    display: block;
    margin-top: 6px;
    font-weight: 700;
  }
`;

const ImageWrap = styled.div`
  width: 282px;
  height: 282px;
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
