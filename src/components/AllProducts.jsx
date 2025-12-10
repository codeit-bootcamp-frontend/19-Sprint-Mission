import { useState } from "react";
import { getProducts } from "../api/product";
import Card from "../components/Card";
import "./AllProducts.scss";
import PageButtons from "./PageButtons";
import { useQuery } from "../hooks/useQuery";

const AllProducts = ({ filter, search }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const params = {
    page: currentPage,
    pageSize: 10,
    orderBy: filter === "최신순" ? "recent" : "favorite",
    keyword: search,
  };

  const { data: productData } = useQuery(getProducts, params);
  const { totalCount, list } = productData;

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
