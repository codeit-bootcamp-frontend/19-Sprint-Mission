import { getProducts } from "../api/product";
import Card from "./Card";
import "./BestProducts.scss";
import { useQuery } from "../hooks/useQuery";

const params = {
  page: 1,
  pageSize: 4,
  orderBy: "favorite",
};

const BestProducts = () => {
  const { data: productData } = useQuery(getProducts, params);
  const products = productData.list;
  return (
    <div className="best-cards-container">
      {products.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
};

export default BestProducts;
