import Button from "@/components/Button";
import ItemForm from "./ItemForm";
import { useRef, useState } from "react";
import styles from "./AddItem.module.scss";
import { PostImage } from "@/api/ImageApi";
import ImgUpload from "@/components/Form/ImgUpload";

function AddItemPage() {
  const fileInputRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [tags, setTags] = useState([]);
  const [tagId, setTagId] = useState(0);
  const [values, setValues] = useState({
    images: [],
    tag: [],
    price: "",
    description: "",
    name: "",
  });

  // 인풋 값 저장
  const handleValue = (key, value) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // 태그 생성
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
  // 태그 삭제
  const handleTagDelete = (e, value) => {
    e.preventDefault();
    setTags((prev) =>
      prev.filter((el) => {
        return el !== value;
      })
    );
  };
  // 이미지 업로드
  async function handleImgUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const result = URL.createObjectURL(file); // 로컬 미리보기 URL 생성

    try {
      const data = await PostImage(file); //api전달 (로그인인증필요)
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    setValues((prev) => {
      return {
        ...prev,
        images: [result],
      };
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
  }
  // 등록버튼 활성화 (이미지 제외)
  const isFormValid = Object.keys(values)
    .filter((key) => key !== "tag" && key !== "images")
    .every((key) => values[key] !== "");

  // 등록
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="content">
      <div className="inner">
        {/* content start */}
        <form>
          <div className={styles.secTitWrap}>
            <h1 className={styles.secTit}>상품 등록하기</h1>
            <Button
              size="sm"
              type="submit"
              disabled={isFormValid && tags.length > 0 ? false : true}
              onClick={handleRegister}
            >
              등록
            </Button>
          </div>
          <ImgUpload
            label="상품 이미지"
            onChange={handleImgUpload}
            setErrorMsg={setErrorMsg}
            setValues={setValues}
            values={values}
            img={values.images}
            errorMsg={errorMsg}
            fileInputRef={fileInputRef}
          />
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
            name="description"
            id="description"
            type="textarea"
            value={values.description}
            placeholder="상품 소개를 입력해주세요"
            onChange={(value) => handleValue("description", value)}
          />
          <ItemForm
            label="판매가격"
            name="price"
            id="price"
            type="text"
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
            <div className={styles.tagWrp}>
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
        {/* content end */}
      </div>
    </div>
  );
}

export function Tag({ children, onClick, id }) {
  return (
    <div className={styles.tag} id={id}>
      <span className={styles.txt}>#{children}</span>
      <button className={styles.btnDelete} onClick={onClick}>
        <span className="blind">삭제</span>
      </button>
    </div>
  );
}

export default AddItemPage;
