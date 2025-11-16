import "./Searchbar.scss";

const Searchbar = () => {
  return (
    <div className="Searchbar">
      <input
        className="searchbar-input"
        placeholder={`검색할 상품을 입력해주세요.`}
      />
    </div>
  );
};

export default Searchbar;
