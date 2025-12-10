import api from "./api";

export const postProducts = async (columnsData) => {
  /* columnsData : {
    images : [],
    tags : [],
    price : number,
    description : string,
    name : string,
  }*/
  try {
    const res = await api.get("/products", columnsData);
    return res.data;
  } catch (e) {
    return e.response?.data || { error: "Failed to create column" };
  }
};

export const getProducts = async ({ orderBy, pageSize, page }) => {
  try {
    const res = await api.get("/products", {
      params: { orderBy, pageSize, page },
    });
    return res.data;
  } catch (error) {
    throw new Error(`${error} 페이지 로드에 실패했습니다. `);
  }
};
