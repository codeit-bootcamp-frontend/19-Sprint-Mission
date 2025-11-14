"use client";

import Image from "next/image";
import IC_Facebook from "@/components/icons/ic_facebook.svg";
import IC_Twitter from "@/components/icons/ic_twitter.svg";
import IC_Youtube from "@/components/icons/ic_youtube.svg";
import IC_Instagram from "@/components/icons/ic_instagram.svg";

import LinkButton from "@/components/Button/wrappers/LinkButton";
import Link from "next/link";
import LeftOrderedCard from "./components/Card/LeftOrderedCard";
import RightOrderedCard from "./components/Card/RightOrderedCard";

const HomePage = () => {
  return (
    <div>
      <div className="flex items-end justify-center bg-[#CFE5FF] pt-20">
        <div className="flex flex-col items-center gap-[211px] lg:flex-row lg:gap-0">
          <div className="flex w-full flex-col items-center gap-8">
            <div className="flex flex-col items-center text-[40px] font-semibold text-[#374151] md:flex-row lg:flex-col lg:items-start">
              <h1>일상의 모든 물건을</h1>
              <h1>거래해 보세요</h1>
            </div>
            <div className="w-[357px] lg:w-full">
              <LinkButton href="/items" size="full" radius="full">
                구경하러 가기
              </LinkButton>
            </div>
          </div>
          <Image src="/images/Img_home_top.png" alt="" width={746} height={340} />
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-[1200px]">
        <div className="flex flex-col">
          <div className="flex items-center justify-center py-[138px] md:gap-[52px] lg:gap-0">
            <LeftOrderedCard
              tag="Hot item"
              title={`인기 상품을 확인해보세요`}
              explanation={`가장 HOT한 중고거래 물품을\n판다 마켓에서 확인해 보세요.`}
              image="/images/intro-hot-item.png"
            />
          </div>
          <div className="flex items-center justify-center py-[138px]">
            <RightOrderedCard
              tag="Search"
              title={`구매를 원하는 상품을 검색하세요`}
              explanation={`구하고 싶은 물품은 검색해서\n쉽게 찾아보세요`}
              image="/images/intro-search.png"
            />
          </div>
          <div className="flex items-center justify-center py-[138px]">
            <LeftOrderedCard
              tag="Register"
              title={`판매를 원하는\n상품을 등록하세요`}
              explanation={`어떤 물건이든 판매하고 싶은 상품을\n쉽게 등록하세요`}
              image="/images/intro-register.png"
            />
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center bg-[#CFE5FF] pt-[201px] text-[#374151] lg:pt-[143px]">
        <div className="flex flex-col items-center gap-[217px] lg:gap-0">
          <div className="flex flex-col items-center gap-3 md:flex-row lg:flex-col lg:items-start lg:gap-0">
            <span className="text-[40px] font-semibold">믿을 수 있는</span>
            <span className="text-[40px] font-semibold">판다마켓 중고 거래</span>
          </div>
          <Image src="/images/Img_home_bottom.png" alt="" width={746} height={397} />
        </div>
      </div>
      <div className="flex justify-center bg-[#111827] px-6 text-[#E5E7EB]">
        <div className="flex h-40 w-[1120px] justify-between pt-8">
          <span className="text-gray400">©codeit - 2024</span>
          <div className="flex gap-[30px]">
            <span>Privacy Policy</span>
            <span>FAQ</span>
          </div>
          <div className="flex gap-3">
            <LinkButton variant="ghost" size="xs" href="https://www.facebook.com/">
              <IC_Facebook />
            </LinkButton>
            <LinkButton variant="ghost" size="xs" href="https://x.com/">
              <IC_Twitter />
            </LinkButton>
            <LinkButton variant="ghost" size="xs" href="https://www.youtube.com/?themeRefresh=1">
              <IC_Youtube />
            </LinkButton>
            <LinkButton variant="ghost" size="xs" href="https://www.instagram.com/">
              <IC_Instagram />
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
