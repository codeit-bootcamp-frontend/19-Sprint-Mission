import { useState } from "react";
import Items from "@/pages/List/Items";
import Pagination from "@/components/Pagination";
import styles from "./List.module.scss";
import clsx from "clsx";
import Button from "@/components/Button";
import useProducts from "@/hooks/useProducts";

export default function TotalItems() {
  const [order, setOrder] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const { pageSize, prodList, totalCount } = useProducts({
    type: "all",
    orderBy: order,
    page: currentPage,
  });

  const [toggle, setToggle] = useState(false);

  const handleSort = (e) => {
    setToggle(false);
    setCurrentPage(1);
    setOrder(e);
  };
  return (
    <section>
      <div className={styles.secTitWrap}>
        <h1 className={styles.secTit}>전체 상품</h1>

        <div className={styles.util}>
          <div className={styles.search}>
            <input type="search" placeholder="검색할 상품을 입력해주세요" />
            <button>
              <span className="blind">검색</span>
            </button>
          </div>
          <Button type="link" href="/additem" size="mid2">
            상품 등록하기
          </Button>
          <div className={styles.sorting}>
            <button
              className={clsx(styles.btnSort, { [styles.atv]: toggle })}
              onClick={() => setToggle(!toggle)}
            >
              {order === "recent" ? "최신순" : "좋아요순"}
            </button>
            {toggle && (
              <ul className={styles.list}>
                <li>
                  <button onClick={() => handleSort("recent")}>최신순</button>
                </li>
                <li>
                  <button onClick={() => handleSort("favorite")}>
                    좋아요순
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <Items prodList={prodList} type="all" />
      <Pagination
        total={totalCount}
        limit={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}
