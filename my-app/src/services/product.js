import api from "./axios";

export const getProducts = async (params = {}) => {
  const response = await api.get(`/products`, { params });
  const productsData = response.data;
  console.log(productsData);
  return productsData; // 서버에서 전체 상품 목록(배열)을 반환한다고 가정
};

export const getProductDetail = async (productId) => {
  if (!productId) {
    throw new Error("Id가 필요합니다");
  }

  const response = await api.get(`/products/${productId}`);
  return response.data;
};
