/**
 * 공용 페이지네이션 컴포넌트
 *
 * 일정 개수(pageGroupSize)의 페이지 버튼을 그룹 단위로 표시합니다.
 * 현재 페이지를 기반으로 활성화 상태를 표시하며, 첫/마지막 페이지일 때 화살표를 비활성화합니다.
 *
 * @component
 * @param {number} totalPages - 전체 페이지 수
 * @param {number} currentPage - 현재 페이지 번호
 * @param {function} onChange - 페이지 변경 시 실행되는 콜백 (선택된 페이지 번호 반환)
 * @param {number} [pageGroupSize=5] - 한 번에 표시할 페이지 버튼 개수
 *
 * @example
 * <Pagination
 *   totalPages={20}
 *   currentPage={1}
 *   onChange={(page) => setCurrentPage(page)}
 * />
 */

import style from "./Pagination.module.css";
import Button from "./Button";
import arrowLeft from "../assets/arrow_left.svg";
import arrowRight from "../assets/arrow_right.svg";

const Pagination = ({
  totalPages = 1,
  currentPage = 1,
  onChange = () => {},
  pageGroupSize = 5,
}) => {
  // const [page, setPage] = useState(currentPage);

  // useEffect(() => {
  //   setPage(currentPage);
  // }, [currentPage]);

  const page = currentPage;

  // 현재 페이지 그룹 계산
  const currentGroup = Math.floor((page - 1) / pageGroupSize);
  const startPage = currentGroup * pageGroupSize + 1;
  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

  const handleClick = (pageNum) => {
    if (pageNum < 1 || pageNum > totalPages) return;
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
    for (let i = startPage; i <= endPage; i++) {
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
        variantButton={`${style.arrowButton} ${
          page === 1 ? style.disabled : ""
        }`}
        name={<img src={arrowLeft} alt="prev" />}
        onClick={handlePrev}
      />

      {renderPageButtons()}

      <Button
        variantButton={`${style.arrowButton} ${
          page === totalPages ? style.disabled : ""
        }`}
        name={<img src={arrowRight} alt="next" />}
        onClick={handleNext}
      />
    </div>
  );
};

export default Pagination;
