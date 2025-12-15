import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";

const AllItems = ({ allProducts }) => {
  const [limit, setLimit] = useState(10);
  const gridClasses =
    "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4";

  useEffect(() => {
    const resize = () => {
      const w = window.innerWidth;

      if (w < 640) setLimit(4);
      else if (w < 1024) setLimit(6);
      else setLimit(10);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const displayed = allProducts.slice(0, limit);

  return (
    <div className={gridClasses}>
      {displayed.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllItems;
