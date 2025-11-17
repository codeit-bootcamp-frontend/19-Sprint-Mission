import { Comment } from "@/types/comment";
import api from "./api";

const END_POINT = "/products/";

interface CommentsResponse {
  nextCursor: number;
  list: Comment[];
}

// ========== GET ==========
export const getCommentsList = async (
  productId: number,
  limit: number,
): Promise<CommentsResponse> => {
  return api.get(`${END_POINT}${productId}/comments`, {
    params: { limit },
  });
};

export const getTargetComment = (productId: number, commentId: number): Promise<Comment> => {
  return api.get(`${END_POINT}${productId}/comments/${commentId}/`);
};

// ========== POST ==========
export const postComment = async (productId: number, content: string): Promise<Comment> => {
  return api.post(`${END_POINT}${productId}/comments`, {
    content,
  });
};
