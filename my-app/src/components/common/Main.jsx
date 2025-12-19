import Button from "./Button";
import Home from "../../assets/home_top.svg?react";
import ItemImage from "../../assets/home_01.svg?react";
import SearchImage from "../../assets/home_02.svg?react";
import RegisterImage from "../../assets/home_03.svg?react";
import HomeBottom from "../../assets/home_bottom.svg?react";
import { Link } from "react-router-dom";
import Fb from "../../assets/Icons/ic_fb.svg?react";
import Twitter from "../../assets/Icons/ic_twitter.svg?react";
import Youtube from "../../assets/Icons/ic_youtube.svg?react";
import IG from "../../assets/Icons/ic_ig.svg?react";

const Main = () => {
  return (
    <main>
      <section className="bg-primary-100/30 pt-24">
        <div className="mx-auto flex max-w-[1110px] items-center gap-12 px-4 sm:px-6 lg:px-8">
          {/* Text */}
          <div className="flex max-w-[357px] shrink-0 flex-col gap-4">
            <h1 className="text-3xl font-bold leading-tight whitespace-pre-line">
              {`일상의 모든 물건을
               거래해 보세요`}
            </h1>
            <Link to="/items">
              <Button className="w-full rounded-3xl">구경하러 가기</Button>
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1">
            <Home className="w-full max-w-[520px] h-auto" />
          </div>
        </div>
      </section>
      <div>
        <section className=" py-33.5">
          <div className="mx-auto flex max-w-[1110px] items-center gap-12 px-4 sm:px-6 lg:px-8">
            <ItemImage />
            <div className="flex max-w-[357px] shrink-0 flex-col gap-4 my-24  mr-5.5">
              <label className="text-primary-200">Hot items</label>
              <h1 className="text-3xl font-bold leading-tight whitespace-pre-line">
                {`인기 상품을 
                 확인해보세요`}
              </h1>
              <p className="font-bold whitespace-pre-line">
                {`가장 HOT한 중고거래 물품을 
                 판다마켓에서 확인해보세요`}
              </p>
            </div>
          </div>
        </section>

        <section className="py-33.5">
          <div className="mx-auto flex max-w-[1110px] flex-row-reverse items-center gap-12 px-4">
            <SearchImage />

            <div className="flex max-w-[357px] flex-col gap-4 items-end text-right">
              <label className="text-primary-200">Search</label>
              <h1 className="text-3xl font-bold whitespace-pre-line">
                {` 구매를 원하는
                 상품을 검색하세요`}
              </h1>
              <p className="font-bold whitespace-pre-line">
                {`구매하고 싶은 물품은 검색해서
                 쉽게 찾아 보세요`}
              </p>
            </div>
          </div>
        </section>

        <section className=" py-33.5">
          <div className="mx-auto flex max-w-[1110px] items-center gap-12 px-4 sm:px-6 lg:px-8">
            <RegisterImage />
            <div className="flex max-w-[357px] shrink-0 flex-col gap-4 my-24  mr-5.5">
              <label className="text-primary-200">Register</label>
              <h1 className="text-3xl font-bold leading-tight whitespace-pre-line">
                {`판매를 원하는
                 상품을 등록하세요`}
              </h1>
              <p className="font-bold whitespace-pre-line">
                {`어떤 물건이든 판매하고 싶은 상품을
                 쉽게 등록하세요`}
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="flex bg-primary-100/30 pt-24">
        <div className="mx-auto flex max-w-[1110px] items-center gap-12 px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-[357px] shrink-0 flex-col gap-4 items-center">
            <span className="text-3xl font-bold leading-tight whitespace-pre-line">
              {`믿을 수 있는
            판다마켓 중고 거래`}
            </span>
          </div>
          <div>
            <HomeBottom />
          </div>
        </div>
      </section>
      <footer className="h-40 bg-gray-900 flex">
        <div className="mx-auto flex w-full max-w-[1110px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <span className="text-gray-200">@codeit-2024</span>
          <Link className="text-gray-200">Privacy Policy</Link>
          <Link className="text-gray-200">FAQ</Link>
          <div className="flex gap-3">
            <Fb />
            <Twitter />
            <Youtube />
            <IG />
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Main;
