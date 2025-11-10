import { useEffect, useState } from 'react';
import useResponsiveSize from '@/hooks/useResponsiveSize';

const useFetchProduct = (fetchFn, listOption, params = {}) => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = useResponsiveSize(listOption);

  const { page, orderBy, keyword } = params;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchFn({ pageSize, page, orderBy, keyword });
        setProduct(data.list);
        setTotalCount(data.totalCount);
      } catch (error) {
        setError(error);
      }
    };
    fetchProduct();
  }, [pageSize, fetchFn, page, orderBy, keyword]);

  return { product, error, totalCount, pageSize };
};

export default useFetchProduct;
