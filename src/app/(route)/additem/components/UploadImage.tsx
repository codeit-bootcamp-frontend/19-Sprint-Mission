"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Button from "@/components/Button/base/Button";
import IC_Plus from "@/components/icons/ic_plus.svg";
import IC_X from "@/components/icons/ic_X.svg";

const UploadImage = () => {
  const [itemImage, setItemImage] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setItemImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteImage = () => {
    setItemImage("");
  };

  return (
    <div className="flex gap-3">
      <button
        type="button"
        className="flex h-42 w-42 flex-col items-center justify-center gap-3 rounded-xl bg-[#F3F4F6] transition-colors hover:cursor-pointer hover:bg-gray-200 lg:h-[282px] lg:w-[282px]"
        onClick={handleClickUpload}
      >
        <IC_Plus className="h-12 w-12" />
        <span className="text-gray400">이미지 등록</span>
      </button>
      {itemImage && (
        <div className="relative">
          <Button
            className="absolute top-3 -right-3 z-10 hover:scale-[1.04]"
            variant="ghost"
            onClick={handleDeleteImage}
          >
            <IC_X className="h-10 w-10" />
          </Button>
          <div className="relative h-42 w-42 overflow-hidden rounded-xl lg:h-[282px] lg:w-[282px]">
            <Image src={itemImage} alt="등록된 이미지" fill className="object-cover" />
          </div>
        </div>
      )}
      {/* 숨겨진 파일 인풋 */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
};

export default UploadImage;
