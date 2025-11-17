"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";

import Button from "@/components/Button/base/Button";
import Input from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";
import TagInput from "./components/TagInput";
import UploadImage from "./components/UploadImage";
import clsx from "clsx";

// === ZOD SCHEMA ===
const schema = z.object({
  itemName: z.string().min(1),
  itemPrice: z.number().min(0),
});

type FormData = z.infer<typeof schema>;

// === STYLES ===
const baseStyle = "flex flex-col gap-4";
const titleStyle = "text-[18px] font-semibold text-gray800";
const required = clsx("after:text-red after:ml-1 after:content-['*']", titleStyle);

const AddItemPage = () => {
  const [itemIntro, setItemIntro] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { itemPrice: 0, itemName: "" },
    mode: "onChange", // 유효성 검사 반영하여 제출 버튼 색 바뀌게 할 수 있음
  });

  const handleTagChange = (newTags: string[]) => {
    setTags(newTags);
  };

  const onSubmit = (data: FormData) => {
    const payload = {
      ...data,
      itemImage,
    };
    console.log(payload);
  };

  return (
    <form
      className="mx-6 mt-6 mb-[69px] flex max-w-300 flex-col justify-center gap-8 lg:mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between">
        <span className={titleStyle}>상품 등록하기</span>
        <Button type="submit" disabled={!(isValid && itemIntro && tags.length > 0)}>
          등록
        </Button>
      </div>
      <div className={baseStyle}>
        <span className="flex gap-1">
          <span className={titleStyle}>상품 이미지</span>
        </span>
        <UploadImage value={itemImage} onChange={() => setItemImage} />
      </div>
      <div className={baseStyle}>
        <span className={required}>상품명</span>
        <Input {...register("itemName")} placeholder="상품명을 입력해주세요" />
      </div>
      <div className={baseStyle}>
        <span className={required}>상품 소개</span>
        <TextArea
          value={itemIntro}
          maxLength={2000}
          height={282}
          placeholder="상품 소개를 입력해주세요"
          onChange={(e) => setItemIntro(e.target.value)}
        />
      </div>
      <div className={baseStyle}>
        <span className={required}>판매가격</span>
        <Input
          type="number"
          {...register("itemPrice", { valueAsNumber: true })}
          value={watch("itemPrice") === 0 ? "" : watch("itemPrice")}
          placeholder="판매 가격을 입력해주세요"
        />
      </div>

      <div className="flex flex-col gap-4">
        <span className={required}>태그</span>
        <TagInput onTagsChange={handleTagChange} />
      </div>
    </form>
  );
};

export default AddItemPage;
