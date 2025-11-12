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
