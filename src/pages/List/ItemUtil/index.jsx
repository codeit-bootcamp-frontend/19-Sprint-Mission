import { useState } from "react";
import Button from "@/components/Button";

export default function ItemUtil({ setOrder, setCurrentPage }) {
  const [toggle, setToggle] = useState(false);
  const [sortTxt, setSortTxt] = useState("최신순");
  const handleSort = (e) => {
    const txt = e.target.innerText;
    setSortTxt(txt);
    setToggle(false);
    setCurrentPage(1);

    txt === "최신순" ? setOrder("recent") : setOrder("favorite");
  };

  return (
    <div className="util">
      <div className="search">
        <input placeholder="검색할 상품을 입력해주세요" />
        <button>
          <span className="blind">검색</span>
        </button>
      </div>
      <Button size="sm">상품 등록하기</Button>
      <div className="sorting">
        <button
          className={`btnSort ${toggle ? "atv" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          {sortTxt}
        </button>
        {toggle && (
          <ul className="list">
            <li>
              <button onClick={(e) => handleSort(e)}>최신순</button>
            </li>
            <li>
              <button onClick={(e) => handleSort(e)}>좋아요순</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
