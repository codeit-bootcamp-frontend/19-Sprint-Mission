import { useEffect, useState } from "react";
import getProduct from "@/api/ProdApi";
import useWindowSize from "@/hooks/useWindowSize";
import Items from "@/pages/List/Items";

export default function TotalItems() {
  const [bestProdList, setBestProdList] = useState([]);
  const device = useWindowSize();

  const bestProductLoad = async (orderQuery) => {
    const bestProduct = await getProduct(orderQuery);
    setBestProdList(bestProduct.list);
  };
  useEffect(() => {
    if (!device) return;

    let ITEM_COUNT;
    if (device === "mobile") {
      ITEM_COUNT = 1;
    } else if (device === "tablet") {
      ITEM_COUNT = 2;
    } else {
      ITEM_COUNT = 4;
    }

    bestProductLoad({ order: "favorite", pageSize: ITEM_COUNT });
  }, [device]);
  return (
    <section>
      <h1 className="secTit">베스트 상품</h1>
      <Items prodList={bestProdList} type="best" />
    </section>
  );
}
