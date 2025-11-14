import api from "./api";

const getProduct = async ({ orderBy = "recent", pageSize, page }) => {
  try {
    const res = await api.get("/products", {
      params: { orderBy, pageSize, page },
    });
    return res.data;
  } catch (error) {
    throw new Error(`${error} 페이지 로드에 실패했습니다.  `);
  }
};

export default getProduct;
