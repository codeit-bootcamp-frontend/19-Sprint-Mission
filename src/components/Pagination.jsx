import styled from 'styled-components';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <PaginationWrap>
      <button
        className="prev"
        onClick={handlePrev}
        disabled={currentPage === 1}
      />

      <ul>
        {getPageNumbers().map((page) => (
          <li key={page}>
            <button
              className={currentPage === page ? 'active' : ''}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>

      <button
        className="next"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      />
    </PaginationWrap>
  );
}

export default Pagination;

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 45px;
  padding-bottom: 58px;

  button {
    width: 40px;
    height: 40px;
    background-color: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 50%;
    color: #6b7280;
    cursor: pointer;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.2;
    }

    &.active {
      color: #fff;
      background-color: #2f80ed;
    }

    &:disabled {
      opacity: 0.3;
    }

    &.prev {
      background: url('../../ico_pagination_prev.svg') no-repeat center center;
    }

    &.next {
      margin-left: 4px;
      background: url('../../ico_pagination_next.svg') no-repeat center center;
    }
  }

  ul {
    display: flex;
    li {
      margin-left: 4px;
    }
  }

  // 테블릿
  @media (max-width: 900px) {
    margin-top: 40px;
  }
`;
