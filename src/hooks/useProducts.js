// hooks/useProducts.js
import { useState, useEffect } from 'react';
import { getProducts } from '../utill/api';

export function useProducts(page, pageSize, order) {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProducts(page, pageSize, order);
      setProducts(res.list);

      if (res.totalCount) {
        setTotalPages(Math.ceil(res.totalCount / pageSize));
      }
    };

    fetchData();
  }, [page, pageSize, order]);

  return { products, totalPages };
}
