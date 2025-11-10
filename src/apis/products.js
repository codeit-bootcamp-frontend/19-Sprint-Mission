import { api } from '@/apis/instance';

export const getBestProductList = async ({ pageSize }) => {
  const res = await api.get(
    `/products?page=1&pageSize=${pageSize}&orderBy=favorite`
  );
  return res.data;
};

export const getProductList = async ({
  page,
  pageSize,
  orderBy = 'recent',
  keyword,
}) => {
  const query = `/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${
    keyword ? `&keyword=${keyword}` : ''
  }`;

  const res = await api.get(query);
  return res.data;
};

export const getProduct = async ({ prodctId }) => {
  const res = await api.get(`/prodcuts/${prodctId}`);
  return res.data;
};
