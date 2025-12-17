import api from "./axios";

export const toggleFavorite = async (productId) => {
  const response = await api.post(`/products/${productId}/favorite`);
  return response.data;
};
