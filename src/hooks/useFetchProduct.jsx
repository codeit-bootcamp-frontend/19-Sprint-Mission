import { useEffect, useState } from 'react';
import useResponsiveSize from '@/hooks/useResponsiveSize';

const useFetchProduct = (fetchFn, listOption, params = {}) => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = useResponsiveSize(listOption);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchFn({ pageSize, ...params });
        setProduct(data.list);
        setTotalCount(data.totalCount);
      } catch (error) {
        setError(error);
      }
    };
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize, fetchFn, JSON.stringify(params)]);

  return { product, error, totalCount, pageSize };
};

export default useFetchProduct;
