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
            <li className="">
              <button
                onClick={(e) => handleSort(e)}
                className="flex items-center justify-center w-full h-[42px] "
              >
                최신순
              </button>
            </li>
            <li className="border-t-[1px] border-solid border-gray-200">
              <button
                onClick={(e) => handleSort(e)}
                className="flex items-center justify-center w-full h-[42px] "
              >
                좋아요순
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
