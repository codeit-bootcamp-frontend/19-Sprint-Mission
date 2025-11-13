import Card from "../components/Card";
import { useState, useEffect } from "react";
import { getProducts } from "../api/product";
import "./Items.scss";
const Items = () => {
  const [items, setItems] = useState([]);

  const fetchProductData = async () => {
    const params = {
      page: 1,
      pageSize: 10,
      orderBy: "recent",
    };
    const productData = await getProducts(params);
    setItems(productData.list);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="cards-container">
      {items?.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Items;
