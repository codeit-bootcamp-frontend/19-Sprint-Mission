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
    const errorMessage = e.response?.data?.message;
    throw new Error(errorMessage);
  }
};

export const getProducts = async ({ orderBy, pageSize, page }) => {
  try {
    const res = await api.get("/products", {
      params: { orderBy, pageSize, page },
    });
    return res.data;
  } catch (e) {
    const errorMessage = e.response?.data?.message;
    throw new Error(errorMessage);
  }
};

export const getProductId = async ({ params }) => {
  // console.log("params:", params);
  // console.log("productId:", params.productId);
  /*
    productId : number
  */
  try {
    const res = await api.get(`/products/${params.productId}`);
    return res.data;
  } catch (e) {
    const errorMessage = e.response?.data?.message;
    throw new Error(errorMessage);
  }
};
