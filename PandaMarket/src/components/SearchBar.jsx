import searchIcon from "../assets/ic_search.svg";
import style from "./SearchBar.module.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <img className={style.icon} src={searchIcon} />
    </div>
  );
};

export default SearchBar;
