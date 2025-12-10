import Items from "@/pages/List/Items";
import styles from "./List.module.scss";
import useProducts from "@/hooks/useProducts";

export default function TotalItems() {
  const { prodList } = useProducts({ type: "best", orderBy: "favorite" });

  return (
    <section>
      <h1 className={styles.secTit}>베스트 상품</h1>
      <Items prodList={prodList} type="best" />
    </section>
  );
}
