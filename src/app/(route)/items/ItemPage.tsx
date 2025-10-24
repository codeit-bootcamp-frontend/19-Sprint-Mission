'use client';

import BestProducts from './components/BestProducts/BestProducts';
import AllProducts from './components/AllProducts/AllProducts';

const ItemPage = () => {
  return(
    <div>
      <div className='mx-auto max-w-[1200px] mt-6'>
        <BestProducts />
        <AllProducts />
      </div>
    </div>
  );
}

export default ItemPage;