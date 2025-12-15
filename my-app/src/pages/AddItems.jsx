import Button from "../components/common/Button";
import Input from "../components/Input/SearchInput";
import ProductImageInput from "../components/ProductImageInput";
import Textarea from "../components/Textarea/Textarea";
import TagInput from "../components/Input/TagInuput";
import { useState } from "react";

export default function AddItemPage() {
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null); 

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const isFormValid =
    name.trim() !== "" && description.trim() !== "" && price.trim() !== "";

  return (
    <div className="contaoner mx-auto w-[calc(100%-720px)] px-4 py-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4"> 상품 등록하기</h2>
        <Button Button variant="primary" disabled={!isFormValid}>
          등록
        </Button>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4"> 상품 이미지</h2>
        <ProductImageInput onImageUpload={(file) => setImage(file)} />

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4"> 상품명</h2>
          <Input
            placeholder="상품명을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4"> 상품 소개</h2>
          <Textarea
            variant="secondary"
            size="lg"
            placeholder="상품 소개를 입력해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">판매가격</h2>
          <Input
            placeholder="판매 가격을 입력해주세요"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">태그</h2>
          <TagInput
            placeholder="태그를 입력해주세요"
            tags={tags}
            onChange={setTags}
            tagVariant="default"
          />
        </div>
      </div>
    </div>
  );
}
