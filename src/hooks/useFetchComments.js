import { useEffect, useMemo, useState } from 'react';
import { getComments } from '@/apis/comments';
import useDataFetch from '@/hooks/useDataFetch';

const useFetchComments = ({ productId, limit = 3 }) => {
  const [comments, setComments] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [isEnd, setIsEnd] = useState(false);

  const params = useMemo(
    () => ({ productId, limit, cursor: null }),
    [productId, limit]
  );

  const { data, loading, error } = useDataFetch(getComments, params);

  useEffect(() => {
    if (data) {
      setComments(data.list);
      setNextCursor(data.nextCursor ?? null);
      setIsEnd(!data.nextCursor);
    }
  }, [data]);

  const fetchMore = async () => {
    if (loading || isEnd) {
      return;
    }

    const res = await getComments({ productId, limit, cursor: nextCursor });
    setComments((prev) => [...prev, ...res.list]);

    if (res.nextCursor) {
      setNextCursor(res.nextCursor);
    } else {
      setIsEnd(true);
    }
  };

  return { comments, fetchMore, loading, isEnd, error };
};

export default useFetchComments;
