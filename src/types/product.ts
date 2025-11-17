export interface Product {
  id: number;
  name: string;
  price: number;
  favoriteCount: number;
  images: string[];
  description: string;
  tags: string[];
  ownerNickname: string;
  ownerId: number;
  createdAt: string;
  isFavorite: boolean;
}
