import api from "./axios";

export const getProducts = async () => {
  try {
    const response = await api.get(`/product`);
    const productsData = response.data;
    if (!response.ok) {
      throw new Error("에러발생");
    }
    return productsData;
  } catch (err) {
    console.error(err);
    return [];
  }
};
