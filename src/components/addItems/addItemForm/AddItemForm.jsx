import { useState } from 'react';
import ImageFileInput from '@/components/addItems/imageFileInput/ImageFileInput';
import TagInput from '@/components/addItems/tagInput/TagInput';
import Button from '@/components/common/button/Button';
import Input from '@/components/common/input/Input';
import Label from '@/components/common/label/Label';
import Title from '@/components/common/title/Title';
import styles from './AddItemForm.module.css';

const AddItemForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    description: '',
    price: '',
    tags: [],
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 이후 미션에서 api 연결 구현
    // TODO: 이미지는 post /images/upload api 이용해서 url 획득 후 전달
    // TODO: 미션 12에서 form 리팩토링 해보기 -> 제어컴포넌트 vs 비제어컴포넌트
    console.log(formData);
  };

  const isFormValid =
    formData.name.trim() &&
    formData.description.trim() &&
    formData.price.trim() &&
    formData.tags.length > 0;

  return (
    <form className={styles.container}>
      <div className={styles['top-area']}>
        <Title>상품 등록하기</Title>
        <Button
          type="submit"
          size="xs"
          disabled={!isFormValid}
          onClick={handleSubmit}>
          등록
        </Button>
      </div>
      <div className={styles['form-area']}>
        <ImageFileInput
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <div className={styles['input-area']}>
          <Label id="name" label="상품명" />
          <Input
            id="name"
            placeholder="상품명을 입력해주세요"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </div>

        <div className={styles['input-area']}>
          <Label id="description" label="상품 소개" />
          <textarea
            className={styles.textarea}
            name="description"
            id="description"
            placeholder="상품 소개를 입력해주세요"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
          />
        </div>

        <div className={styles['input-area']}>
          <Label id="price" label="판매가격" />
          <Input
            id="price"
            placeholder="판매 가격을 입력해주세요"
            value={formData.price}
            onChange={(e) => handleChange('price', e.target.value)}
          />
        </div>

        <TagInput name="tags" value={formData.tags} onChange={handleChange} />
      </div>
    </form>
  );
};

export default AddItemForm;
