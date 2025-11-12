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

  // Dropdown Props(동적 구현)
  const options = ["최신순", "좋아요순"];
  const [sort, setSort] = useState(options[0]);

  // 모든 데이터 불러오기(api 연동)
  const [products, setProducts] = useState([]);
  // Pagination Props(동적 구현 +api연동)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchAllProducts({ page: currentPage });
        setProducts(data.list);

        setTotalPages(5);
      } catch (err) {
        console.error("전체 상품 데이터 로드 오류", err);
      }
    }

    loadData();
  }, [currentPage]);

  return (
    <div className={style.container}>
      <section className={style.serviceWrapper}>
        <h2 className={style.title}>전체 상품</h2>
        <SearchBar />
        <Button
          variantButton={style.addItemBtn}
          name="상품 등록하기"
          onClick={() => navigate("/additem")}
        />
        <Dropdown options={options} currentValue={sort} onChange={setSort} />
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
