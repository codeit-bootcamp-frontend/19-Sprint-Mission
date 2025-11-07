
import { useProductList } from "@/pages/product/hooks/useProductList";
import { useProductQueryState } from "./useProductQueryState";

const useGeneralProductList = () => {
const {
    searchKeyword,
    setSearchKeyword,
    orderBy,
    currentPage,
    pageSize,
    handleSortChange,
    handlePageChange,
  } = useProductQueryState({pageSize: 10, orderBy: "recent"})

  // 받아온 대로 정렬하기
  const {products, loading, error, total} = useProductList({
    page: currentPage,
    pageSize,
    keyword: searchKeyword,
    orderBy,
  })

  return {
    // 상태/핸들러
    searchKeyword,
    setSearchKeyword, 
    handleSortChange,
    handlePageChange,
    currentPage,
    pageSize,
    // 데이터
    products: products || [],
    totalCount: total || 0,
    loading: loading || false,
    error: error || null,
  };
}

export default useGeneralProductList;
