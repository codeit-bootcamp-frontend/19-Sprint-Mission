"use client";

import { useState } from "react";

import Button from "@/components/Button/base/Button";
import Input from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";
import TagInput from "./components/TagInput";
import UploadImage from "./components/UploadImage";
import clsx from "clsx";

const AddItemPage = () => {
  const [itemName, setItemName] = useState("");
  const [itemIntro, setItemIntro] = useState("");
  const [itemPrice, setItemPrice] = useState<number | string>("");
  const [hasTags, setHasTags] = useState(false);

  const baseStyle = "flex flex-col gap-4";
  const titleStyle = "text-[18px] font-semibold text-gray800";
  const required = clsx("after:text-red after:ml-1 after:content-['*']", titleStyle);

  const isFormValid =
    itemName.trim() !== "" &&
    itemIntro.trim() !== "" &&
    itemPrice.toString().trim() !== "" &&
    hasTags;

  const handleRegister = () => {
    if (!isFormValid) return;
    console.log("상품 등록 완료");
  };

  return (
    <div className="mx-6 mt-6 mb-[69px] flex max-w-300 flex-col justify-center gap-8 lg:mx-auto">
      <div className="flex justify-between">
        <span className={titleStyle}>상품 등록하기</span>
        <Button onClick={handleRegister} disabled={!isFormValid}>
          등록
        </Button>
      </div>
      <div className={baseStyle}>
        <span className="flex gap-1">
          <span className={titleStyle}>상품 이미지</span>
        </span>
        <UploadImage />
      </div>
      <div className={baseStyle}>
        <span className={required}>상품명</span>
        <Input
          value={itemName}
          placeholder="상품명을 입력해주세요"
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>
      <div className={baseStyle}>
        <span className={required}>상품 소개</span>
        <TextArea
          value={itemIntro}
          placeholder="상품 소개를 입력해주세요"
          maxLength={2000}
          height={282}
          onChange={(e) => setItemIntro(e.target.value)}
        />
      </div>
      <div className={baseStyle}>
        <span className={required}>판매가격</span>
        <Input
          type="number"
          value={itemPrice}
          placeholder="판매 가격을 입력해주세요"
          onChange={(e) => setItemPrice(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-4">
        <span className={required}>태그</span>
        <TagInput onTagsChange={(tags) => setHasTags(tags.length > 0)} />
      </div>
    </div>
  );
};

export default AddItemPage;
