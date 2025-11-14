import Button from "@/components/Button";
import ItemForm from "./ItemForm";
import { useState } from "react";

function AddItemPage() {
  const [values, setValues] = useState({
    name: "",
    info: "",
    price: "",
    tag: "",
  });

  const isFormValid = Object.entries(values)
    .filter(([key]) => key !== "tag")
    .every(([key, value]) => value.trim() !== "");

  const [tags, setTags] = useState([]);
  const [tagId, setTagId] = useState(0);

  const handleValue = (title, value) => {
    setValues((prev) => ({
      ...prev,
      [title]: value,
    }));
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (values.tag.trim()) {
        setTags((prev) => [{ id: tagId, txt: values.tag }, ...prev]);
        setValues((prev) => ({ ...prev, tag: "" }));
        setTagId((prev) => prev + 1);
      }
    }
  };
  const handleTagDelete = (e, value) => {
    e.preventDefault();
    setTags((prev) =>
      prev.filter((el) => {
        return el !== value;
      })
    );
  };

  if (isFormValid && tags.length > 0) {
    console.log("true");
  } else {
    console.log("false");
  }

  return (
    <div className="addItemPage content">
      <div className="inner">
        <form>
          <div className="secTitWrap">
            <h1 className="secTit">상품 등록하기</h1>
            <Button
              size="sm"
              type="submit"
              disabled={isFormValid && tags.length > 0 ? false : true}
            >
              등록
            </Button>
          </div>

          <ItemForm label="상품 이미지" />
          <ItemForm
            label="상품명"
            name="name"
            id="name"
            type="text"
            value={values.name}
            placeholder="상품명을 입력해주세요"
            onChange={(value) => handleValue("name", value)}
          />
          <ItemForm
            label="상품 소개"
            name="info"
            id="info"
            type="textarea"
            value={values.info}
            placeholder="상품 소개를 입력해주세요"
            onChange={(value) => handleValue("info", value)}
          />
          <ItemForm
            label="판매가격"
            name="price"
            id="price"
            type="number"
            value={values.price}
            placeholder="판매 가격을 입력해주세요"
            onChange={(value) => handleValue("price", value)}
          />
          <ItemForm
            label="태그"
            name="tag"
            id="tag"
            type="text"
            value={values.tag}
            placeholder="태그를 입력해주세요"
            onChange={(value) => handleValue("tag", value)}
            onKeyDown={handleKeyDown}
          />
          {tags && (
            <div className="tagWrp">
              {tags.map((tg) => {
                return (
                  <Tag key={tg.id} onClick={(e) => handleTagDelete(e, tg)}>
                    {tg.txt}
                  </Tag>
                );
              })}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export function Tag({ children, onClick, id }) {
  return (
    <div className="tag" id={id}>
      <span className="txt">#{children}</span>
      <button className="btnDelete" onClick={onClick}>
        <span className="blind">삭제</span>
      </button>
    </div>
  );
}

export default AddItemPage;
