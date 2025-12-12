
import api from "./axios";

export const getProducts = async (params ={}) => {
  
  const response = await api.get(`/products`, { params });
  const productsData = response.data;
  console.log(productsData)
  return productsData; // 서버에서 전체 상품 목록(배열)을 반환한다고 가정
};
