import { PostImage } from "@/api/itemApi";
import { useRef, useState } from "react";

export default function ItemForm({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  onKeyDown,
}) {
  const [img, setImg] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef(null);

  // 파일 선택창 열기
  const handleFile = (e) => {
    e.preventDefault();
    if (img) {
      setErrorMsg("*이미지 등록은 최대 1개까지 가능합니다.");
    } else {
      fileInputRef.current.click();
    }
  };
  // 이미지 업로드
  async function handleImgUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    // const result = await PostImage(file);
    const result = URL.createObjectURL(file);
    setImg(result);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }
  // 이미지 삭제
  const handleImgDelete = (e) => {
    e.preventDefault();
    setImg(null);

    errorMsg && setErrorMsg("");
  };

  // 인풋 값
  const handleChange = (e) => {
    const val = e.target.value.trim();
    onChange(val);
  };
  return (
    <div className="iptBox">
      {type === "text" || type === "number" || type === "textarea" ? (
        <label htmlFor={id}>{label}</label>
      ) : (
        <div className="label">{label}</div>
      )}
      <div className="ipt">
        {type === "text" || type === "number" ? (
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onKeyDown={onKeyDown}
          />
        ) : type === "textarea" ? (
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        ) : (
          <div className="itemImgUpload">
            <div className="imgUpload imgBox">
              <input
                type="file"
                onChange={handleImgUpload}
                ref={fileInputRef}
              />
              <button className="btnUpload" onClick={handleFile}>
                이미지 등록
              </button>
            </div>
            {img && (
              <div className="imgBox">
                <img src={img} alt="" />
                <button className="btnDelete" onClick={handleImgDelete}>
                  <span className="blind">이미지 삭제</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {errorMsg && <div className="error">{errorMsg}</div>}
    </div>
  );
}
