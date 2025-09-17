import { useState } from 'react';
import icons from '@/assets/icons/icons';
import styles from './PaginationButton.module.css';

const PaginationButton = ({ totalCount, pageSize }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const [page, setPage] = useState(1);

  const pageGroupSize = 5;
  const currentGroup = Math.ceil(page / pageGroupSize);
  const startPage = (currentGroup - 1) * pageGroupSize + 1;
  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => {
    return startPage + i;
  });

  const handlePrevPage = () => {
    setPage((prev) => {
      return prev - 1;
    });
  };

  const handleNextPage = () => {
    setPage((prev) => {
      return prev + 1;
    });
  };

  const handleGoPage = (p) => {
    setPage(p);
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.button}
        onClick={handlePrevPage}
        disabled={page === 1}>
        <icons.ArrowLeftIcon />
      </button>

      {pages.map((p) => {
        return (
          <button
            key={p}
            type="button"
            className={`${styles.button} ${
              page == p ? styles['button-select'] : ''
            }`}
            onClick={() => {
              return handleGoPage(p);
            }}>
            {p}
          </button>
        );
      })}

      <button
        type="button"
        className={styles.button}
        onClick={handleNextPage}
        disabled={page === totalPages}>
        <icons.ArrowRightIcon />
      </button>
    </div>
  );
};

export default PaginationButton;
