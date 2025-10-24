'use client';

import { useState } from 'react';

import Button from '../../../../../components/Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import ItemList from '../ItemList/ItemList';
import { useProducts } from '../../hooks/useProducts';
import SearchInput from '../SearchInput/SearchInput';
import Pagination from '../Pagination/Pagination';



const AllProducts = () => {
  const [value, setValue] = useState<string>('');
  const {products, error, loading} = useProducts();

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러가 발생했습니다: {error.message}</p>;

  return (
    <div>

    <div className='all-items'>
      <div className='flex justify-between mb-4'>
        <h1 className='text-[20px] font-bold'>전체 상품</h1>
        <div className='flex gap-3'>
          <SearchInput value={value} onChange={(e)=>setValue(e.target.value)} onSubmit={(e)=>(console.log(e))}/>
          <Button onClick={()=>console.log('clicked')}>상품 등록하기</Button>
          <Dropdown
            defaultSelected={{label: '최신순', value: 'recent'}}
            options={[
              {label:'최신순', value:'recent'},
              {label:'좋아요순', value:'favorite'}]}
          />
        </div>
      </div>
      <ItemList isBest={false} items={products.recent}/>
    </div>
      <div className='flex justify-center mt-11'>
        {/* <Pagination total={} page={} setPage={}/> */}
      </div>
    </div>
  );
}

export default AllProducts;