/**
 * 공용 드롭다운(선택박스) 컴포넌트
 *
 * 외부 클릭 시 자동으로 닫히며, 선택된 옵션을 상위 컴포넌트에 전달합니다.
 *
 * @component
 * @param {string[]} options - 드롭다운에서 선택 가능한 옵션 목록
 * @param {string} currentValue - 현재 선택된 값 (없을 경우 첫 번째 옵션 표시)
 * @param {function} onChange - 옵션 선택 시 실행되는 콜백 함수 (선택된 option 반환)
 *
 * @example
 * <Dropdown
 *   options={["최신순", "인기순"]}
 *   currentValue="최신순"
 *   onChange={(value) => setSort(value)}
 * />
 */

import { useState, useEffect, useRef } from "react";
import style from "./Dropdown.module.css";
import arrowDown from "../assets/ic_arrow_down.svg";

const Dropdown = ({ options, currentValue, onChange = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 옵션 외부 영역에 클릭해도 닫아지는 기능
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={style.dropdown} ref={dropdownRef}>
      <div
        className={style.selected}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={style.text}>{currentValue || options[0]}</span>
        <img className={style.arrow} src={arrowDown} alt="화살표" />
      </div>

      {isOpen && (
        <ul className={style.options}>
          {options.map((option) => (
            <li
              key={option}
              className={style.option}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
