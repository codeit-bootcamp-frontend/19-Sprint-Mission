// services/api.ts
import axios from 'axios';

const BASE_URL = 'https://panda-market-api.vercel.app/docs/#/'; 

export const getProducts = async (sortType: 'latest' | 'likes' = 'latest') => {
  // 실제 백엔드 API에 맞게 쿼리 파라미터 등을 조정해야 합니다.
  const response = await axios.get(`${BASE_URL}/products`, {
    params: {
      sort: sortType,
      // 페이지네이션을 위한 limit, offset 등은 클라이언트 단에서 처리할 수도 있습니다.
    }
  });
  return response.data; // 전체 상품 목록
};