import { useState } from "react";
import { getProducts } from "../api/product";
import Card from "./common/Card";
import "./AllProducts.scss";
import PageButtons from "./PageButtons";
import { useQuery } from "../hooks/useQuery";
import { useSearchParams } from "react-router-dom";

const AllProducts = ({ filter, search }) => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: "1",
  });
  const currentPage = searchParams.get("page");
  const params = {
    page: Number(currentPage),
    pageSize: 10,
    orderBy: filter === "최신순" ? "recent" : "favorite",
    keyword: search,
  };

  const { data: productData } = useQuery(getProducts, params);

  if (!productData) {
    return null;
  }
  const { totalCount, list } = productData;

  const handleClickPage = (page) => {
    setSearchParams({ page: String(page) });
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
