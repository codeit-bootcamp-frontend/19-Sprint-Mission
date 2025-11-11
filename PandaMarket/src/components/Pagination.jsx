import { useState } from "react";
import style from "./Pagination.module.css";
import Button from "./Button";
import arrowLeft from "../assets/arrow_left.svg";
import arrowRight from "../assets/arrow_right.svg";

const Pagination = ({
  totalPages = 1,
  currentPage = 1,
  onChange = () => {},
}) => {
  const [page, setPage] = useState(currentPage);

  const handleClick = (pageNum) => {
    setPage(pageNum);
    onChange(pageNum);
  };

  const handlePrev = () => {
    if (page > 1) handleClick(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) handleClick(page + 1);
  };

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <Button
          key={i}
          variantButton={`${style.pageButton} ${
            i === page ? style.active : style.inactive
          }`}
          name={i}
          onClick={() => handleClick(i)}
        />
      );
    }
    return buttons;
  };

  return (
    <div className={style.pagination}>
      <Button
        variantButton={`${style.arrowButton}`}
        name={<img src={arrowLeft} alt="prev" />}
        onClick={handlePrev}
      />

      {renderPageButtons()}

      <Button
        variantButton={`${style.arrowButton} `}
        name={<img src={arrowRight} alt="next" />}
        onClick={handleNext}
      />
    </div>
  );
};

export default Pagination;
