import { useState } from 'react';
import styled from 'styled-components';

function Dropdown() {
  const [show, setShow] = useState(false);

  const showClick = () => setShow((prev) => !prev);

  return (
    <>
      <DropdownWrap>
        <DropdownButton onClick={showClick}>최신순</DropdownButton>
        {!show ? (
          ''
        ) : (
          <DropdownList>
            <li>
              <button>최신순</button>
            </li>
            <li>
              <button>좋아요순</button>
            </li>
          </DropdownList>
        )}
      </DropdownWrap>
    </>
  );
}

export default Dropdown;

const DropdownWrap = styled.div`
  position: relative;
  width: 130px;
`;

const DropdownButton = styled.button`
  width: 130px;
  padding: 10px;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid#e5e7eb;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 49px;
  right: 0;
  width: 130px;
  border: 1px solid #e5e7eb;
  background-color: #fff;
  color: #1f2937;
  border-radius: 12px;
  overflow: hidden;

  li ~ li {
    border-top: 1px solid #e5e7eb;
  }

  button {
    display: block;
    width: 100%;
    padding: 9px 3px 7px;
    cursor: pointer;
    border: none;
    text-align: center;
    background-color: #fff;
  }
`;
