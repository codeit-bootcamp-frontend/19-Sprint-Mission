import { useState } from "react";
import leftArrow from "@/assets/images/ic_arrow_left.svg";
import rightArrow from "@/assets/images/ic_arrow_right.svg";
import "./PageButtons.scss";
import { useSearchParams } from "react-router-dom";

const PageButtons = ({ totalCount, handleClickPage }) => {
  const [searchParams] = useSearchParams({
    page: "1",
  });
  const [currentPage, setCurrentPage] = useState(() => {
    const page = searchParams.get("page");
    return Number(page);
  });
  const [groupNum, setGroupNum] = useState(0);
  const totalPages = Math.ceil(totalCount / 10);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const currentPagesNumbers = pageNumbers.filter(
    (el) => groupNum * 5 < el && el <= (groupNum + 1) * 5
  );
  const lastPageGruopNum = Math.ceil(totalPages / 5);

  const onClickRightArrow = () => {
    if (currentPage === totalPages) {
      return;
    }
    const nextPage = currentPage + 1;

    if (nextPage > (groupNum + 1) * 5) {
      setGroupNum((g) => g + 1);
      console.log(groupNum);
    }

    setCurrentPage((prev) => prev + 1);
    handleClickPage(nextPage);
  };

  const onClickLeftArrow = () => {
    if (currentPage === 1) {
      return;
    }
    const prevPage = currentPage - 1;

    if (prevPage === groupNum * 5) {
      setGroupNum((g) => g - 1);
      console.log(groupNum);
    }

    setCurrentPage((prev) => prev - 1);
    handleClickPage(prevPage);
  };

  const onClickPageButton = (e) => {
    setCurrentPage(+e.target.innerText);
    handleClickPage(+e.target.innerText);
  };

  return (
    <div className="PageButtons">
      <button onClick={onClickLeftArrow}>
        <img src={leftArrow} />
      </button>
      <div className="number-buttons">
        {currentPagesNumbers.map((num) => (
          <button
            onClick={onClickPageButton}
            className={currentPage === num ? "clicked-button" : ""}
            key={num}
          >
            {num}
          </button>
        ))}
      </div>
      <button onClick={onClickRightArrow}>
        <img src={rightArrow} />
      </button>
    </div>
  );
};

export default PageButtons;
