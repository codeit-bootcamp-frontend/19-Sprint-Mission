"use client";

import { useProducts } from "../../hooks/useProducts";
import useResponsive from "@/utils/useResponsive";
import { useProductQuery } from "../../hooks/useProductQuery";

import Button from "@/components/Button/base/Button";
import SortDropdown from "../SortDropdown/SortDropdown";
import ItemList from "../ItemList/ItemList";
import SearchInput from "../SearchInput/SearchInput";
import Pagination from "../Pagination/Pagination";

import LinkButton from "@/components/Button/wrappers/LinkButton";

interface AllProductsProps {
  visibleItemCount: number;
}

const AllProducts = ({ visibleItemCount }: AllProductsProps) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const { page, search, sort, setPage, setSearch } = useProductQuery();

  const { products, totalCount, loading, error } = useProducts({
    page,
    search,
    orderBy: sort,
    pageSize: visibleItemCount,
  });

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러가 발생했습니다: {error.message}</p>;

  return (
    <div>
      <div className="flex w-[344px] flex-col items-center md:w-[714px] lg:w-[1204px]">
        {/*  */}
        {(isTablet || isDesktop) && (
          <div className="mb-4 flex w-full justify-between">
            <h1 className="text-[20px] font-bold">전체 상품</h1>
            <div className="flex gap-3">
              <SearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onSubmit={(e) => console.log(e)}
              />
              <LinkButton href="/additem">상품 등록하기</LinkButton>
              <SortDropdown />
            </div>
          </div>
        )}

        {isMobile && (
          <div className="mb-4 flex w-full flex-col gap-2">
            <div className="flex w-full items-center justify-between">
              <h1 className="text-[20px] font-bold">전체 상품</h1>
              <Button>상품 등록하기</Button>
            </div>
            <div className="flex w-full items-center justify-between">
              <SearchInput
                value={search}
                size="md"
                onChange={(e) => setSearch(e.target.value)}
                onSubmit={(e) => console.log(e)}
              />
              <SortDropdown />
            </div>
          </div>
        )}
        {loading && <span>ㅋㅋ</span>}
        {!loading && <ItemList items={products} isBest={false} />}
      </div>
      <div className="mt-11 flex justify-center">
        <Pagination
          totalCount={totalCount}
          currentPage={page}
          setPage={setPage}
          visibleItemCount={visibleItemCount}
        />
      </div>
    </div>
  );
};

export default AllProducts;
