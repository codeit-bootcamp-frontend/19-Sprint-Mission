import { useEffect, useState } from "react";
import { fetchBestProducts } from "../utils/api";
import Item from "./Item";
import style from "./BestItems.module.css";

const BestItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const productList = await fetchBestProducts();
        setProducts(productList);
      } catch (err) {
        console.error("데이터 로드 오류:", err);
      }
    }

    loadData();
  }, []);

  return (
    <div className={style.container}>
      <h2 className={style.title}>베스트 상품</h2>
      <ul className={style.list}>
        {products.map((item) => (
          <Item key={item.id} product={item} imgClass={style.bestImgSize} />
        ))}
      </ul>
    </div>
  );
};

export default BestItems;
