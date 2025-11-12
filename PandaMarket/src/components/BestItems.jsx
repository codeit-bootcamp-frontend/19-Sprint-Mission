import { useEffect, useState } from "react";
import { fetchBestProducts } from "../utils/api";
import Item from "./Item";
import style from "./BestItems.module.css";

const BestItems = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  // 반응형마다 다른 상품 개수 설정
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) setVisibleCount(1);
      else if (window.innerWidth <= 1023) setVisibleCount(2);
      else setVisibleCount(4);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 데이터 불러오기(api 연동)
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
        {products.slice(0, visibleCount).map((item) => (
          <Item key={item.id} product={item} imgClass={style.bestImgSize} />
        ))}
      </ul>
    </div>
  );
};

export default BestItems;
