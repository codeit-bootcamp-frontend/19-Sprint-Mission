'use client';

import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useProducts } from '../../hooks/useProducts';


const BestProducts = () => {
  const {products, error, loading} = useProducts();

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러가 발생했습니다: {error.message}</p>;

  return (
    <div className='mb-10'>
      <h1 className='text-xl font-bold mb-4'>베스트 상품</h1>
      <ItemList isBest={true} items={products.favorite} showNum={4}/>
    </div>
  )
}

export default BestProducts;