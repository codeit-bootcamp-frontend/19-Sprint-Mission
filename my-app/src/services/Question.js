import api from "./axios"

export const createQuestion = async (productId, content) => {
  const response = await api.post(
    `/products/${productId}/comments`,
    { content }
  );
  return response.data;
};

export const getQuestions = async ({
  productId,
  limit,
  cursor,
}) => {
  const response = await api.get(
    `/products/${productId}/comments`,
    {
      params: {
        limit,
        cursor,
      },
    }
  );

  return response.data; 
};