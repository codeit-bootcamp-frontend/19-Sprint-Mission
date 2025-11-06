import { useState } from 'react';
import styled from 'styled-components';

function ItemsOdrderDropdown({ dropState, setDropState, options }) {
  const [show, setShow] = useState(false);
  const showClick = () => setShow((prev) => !prev);

  return (
    <>
      <DropdownWrap>
        <DropdownButton onClick={showClick}>{dropState.label}</DropdownButton>
        {show && (
          <DropdownList>
            {options.map((option) => (
              <li key={option.value}>
                <button onClick={() => (setDropState(option), showClick())}>
                  {option.label}
                </button>
              </li>
            ))}
          </DropdownList>
        )}
      </DropdownWrap>
    </>
  );
}

export default ItemsOdrderDropdown;

const DropdownWrap = styled.div`
  position: relative;
  width: 130px;
  z-index: 10;
`;

const DropdownButton = styled.button`
  width: 130px;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid#e5e7eb;
  cursor: pointer;
  text-align: left;
  background: url('../../ico_dropdown_arrow.svg') no-repeat right 20px center;
  transition: 0.5s all;

  &:hover {
    color: #3692ff;
    border-color: #3692ff;
  }

  // 모바일
  @media (max-width: 600px) {
    width: 42px;
    height: 42px;
    text-indent: -9999px;
    background: url('../../ico_dropdown_m.svg') no-repeat center center;
  }
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
    transition: color 0.5s;

    &:hover {
      color: #3692ff;
    }
  }
`;
