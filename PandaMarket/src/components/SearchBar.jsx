import searchIcon from "../assets/ic_search.svg";
import style from "./SearchBar.module.css";

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <img className={style.icon} src={searchIcon} />
    </div>
  );
};

export default SearchBar;
