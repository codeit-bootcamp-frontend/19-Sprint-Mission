import { useState, useEffect } from "react";
import { getProducts } from "../api/product";
import Card from "../components/Card";
import "./AllProducts.scss";
import PageButtons from "./PageButtons";

const AllProducts = ({ filter, search }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productData, setProductData] = useState({});

  const params = {
    page: currentPage,
    pageSize: 10,
    orderBy: filter === "최신순" ? "recent" : "favorite",
    keyword: search,
  };

  const fetchProductData = async () => {
    const data = await getProducts(params);
    setProductData(data);
  };

  const { totalCount, list } = productData;

  useEffect(() => {
    fetchProductData();
    console.log("랜더");
  }, [currentPage, filter, search]);

  const handleClickPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="AllProducts">
      <div className="all-cards-container">
        {list?.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
      <PageButtons handleClickPage={handleClickPage} totalCount={totalCount} />
    </div>
  );
};

export default AllProducts;
