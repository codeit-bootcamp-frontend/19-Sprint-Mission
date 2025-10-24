'use client';

import { getProductsList } from '@/apis/products';
import { useState, useEffect } from 'react';
import { Product } from '@/types/product';

interface ProductsState {
  favorite: Product[];
  recent: Product[];
}

export const useProducts = () => {
  const [products, setProducts] = useState<ProductsState>({favorite: [], recent: []});
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const fetchProducts = async () => {
      try {
        const [favoriteRes, recentRes] = await Promise.all([
          getProductsList({orderBy: 'favorite'}),
          getProductsList({orderBy: 'recent'}),
        ]);

        
        const mapToProduct = (list: any[]): Product[] =>
          list.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            favoriteCount: item.favoriteCount,
            imageUrl: item.images?.[0],
          }));
          
          setProducts({
            favorite: mapToProduct(favoriteRes.list ?? []),
            recent: mapToProduct(recentRes.list ?? []),
          });
      } catch (err){
        if(err instanceof Error) {
          setError(err);
        } else {
          setError (new Error('Unknown error'));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return {products, error, loading};
};