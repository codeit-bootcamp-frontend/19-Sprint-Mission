import { useEffect, useState } from "react";
import type { Product } from "@/type/product";
import { fetchProductList, type ProductListParams } from "../services/productList.service";

export const useProductList = (params:ProductListParams = {}) => {
  const { page = 1, pageSize = 10, orderBy = "recent", keyword = "" } = params;
  const [total, setTotal] = useState(0)
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const { list, totalCount } = await fetchProductList({ page, pageSize, orderBy, keyword });
        setProducts(list);
        setTotal(totalCount);
      } catch (e) {
        // 인터셉터가 Error로 던지므로 그대로 저장
        setError(e as Error);
        setProducts([])
        setTotal(0);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [page, pageSize, orderBy, keyword]);

  return { products, total, loading, error };
}
