import { Product } from "@/types/product";

import BackButton from "./components/BackButton";
import Divider from "@/components/Divider/Divider";

import EditPopover from "@/components/Popover/Wrappers/EditPopover";
import UserInfo from "./components/UserInfo";
import CommentSection from "./components/CommentSection";

import Image from "next/image";

interface ItemDetailPageProps {
  product: Product;
}

export default function ItemDetailPage({ product }: ItemDetailPageProps) {
  const formattedPrice = product.price.toLocaleString();

  return (
    <div className="mt-6 mb-[222px] flex flex-col items-center gap-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="relative h-[343px] w-[343px] overflow-hidden rounded-xl md:h-[340px] md:w-[340px] lg:h-[486px] lg:w-[486px]">
            <Image src={product.images[0]} alt="등록된 이미지" fill className="object-cover" />
          </div>
          <div className="flex w-[343px] flex-col gap-10 md:w-[340px] lg:w-[690px]">
            <div className="flex flex-col gap-6">
              {/* 설명 제목 */}
              <div>
                <div className="flex justify-between pb-4">
                  <div className="gap-4">
                    <h1 className="text-2xl font-semibold">{product.name}</h1>
                    <span className="text-[40px] font-semibold">{formattedPrice}원</span>
                  </div>
                  <EditPopover />
                </div>
                <Divider />
              </div>
              {/* 상품 소개 */}
              <div className="flex flex-col gap-4">
                <h2 className="text-gray600 font-semibold">상품 소개</h2>
                <span className="text-gray600">{product.description}</span>
              </div>
              {/* 상품 태그 */}
              <div className="flex flex-col gap-4">
                <span className="text-gray600 font-semibold">상품 태그</span>
                <div className="flex gap-2">
                  {product.tags.map((tag) => (
                    <div
                      key={tag}
                      className="bg-gray100 text-gray800 rounded-full px-4 py-[6px]"
                    >{`#${tag}`}</div>
                  ))}
                </div>
              </div>
            </div>
            {/* 작성자 정보 */}

            <UserInfo
              profileImage={""}
              ownerNickname={product.ownerNickname}
              createdAt={product.createdAt}
              favoriteCount={product.favoriteCount}
            />
          </div>
        </div>
        <Divider />
      </div>

      <div className="flex w-[344px] flex-col gap-2 md:w-[696px] lg:w-300">
        <span className="text-gray900 font-semibold">문의하기</span>
        <CommentSection />
      </div>
      <BackButton />
    </div>
  );
}
