"use client";

import useItemCountByDevice from "./hooks/useItemCountByDevice";

import BestProducts from "./components/BestProducts/BestProducts";
import AllProducts from "./components/AllProducts/AllProducts";

const ItemPage = () => {
  const { bestItemCount, allItemCount } = useItemCountByDevice();

  return (
    <div>
      <div className="mx-auto mt-6 flex max-w-[1200px] flex-col items-center px-4 md:px-6">
        <>
          <BestProducts visibleItemCount={bestItemCount} />
          <AllProducts visibleItemCount={allItemCount} />
        </>
      </div>
    </div>
  );
};

export default ItemPage;
