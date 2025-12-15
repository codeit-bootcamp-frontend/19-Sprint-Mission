import axios from "axios";
import api from "./api";

interface getCommentsProps {
  id: number;
  limit: number;
}

export const getComments = async ({ id, limit = 100 }: getCommentsProps) => {
  try {
    const res = await api.get(`/products/${id}/comments`, {
      params: { limit },
    });
    return res.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const errorMessage = e.response?.data?.message || "요청 실패";
      throw new Error(errorMessage);
    }
  }
};
