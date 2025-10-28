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
        <i>
          <img src="/ico_like.svg" alt="좋아요" />
        </i>
        <span>240</span>
      </a>
    </ProductWrap>
  );
}

export default ProductCard;

const ProductWrap = styled.div``;

const ImageWrap = styled.div`
  width: 282px;
  height: 282px;
  overflow: hidden;
  border-radius: 16px;
`;
