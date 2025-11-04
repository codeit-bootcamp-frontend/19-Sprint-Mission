import styled from 'styled-components';
import Title from '../components/Title';
import Button from '../components/Button';
import Input from '../components/Input';
import Textarea from '../components/Textarea';

function AddItem() {
  return (
    <AddItemsWrap>
      <AddItemsTitle>
        <Title title="상품 등록하기" />
        <Button buttonName="등록" disabled={true} />
      </AddItemsTitle>
      <AddItemsList>
        <li>
          <Title title="상품 이미지" size="18" />
          이미지 등록
        </li>
        <li>
          <Title title="상품명" size="18" />
          <Input placeholder="상품명을 입력해주세요" />
        </li>
        <li>
          <Title title="상품 소개" size="18" />
          <Textarea placeholder="상품 소개를 입력해주세요." />
        </li>
        <li>
          <Title title="판매가격" size="18" />
          <Input placeholder="판매가격을 입력해주세요" />
        </li>
        <li>
          <Title title="태그" size="18" />
          <Input placeholder="태그를 입력해주세요" />
        </li>
      </AddItemsList>
    </AddItemsWrap>
  );
}

export default AddItem;

const AddItemsWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 24px auto 0;
`;

const AddItemsTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddItemsList = styled.ul`
  margin-top: 24px;
  li {
    h2 {
      margin-bottom: 16px;
    }

    input {
      width: 100%;
    }
  }

  li ~ li {
    margin-top: 32px;
  }
`;
