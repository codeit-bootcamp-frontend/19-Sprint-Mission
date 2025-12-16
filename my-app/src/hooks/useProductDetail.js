import { useEffect, useState } from "react";
import { getProductDetail } from "../services/product";
import { getQuestions } from "../services/Question";

export const useProductDetail = (productId) => {
  const [product, setProduct] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const productData = await getProductDetail(productId);
        setProduct(productData);

        const questionData = await getQuestions({
          productId,
          limit: 10,
        });

        setQuestions(questionData.list);
        setNextCursor(questionData.nextCursor);
      } catch (e) {
        setError("상품 정보를 불러오지 못했습니다.",e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  return {
    product,
    questions,
    setQuestions,
    nextCursor,
    loading,
    error,
  };
};
