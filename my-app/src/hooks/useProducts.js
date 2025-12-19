import { useEffect, useState } from "react";
import { getProducts } from "../services/product";

export function useProducts({ page, pageSize, orderBy, keyword }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useProducts effect 실행", {
      page,
      pageSize,
      orderBy,
      keyword,
    });
    if (!pageSize) return; // ⭐ 핵심

    let isMounted = true;

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getProducts({
          page,
          pageSize,
          orderBy,
          keyword,
        });

        if (isMounted) {
          setProducts(data.list);
        }
      } catch (err) {
        if (isMounted) {
          setError("상품 목록을 불러오는데 실패했습니다.");
          console.error(err); // 🔥 꼭 찍자
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, [page, pageSize, orderBy, keyword]);
  return { products, loading, error };
}
