import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemUtil({ order, setOrder, setCurrentPage }) {
  const [toggle, setToggle] = useState(false);

  const handleSort = (e) => {
    setToggle(false);
    setCurrentPage(1);
    setOrder(e);
  };

  return (
    <div className="util">
      <div className="search">
        <input placeholder="검색할 상품을 입력해주세요" />
        <button>
          <span className="blind">검색</span>
        </button>
      </div>
      <Link to="/additem" className="btn sm">
        상품 등록하기
      </Link>
      <div className="sorting">
        <button
          className={`btnSort ${toggle ? "atv" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          {order === "recent" ? "최신순" : "좋아요순"}
        </button>
        {toggle && (
          <ul className="list">
            <li>
              <button onClick={() => handleSort("recent")}>최신순</button>
            </li>
            <li>
              <button onClick={() => handleSort("favorite")}>좋아요순</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
