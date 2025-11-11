import { useMemo } from 'react';
import { getProduct } from '@/apis/products';
import useDataFetch from './useDataFetch';

const useFetchProduct = (productId) => {
  const params = useMemo(() => ({ productId }), [productId]);

  const { data, error, loading, setData } = useDataFetch(getProduct, params);

  return {
    product: data || null,
    error,
    loading,
    setProduct: setData,
  };
};

export default useFetchProduct;
