import ProductCard from '../common/ProductCard'; 

const BestItems = ({ bestProducts }) => {
  const gridClasses = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6";

  const displayProducts = bestProducts.slice(0, 4); 

  return (
    <div className={gridClasses}>
      {displayProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default BestItems;