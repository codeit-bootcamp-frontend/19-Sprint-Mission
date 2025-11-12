/**
 * 공용 검색창 컴포넌트
 *
 * @component
 * @param {string} value - 입력 필드의 현재 값
 * @param {function} onChange - 입력값 변경 시 호출될 함수, 매개변수로 새로운 값 전달
 * @param {string} placeholder - 입력창에 표시될 안내 문구
 *
 * @example
 * <SearchBar
 *   value={searchQuery}
 *   onChange={setSearchQuery}
 *   placeholder="검색할 상품을 입력해주세요"
 * />
 */

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
