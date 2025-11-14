import { useEffect, useState } from "react";
import getProduct from "@/api/productApi";
import Items from "@/pages/List/Items";
import ItemUtil from "@/pages/List/ItemUtil";
import Pagination from "@/components/Pagination";
import useWindowSize from "@/hooks/useWindowSize";

let ITEM_COUNT;
export default function TotalItems() {
  const device = useWindowSize();
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [order, setOrder] = useState("recent");
  const [prodList, setProdList] = useState([]);
  const productLoad = async (orderQuery) => {
    const product = await getProduct(orderQuery);
    setTotalCount(product.totalCount);
    setProdList(product.list);
  };
  useEffect(() => {
    if (!device) return;

    if (device === "mobile") {
      ITEM_COUNT = 4;
    } else if (device === "tablet") {
      ITEM_COUNT = 6;
    } else {
      ITEM_COUNT = 10;
    }
    productLoad({ orderBy: order, pageSize: ITEM_COUNT, page: currentPage });
  }, [order, currentPage, device]);

  return (
    <section>
      <div className="secTitWrap">
        <h1 className="secTit">전체 상품</h1>
        <ItemUtil setOrder={setOrder} setCurrentPage={setCurrentPage} />
      </div>
      <Items prodList={prodList} type="all" />
      <Pagination
        total={totalCount}
        limit={ITEM_COUNT}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}
