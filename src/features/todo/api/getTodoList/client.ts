import { clientApi } from '@/shared/api/client';

export const getTodoList = async () => {
  const res = await clientApi.get('/items');
  return res.data;
};
