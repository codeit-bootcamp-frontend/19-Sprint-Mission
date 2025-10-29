import styled from 'styled-components';

function Pagination() {
  return (
    <PaginationWrap>
      <button className="prev"></button>

      <ul>
        <li>
          <button>1</button>
        </li>
        <li>
          <button>2</button>
        </li>
      </ul>

      <button className="next"></button>
    </PaginationWrap>
  );
}

export default Pagination;

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 45px;

  button {
    width: 40px;
    height: 40px;
    background-color: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 50%;
    color: #6b7280;

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
`;
