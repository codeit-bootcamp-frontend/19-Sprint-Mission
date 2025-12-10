import Button from "@/components/Button";
import ItemForm from "./ItemForm";
import { useRef, useState } from "react";
import styles from "./AddItem.module.scss";
import { PostImage } from "@/api/ImageApi";

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
  // console.log(values);

  // 인풋 값 저장
  const handleValue = (title, value) => {
    setValues((prev) => ({
      ...prev,
      [title]: value,
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

  // 파일 선택창 열기
  const handleFile = (e) => {
    e.preventDefault();
    if (values.images.length > 0) {
      setErrorMsg("*이미지 등록은 최대 1개까지 가능합니다.");
    } else {
      fileInputRef.current.click();
    }
  };
  // 이미지 업로드
  async function handleImgUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    // 로컬 미리보기 URL 생성
    const result = URL.createObjectURL(file);

    try {
      const data = await PostImage(file);
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

  // 이미지 삭제
  const handleImgDelete = (e) => {
    e.preventDefault();
    setValues((prev) => {
      return {
        ...prev,
        images: [],
      };
    });

    errorMsg && setErrorMsg("");
  };

  // 등록버튼 활성화
  const isFormValid = Object.entries(values)
    .filter(([key]) => key !== "tag")
    .every(([key, value]) => value !== "");

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

          <ItemForm
            label="상품 이미지"
            onChange={handleImgUpload}
            onClick={handleFile}
            onDeleteImg={handleImgDelete}
            setErrorMsg={setErrorMsg}
            errorMsg={errorMsg}
            img={values.images}
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
