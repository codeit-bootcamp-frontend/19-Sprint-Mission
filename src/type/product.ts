export interface Product {
  id: number;
  name: string;
  price: number;   
  images: string[]; 
  favoriteCount: number;
}

export type OrderBy = "recent" | "favorite"

//서버 응답 스키마
export interface ProductListResponse {
  list: Product[];
  totalCount: number;
}