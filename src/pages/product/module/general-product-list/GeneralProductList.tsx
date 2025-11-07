import ProductList from "@/pages/product/components/ProductList";
import Filter from "@/pages/product/module/filter/Filter";
import useGeneralProductList from "@/pages/product/module/general-product-list/useGeneralProductList";
import Pagination from "@/pages/product/module/pagination/Pagination";

const GeneralProductList = () => {
  const {
    setSearchKeyword,
    handleSortChange,
    products = [],
    currentPage,
    totalCount = 0,
    loading,
    error,
    handlePageChange,
  } = useGeneralProductList();

  const PAGE_SIZE = 10;
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  if (error) return <div>에러가 발생했습니다: {error.message}</div>;
  if (loading) return <div>로딩 중...</div>;
  if (products.length === 0) return <div>상품이 없습니다.</div>;

  return (
    <>
      <Filter
        onSearchChange={setSearchKeyword}
        onSortChange={handleSortChange}
      />
      <ProductList
        products={products}
        // 이미지 개수
        columns={5} //데스크톱
        columnsTablet={3} //태블릿
        columnsMobile={2} //모바일
        // 이미지 높이
        variant="default"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default GeneralProductList;
