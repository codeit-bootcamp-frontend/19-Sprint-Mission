import "./Dropdown.scss";
import { useState } from "react";
import ic_arrow_down from "@/assets/images/ic_arrow_down.svg";

const Dropdown = ({ data, handleDropdown, filter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickTitle = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickMenu = (e) => {
    setIsOpen((prev) => !prev);
    handleDropdown(e.target.innerText);
  };

  return (
    <div className="Dropdown">
      <div className="title-container">
        <button className="dropdown-title" onClick={onClickTitle}>
          {filter || "최신순"}
        </button>
        <img
          className="dropdown-arrow"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
          src={ic_arrow_down}
        />
      </div>
      {isOpen && (
        <ul className="dropdown-box">
          {data?.map((item) => (
            <li key={item.id}>
              <button onClick={onClickMenu}>{item.content}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
