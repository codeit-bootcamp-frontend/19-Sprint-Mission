import ProductList from "@/pages/product/components/ProductList";
import { useProductList } from "@/pages/product/hooks/useProductList";

const BestProductList = () => {
  const { products, loading, error } = useProductList({
    page: 1,
    pageSize: 4,
    orderBy: "favorite",
  });

  //데이터가 없을 수도 있다는 가정은 ProductList 의 상위 계층인 BestProductList에서 하고 아래에선 옵셔널을 쓰지말자
  if (error) return <div>에러가 발생했습니다: {error.message}</div>;
  if (loading) return <div>로딩 중...</div>;
  if (products.length === 0) return <div>상품이 없습니다.</div>;

  return (
    <ProductList
      products={products ?? []}
      // 이미지 개수
      columns={4} // 데스크톱
      columnsTablet={2} // 태블릿
      columnsMobile={1} // 모바일
      // 이미지 높이
      variant="best"
    />
  );
};

export default BestProductList;
