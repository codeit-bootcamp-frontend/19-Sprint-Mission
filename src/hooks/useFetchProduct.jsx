import { useEffect, useState } from 'react';
import useResponsiveSize from '@/hooks/useResponsiveSize';

const useFetchProduct = (fetchFn, listOption, params = {}) => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = useResponsiveSize(listOption);

  useEffect(() => {
    const { page, orderBy, keyword } = params;
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
  }, [pageSize, fetchFn, params]);

  return { product, error, totalCount, pageSize };
};

export default useFetchProduct;
