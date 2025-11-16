import { useState, useEffect } from "react";
import { getProducts } from "../api/product";
import Card from "../components/Card";
import "./AllProducts.scss";
import PageButtons from "./PageButtons";

const params = {
  page: 1,
  pageSize: 10,
  orderBy: "recent",
};

//params 내부의 값을 변경.. params를 상태로 관리..?

const AllProducts = () => {
  const [page, setPage] = useState();
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const params = {
    page,
    pageSize: 10,
    orderBy: "recent",
  };

  const fetchProductData = async () => {
    const productData = await getProducts(params);
    setItems(productData.list);
    setCount(productData.totalCount);
  };

  useEffect(() => {
    fetchProductData();
  }, [page]);

  const handleClickPage = (page) => {
    setPage(page);
  };

  return (
    <div className="AllProducts">
      <div className="all-cards-container">
        {items?.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
      <PageButtons handleClickPage={handleClickPage} totalCount={count} />
    </div>
  );
};

export default AllProducts;
