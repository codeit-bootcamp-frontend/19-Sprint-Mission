import styled from 'styled-components';
import Title from '../components/Title';
import Button from '../components/Button';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import FileInput from '../components/FileInput';
import { useEffect, useState } from 'react';
import TagInput from '../components/TagInput';

function AddItem() {
  const [formData, setFormData] = useState({
    image: null,
    productName: '',
    description: '',
    price: '',
    tags: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  // 모든 필드가 채워졌는지 확인
  useEffect(() => {
    const allFieldsFilled =
      formData.image !== null &&
      formData.productName.trim() !== '' &&
      formData.description.trim() !== '' &&
      formData.price.trim() !== '' &&
      formData.tags.trim() !== '';

    setIsFormValid(allFieldsFilled);
  }, [formData]);

  const handleImageChange = (files) => {
    setFormData((prev) => ({ ...prev, image: files }));
  };

  const handleProductNameChange = (value) => {
    setFormData((prev) => ({ ...prev, productName: value }));
  };

  const handleDescriptionChange = (value) => {
    setFormData((prev) => ({ ...prev, description: value }));
  };

  const handlePriceChange = (value) => {
    setFormData((prev) => ({ ...prev, price: value }));
  };

  const handleTagsChange = (value) => {
    setFormData((prev) => ({ ...prev, tags: value }));
  };

  return (
    <AddItemsWrap>
      <AddItemsTitle>
        <Title title="상품 등록하기" />
        <Button buttonName="등록" disabled={!isFormValid} />
      </AddItemsTitle>
      <AddItemsList>
        <li>
          <Title title="상품 이미지" size="18" />
          <FileInput onChange={handleImageChange} />
        </li>
        <li>
          <Title title="상품명" size="18" />
          <Input
            placeholder="상품명을 입력해주세요"
            value={formData.productName}
            onChange={handleProductNameChange}
          />
        </li>
        <li>
          <Title title="상품 소개" size="18" />
          <Textarea
            placeholder="상품 소개를 입력해주세요."
            value={formData.description}
            onChange={handleDescriptionChange}
          />
        </li>
        <li>
          <Title title="판매가격" size="18" />
          <Input
            placeholder="판매가격을 입력해주세요"
            value={formData.price}
            onChange={handlePriceChange}
          />
        </li>
        <li>
          <Title title="태그" size="18" />
          <TagInput
            placeholder="태그를 입력해주세요"
            value={formData.tags}
            onChange={handleTagsChange}
          />
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

  /* 테블릿 */
  @media (max-width: 900px) {
    margin: 16px auto 0;
    padding: 0 24px;
  }

  /* 모바일 */
  @media (max-width: 600px) {
    margin: 24px auto 0;
    padding: 0 15px;
  }
`;

const AddItemsTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddItemsList = styled.ul`
  margin-top: 24px;
  > li {
    h2 {
      margin-bottom: 16px;
    }

    input {
      width: 100%;
    }
  }

  > li ~ li {
    margin-top: 32px;
  }
`;
