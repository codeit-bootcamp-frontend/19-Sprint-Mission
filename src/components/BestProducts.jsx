import { getProducts } from "../api/product";
import { useState, useEffect } from "react";
import Card from "./Card";
import "./BestProducts.scss";

const params = {
  page: 1,
  pageSize: 4,
  orderBy: "favorite",
};

const BestProducts = () => {
  const [products, setProducts] = useState([]);
  const fetchProductData = async () => {
    const productData = await getProducts(params);
    setProducts(productData.list);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="best-cards-container">
      {products.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
};

export default BestProducts;
