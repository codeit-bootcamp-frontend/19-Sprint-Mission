import { api } from '@/apis/instance';

export const getBestProducts = async ({ pageSize }) => {
  const res = await api.get(
    `/products?page=1&pageSize=${pageSize}&orderBy=favorite`
  );
  return res.data;
};

export const getProducts = async ({ page, pageSize, orderBy = 'recent' }) => {
  const res = await api.get(
    `/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
  );
  return res.data;
};
