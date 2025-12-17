import { Link } from "react-router-dom";
import { useState } from "react";
import BestItems from "../components/market/BestItems";
import AllItems from "../components/market/Allitems";
import SortDropdown from "../components/market/SortDropdown";
import Input from "../components/Input/SearchInput";
import SearchIcon from "../assets/ic_search.svg?react";
import Button from "../components/common/Button";
import { useResponsiveLimit } from "../hooks/useResponsiveLimit";
import { useProducts } from "../hooks/useProduct";

const MarketPage = () => {
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const pageSize = useResponsiveLimit();

  const { products, loading, error } = useProducts({
    page,
    pageSize,
    orderBy,
    keyword,
  });

  const { products: bestProducts } = useProducts({
    page: 1,
    pageSize: 4,
    orderBy: "favorite",
  });

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

  return (
    <div className="container mx-auto px-4 py-8">
      {/*  베스트 상품 */}
      <h2 className="text-2xl font-bold mb-4">베스트 상품</h2>
      <BestItems bestProducts={bestProducts} />

      {/*  전체 상품 헤더 */}
      <div className="flex flex-col gap-4 my-6">
        {/*  모바일 */}
        <div className="flex justify-between items-center sm:hidden">
          <h2 className="text-2xl font-bold">전체 상품</h2>
          <Button as={Link} to="/additem">
            상품등록하기
          </Button>
        </div>

        <div className="flex sm:hidden gap-2 w-full justify-between">
          <Input
            placeholder="상품명을 입력하세요"
            icon={<SearchIcon />}
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              setPage(1);
            }}
            className="w-[288px] shrink-0"
          />
          <SortDropdown currentSort={orderBy} setSortType={setOrderBy} />
        </div>

        {/*  데스크탑 */}
        <div className="hidden sm:flex justify-between items-center">
          <h2 className="text-2xl font-bold">전체 상품</h2>

          <div className="flex items-center gap-2">
            <Input
              placeholder="상품명을 입력하세요"
              icon={<SearchIcon />}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-[288px] sm:w-[242px] lg:w-[300px]"
            />

            <Button as={Link} to="/additem">
              상품등록하기
            </Button>

            <SortDropdown currentSort={orderBy} setSortType={setOrderBy} />
          </div>
        </div>
      </div>

      <AllItems allProducts={products} />
    </div>
  );
};

export default MarketPage;
