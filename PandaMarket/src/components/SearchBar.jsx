import searchIcon from "../assets/ic_search.svg";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={style.container}>
      <input className={style.input} placeholder="검색할 상품을 입력해주세요" />
      <img className={style.icon} src={searchIcon} />
    </div>
  );
};

export default SearchBar;
