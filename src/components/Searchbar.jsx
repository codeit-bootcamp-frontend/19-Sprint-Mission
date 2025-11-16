import "./Searchbar.scss";

const Searchbar = ({ handleSearch }) => {
  const onChangeSearch = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="Searchbar">
      <input
        className="searchbar-input"
        placeholder={`검색할 상품을 입력해주세요.`}
        onChange={onChangeSearch}
      />
    </div>
  );
};

export default Searchbar;
