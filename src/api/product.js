import api from "./axios";

export const getProducts = async (parmas) => {
  try {
    const response = await api.get(`/product`, parmas);
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
