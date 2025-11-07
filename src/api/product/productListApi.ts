import axiosApi from "../axios"
import type { OrderBy, ProductListResponse, Product } from "@/type/product";

export interface GetProductsParams {
  page?: number;
  pageSize?: number;
  orderBy?: OrderBy;
  keyword?: string;
}

// 서버 응답 스키마
interface ServerProductList { list: Product[]; totalCount: number };

const getProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}: GetProductsParams): Promise<ProductListResponse> => {
    const { data }  = await axiosApi.get<ServerProductList>("/products", {
    params: {page, pageSize, orderBy, ...(keyword && {keyword})}
  })
   return data; 
};

export default getProducts;



