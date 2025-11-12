import api from "./axios";

export const getProducts = async (params) => {
  try {
    const response = await api.get(`products/`, { params });
    const productsData = response.data;

    return productsData;
  } catch (err) {
    console.error(err);
    return [];
  }
};
