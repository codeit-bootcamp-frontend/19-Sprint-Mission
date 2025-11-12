import { useState } from "react";
import style from "./Dropdown.module.css";
import arrowDown from "../assets/ic_arrow_down.svg";

const Dropdown = ({ options, currentValue, onChange = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={`${style.dropdown}`}>
      <div
        className={style.selected}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{currentValue || options[0]}</span>
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
