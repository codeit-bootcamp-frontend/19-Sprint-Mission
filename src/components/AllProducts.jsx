import { useState, useEffect } from "react";
import { getProducts } from "../api/product";
import Card from "../components/Card";
import "./AllProducts.scss";
import PageButtons from "./PageButtons";

const AllProducts = ({ filter, search }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const params = {
    page: currentPage,
    pageSize: 10,
    orderBy: filter === "최신순" ? "recent" : "favorite",
    keyword: search,
  };

  const fetchProductData = async () => {
    const productData = await getProducts(params);
    setItems(productData.list);
    setCount(productData.totalCount);
  };

  useEffect(() => {
    fetchProductData();
  }, [currentPage, filter, search]);

  const handleClickPage = (page) => {
    setCurrentPage(page);
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
