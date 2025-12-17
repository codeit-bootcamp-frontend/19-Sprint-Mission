import Button from "../components/common/Button";
import Input from "../components/Input/SearchInput";
import ProductImageInput from "../components/ProductImageInput";
import Textarea from "../components/Textarea/Textarea";
import TagInput from "../components/Input/TagInuput";
import { useEffect, useState } from "react";

export default function AddItemPage() {
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    return () => {
      setImages((prev) => {
        prev.forEach((image) => {
          URL.revokeObjectURL(image.preview);
        });
        return prev;
      });
    };
  }, []);

  const isFormValid =
    name.trim() !== "" && description.trim() !== "" && price.trim() !== "";

  return (
    <div className="container mx-auto w-full max-w-[1200px] px-4 py-8">
      <div className="flex justify-between items-center">
        <label className="text-2xl font-bold mb-4"> 상품 등록하기</label>
        <Button Button variant="primary" disabled={!isFormValid}>
          등록
        </Button>
      </div>

      <div className="mt-6">
        <label className="text-2xl font-bold mb-4"> 상품 이미지</label>
        <div className="flex gap-4 flex-wrap items-start w-full">
          <ProductImageInput
            onImageUpload={(files) =>
              setImages((prev) => [
                ...prev,
                ...files.map((file) => ({
                  file,
                  preview: URL.createObjectURL(file),
                })),
              ])
            }
          />
          <div className="flex gap-4  flex-wrap">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-42 h-42  lg:w-72 lg:h-72 border rounded"
              >
                <img
                  src={image.preview}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => {
                    URL.revokeObjectURL(images[index].preview);
                    setImages((prev) => prev.filter((_, i) => i !== index));
                  }}
                  className="absolute top-1 right-1 w-6 h-6 bg-gray-100/40 text-white rounded-full hover:cursor-pointer"
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <label className="text-2xl font-bold mb-4"> 상품명</label>
          <Input
            placeholder="상품명을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-8">
          <label className="text-2xl font-bold mb-4"> 상품 소개</label>
          <Textarea
            variant="secondary"
            size="lg"
            placeholder="상품 소개를 입력해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mt-8">
          <label className="text-2xl font-bold mb-4">판매가격</label>
          <Input
            placeholder="판매 가격을 입력해주세요"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mt-8">
          <label className="text-2xl font-bold mb-4">태그</label>
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
