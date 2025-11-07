import { styled } from "styled-components";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const windowSize = 10;
  const windowIndex = Math.floor((currentPage - 1) / windowSize);
  const start = windowIndex * windowSize + 1;
  const end = Math.min(start + windowSize - 1, totalPages);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <PaginationNav>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </PaginationNav>
  );
};

const PaginationNav = styled.nav`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin: 32px 0;

  button {
    min-width: 36px;
    height: 36px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;

    &:hover:not(:disabled):not(.active) {
      background: #f5f5f5;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    &.active {
      background: #333;
      color: #fff;
      border-color: #333;
    }
  }
`;

export default Pagination;
