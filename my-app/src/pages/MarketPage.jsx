// src/pages/MarketPage.jsx

import React, { useState, useEffect } from "react";
import { getProducts } from "../services/product";
import BestItems from "../components/market/BestItems";
import AllItems from "../components/market/Allitems";
import SortDropdown from "../components/market/SortDropdown";
import Input from "../components/common/Input";
import SearchIcon from "../assets/ic_search.svg?react";
import Button from "../components/common/Button";

const MarketPage = () => {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("latest");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getProducts({ sort: sortType });
        setProducts(data.list);
      } catch (err) {
        console.error("Failed to load product in UI", err);
        setError("상품 목록을 불러오는데 실패했습니다 잠시후 다시 시도해주세요");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [sortType]);

  if (loading) {
    return <div className="text-center py-10">상품 정보를 불러오는 중...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p>{error}</p>
      </div>
    );
  }

  const bestProducts = products.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 📌 베스트 상품 섹션 */}
      <h2 className="text-2xl font-bold mb-4">베스트 상품</h2>
      <BestItems bestProducts={bestProducts} />

      {/* 📌 전체 상품 헤더 + 검색/버튼/정렬 */}
      <div className="flex flex-col gap-4 my-6">
        
        {/* ---------------------- */}
        {/* 📱 모바일 전용 레이아웃 */}
        {/* ---------------------- */}
        <div className="flex justify-between items-center sm:hidden">
          <h2 className="text-2xl font-bold">전체 상품</h2>
          <Button to="/additem">상품등록하기</Button>
        </div>

        <div className="flex sm:hidden gap-2 w-full justify-between">
          <Input
            placeholder="상품명을 입력하세요"
            icon={<SearchIcon />}
            className="w-[288px] shrink-0"
          />
          <SortDropdown
            currentSort={sortType}
            setSortType={setSortType}
          />
        </div>

        {/* ----------------------------- */}
        {/* 🖥️ 데스크탑 + 📲 태블릿 레이아웃 */}
        {/* ----------------------------- */}
        <div className="hidden sm:flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-0">전체 상품</h2>

          <div className="flex items-center gap-2">
            <Input
              placeholder="상품명을 입력하세요"
              icon={<SearchIcon />}
              className="
                w-[288px]     /* mobile default */
                sm:w-[242px]  /* tablet */
                lg:w-[300px]  /* desktop */
              "
            />

            <Button to="/additem">상품등록하기</Button>

            <SortDropdown
              currentSort={sortType}
              setSortType={setSortType}
            />
          </div>
        </div>
      </div>

      {/* 전체 상품 리스트 */}
      <AllItems allProducts={products} />
    </div>
  );
};

export default MarketPage;
