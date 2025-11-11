import { useState, useEffect } from "react";
import style from "./AllItems.module.css";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Item from "./Item";
import SearchBar from "./SearchBar";
import { fetchAllProducts } from "../utils/api";

const AllItems = () => {
  // Dropdown Props(동적 구현)
  const options = ["최신순", "좋아요순"];
  const [sort, setSort] = useState(options[0]);

  // 모든 데이터 불러오기(api 연동)
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function loadData() {
      try {
        const productList = await fetchAllProducts();
        setProducts(productList);
      } catch (err) {
        console.error("전체 상품 데이터 로드 오류", err);
      }
    }

    loadData();
  }, []);

  return (
    <div className={style.container}>
      <section>
        <h2 className={style.title}>전체 상품</h2>
        <SearchBar />
        <Button variantButton={style.addItemBtn} name="상품 등록하기" />
        <Dropdown options={options} currentValue={sort} onChange={setSort} />
      </section>
      <section>
        <ul className={style.list}>
          {products.map((item) => (
            <Item key={item.id} product={item} imgClass={style.allImgSize} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AllItems;
