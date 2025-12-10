import clsx from "clsx";
import styles from "./Pagination.module.scss";

function Pagination({ total, limit, currentPage, setCurrentPage }) {
  if (!total) return null;

  const totalPages = Math.ceil(total / limit); // 전체 페이지 수 (limit는 아이템 수)

  const groupSize = 5; // 페이지 번호는 5개씩 보이게
  const currentGroup = Math.ceil(currentPage / groupSize); // 현재 그룹 번호
  const startPage = (currentGroup - 1) * groupSize + 1; // 현재 그룹 시작 페이지
  const endPage = Math.min(startPage + groupSize - 1, totalPages); // 현재 그룹 끝 페이지

  const pageList = [];
  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);
  }

  // 다음 그룹의 첫 번째 페이지로 이동 (groupSize 사용)
  const goToNextGroup = () => {
    const nextGroupStart = currentGroup * groupSize + 1;
    if (nextGroupStart <= totalPages) {
      setCurrentPage(nextGroupStart);
    }
  };

  // 이전 그룹의 첫 번째 페이지로 이동 (groupSize 사용)
  const goToPrevGroup = () => {
    const prevGroupStart = (currentGroup - 2) * groupSize + 1;
    if (prevGroupStart >= 1) {
      setCurrentPage(prevGroupStart);
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.btnPrev}
        onClick={goToPrevGroup}
        disabled={currentGroup === 1}
      >
        <span className="blind">이전페이지</span>
      </button>

      {pageList.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={clsx({ [styles.active]: currentPage === page })}
        >
          {page}
        </button>
      ))}

      <button
        className={styles.btnNext}
        onClick={goToNextGroup}
        disabled={endPage === totalPages}
      >
        <span className="blind">다음페이지</span>
      </button>
    </div>
  );
}

export default Pagination;
