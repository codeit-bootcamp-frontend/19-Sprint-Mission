import { api } from '@/apis/instance';

export const getComments = async ({ productId, limit, cursor }) => {
  const res = await api.get(
    `/products/${productId}/comments?limit=${limit}${cursor ? `&cursor=${cursor}` : ''}`
  );
  return res.data;
};
