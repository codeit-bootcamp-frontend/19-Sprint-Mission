import "./AddItem.scss";
import Input from "@/components/common/Input";
import ImageForm from "../components/common/ImageForm";
import Button from "../components/common/Button";
import Textarea from "@/components/common/Textarea";
import TagInput from "@/components/common/TagInput";
import { useState } from "react";

const AddItem = () => {
  const [tags, setTags] = useState([]);
  return (
    <main className="AddItem">
      <form className="form-container">
        <div className="item-submit-container">
          <span className="title-text item-submit-text">상품 등록하기</span>
          <Button className="item-submit-btn" disabled={true}>
            등록
          </Button>
        </div>
        <div className="form-input-container">
          <ImageForm title="상품 이미지" />
          <Input
            name="item-name"
            title="상품명"
            placeholder="상품명을 입력해주세요"
          />
          <Textarea
            name="item-introduction"
            title="상품 소개"
            placeholder="상품소개를 입력해주세요"
          />
          <Input
            name="item-price"
            type="number"
            title="판매가격"
            placeholder="상품명을 입력해주세요"
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
