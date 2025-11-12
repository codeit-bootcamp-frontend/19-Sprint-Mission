import { useState, useEffect } from "react";
import style from "./AllItems.module.css";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Item from "./Item";
import SearchBar from "./SearchBar";
import { fetchAllProducts } from "../utils/api";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

const AllItems = () => {
  const navigate = useNavigate();
  // 모든 데이터 불러오기
  const [products, setProducts] = useState([]);

  // SearchBar Props(동적 구현)
  const [searchQuery, setSearchQuery] = useState("");

  // Dropdown Props(동적 구현)
  const sortOptions = [
    { label: "최신순", value: "recent" },
    { label: "좋아요순", value: "favorite" },
  ];
  const [sort, setSort] = useState(sortOptions[0].value);

  // Pagination Props(동적 구현)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // api 연동
  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchAllProducts({
          page: currentPage,
          orderBy: sort,
          keyword: searchQuery,
        });
        setProducts(data.list);

        setTotalPages(5);
      } catch (err) {
        console.error("전체 상품 데이터 로드 오류", err);
      }
    }

    loadData();
  }, [currentPage, searchQuery, sort]);

  return (
    <div className={style.container}>
      <section className={style.serviceWrapper}>
        <h2 className={style.title}>전체 상품</h2>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <Button
          variantButton={style.addItemBtn}
          name="상품 등록하기"
          onClick={() => navigate("/additem")}
        />
        <Dropdown
          options={sortOptions.map((option) => option.label)}
          currentValue={
            sortOptions.find((option) => option.value === sort)?.label
          }
          onChange={(label) =>
            setSort(sortOptions.find((option) => option.label === label).value)
          }
        />
      </section>
      <section>
        <ul className={style.list}>
          {products.map((item) => (
            <Item key={item.id} product={item} imgClass={style.allImgSize} />
          ))}
        </ul>
      </section>
      <section>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
      </section>
    </div>
  );
};

export default AllItems;
