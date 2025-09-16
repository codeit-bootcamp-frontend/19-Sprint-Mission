import { api } from '@/apis/instance';

export const getBestProducts = async () => {
  const res = await api.get('/products?page=1&pageSize=4&orderBy=favorite');
  return res.data;
};
