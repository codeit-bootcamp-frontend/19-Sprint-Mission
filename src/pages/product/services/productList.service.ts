import getProducts from "@/api/product/productListApi";
import type { OrderBy } from "@/type/product";

export type ProductListParams = {
  page?: number;
  pageSize?: number;
  orderBy?: OrderBy;
  keyword?: string;
};

export const fetchProductList = ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}: ProductListParams = {}) => {
  return getProducts({ page, pageSize, orderBy, keyword });
};