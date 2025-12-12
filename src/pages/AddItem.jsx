import "./AddItem.scss";
import Input from "@/components/common/Input";
import ImageForm from "../components/common/ImageForm";
import Button from "../components/common/Button";
import Textarea from "@/components/common/Textarea";
import TagInput from "@/components/common/TagInput";
import { useState } from "react";

const AddItem = () => {
  const [tags, setTags] = useState([]);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    introduction: "",
    price: "",
  });

  const handleInput = (value, input) => {
    setFormData((prev) => ({ ...prev, [input]: value }));
  };

  const validForm =
    formData.image &&
    formData.name &&
    formData.introduction &&
    formData.price &&
    tags.length > 0;

  return (
    <main className="AddItem">
      <form className="form-container">
        <div className="item-submit-container">
          <span className="title-text item-submit-text">상품 등록하기</span>
          <Button className="item-submit-btn" disabled={!validForm}>
            등록
          </Button>
        </div>
        <div className="form-input-container">
          <ImageForm
            title="상품 이미지"
            onFileChange={(value) => handleInput(value, "image")}
          />
          <Input
            value={formData.name}
            name="item-name"
            title="상품명"
            placeholder="상품명을 입력해주세요"
            onChange={(value) => handleInput(value, "name")}
          />
          <Textarea
            value={formData.introduction}
            name="item-introduction"
            title="상품 소개"
            placeholder="상품소개를 입력해주세요"
            onChange={(value) => handleInput(value, "introduction")}
          />
          <Input
            value={formData.price}
            name="item-price"
            type="number"
            title="판매 가격"
            placeholder="판매 가격을 입력해주세요"
            onChange={(value) => handleInput(value, "price")}
          />
          <TagInput
            name="item-tag"
            title="태그"
            placeholder="태그를 입력해주세요 (입력 후 Enter)"
            tags={tags}
            setTags={setTags}
          />
        </div>
      </form>
    </main>
  );
};

export default AddItem;
