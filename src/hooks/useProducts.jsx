import { getProducts } from "@/api/productApi";
import { useEffect, useMemo, useState } from "react";
import useWindowSize from "./useWindowSize";

export default function useProducts({ type, orderBy, page }) {
  const device = useWindowSize(); //해상도
  const [prodList, setProdList] = useState([]); //목록
  const [totalCount, setTotalCount] = useState(0);

  const pageSize = useMemo(() => {
    if (!device) return null;
    if (type === "best") {
      if (device === "mobile") {
        return 1;
      } else if (device === "tablet") {
        return 2;
      } else {
        return 4;
      }
    } else {
      if (device === "mobile") {
        return 4;
      } else if (device === "tablet") {
        return 6;
      } else {
        return 10;
      }
    }
  }, [device]);

  useEffect(() => {
    if (!pageSize) return;

    const getProductsList = async () => {
      try {
        let data;
        if (type === "best") {
          data = await getProducts({
            orderBy: orderBy,
            pageSize: pageSize,
          });
        } else {
          data = await getProducts({
            orderBy: orderBy,
            pageSize: pageSize,
            page: page,
          });
        }

        setProdList(data.list);
        setTotalCount(data.totalCount);
      } catch (error) {
        console.error("상품 불러오기 실패", error);
      }
    };
    getProductsList();
  }, [orderBy, page, pageSize]);

  return {
    prodList,
    totalCount,
    pageSize,
  };
}
