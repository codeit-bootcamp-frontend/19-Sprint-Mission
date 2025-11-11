import { useMemo } from 'react';
import useDataFetch from '@/hooks/useDataFetch';
import useResponsiveSize from '@/hooks/useResponsiveSize';

const useFetchProducList = (fetchFn, listOption, params = {}) => {
  const pageSize = useResponsiveSize(listOption);
  const { page, orderBy, keyword } = params;

  const fetchParams = useMemo(
    () => ({ pageSize, page, orderBy, keyword }),
    [pageSize, page, orderBy, keyword]
  );

  const { data, error, loading } = useDataFetch(fetchFn, fetchParams);

  return {
    product: data?.list || [],
    totalCount: data?.totalCount || 0,
    error,
    loading,
    pageSize,
  };
};

export default useFetchProducList;
