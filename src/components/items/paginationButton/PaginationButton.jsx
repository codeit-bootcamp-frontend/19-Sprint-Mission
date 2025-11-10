import icons from '@/assets/icons/icons';
import styles from './PaginationButton.module.css';

const PaginationButton = ({ totalCount, pageSize, page, onChangePage }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const pageGroupSize = 5;
  const currentGroup = Math.ceil(page / pageGroupSize);
  const startPage = (currentGroup - 1) * pageGroupSize + 1;
  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.button}
        onClick={() => onChangePage(page - 1)}
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
            onClick={() => onChangePage(p)}>
            {p}
          </button>
        );
      })}

      <button
        type="button"
        className={styles.button}
        onClick={() => onChangePage(page + 1)}
        disabled={page === totalPages}>
        <icons.ArrowRightIcon />
      </button>
    </div>
  );
};

export default PaginationButton;
