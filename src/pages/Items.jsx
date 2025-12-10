import AllProducts from "../components/AllProducts";
import Searchbar from "../components/Searchbar";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import "./Items.scss";
import BestProducts from "../components/BestProducts";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    content: "최신순",
  },
  {
    id: 2,
    content: "좋아요 순",
  },
];

const Items = () => {
  const [filter, setFilter] = useState("최신순");
  const [search, setSearch] = useState("");

  const handleDropdown = (menu) => {
    setFilter(menu);
  };

  const handleSearch = (input) => {
    setSearch(input);
  };

  return (
    <div className="Items">
      <section className="best-section">
        <h2>베스트 상품</h2>
        <BestProducts />
      </section>

      <section className="all-section">
        <div className="actions">
          <h2>전체 상품</h2>
          <Searchbar handleSearch={handleSearch} />
          <Button as={Link} to="/additem">
            상품 등록하기
          </Button>
          <Dropdown
            data={data}
            handleDropdown={handleDropdown}
            filter={filter}
          />
        </div>
        <AllProducts filter={filter} search={search} />
      </section>
    </div>
  );
};

export default Items;
