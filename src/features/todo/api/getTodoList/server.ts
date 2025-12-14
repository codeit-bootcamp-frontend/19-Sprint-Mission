import { serverApi } from '@/shared/api/server';

export const getTodoListServer = async () => {
  const res = await serverApi.get('/items');
  return res.data;
};
