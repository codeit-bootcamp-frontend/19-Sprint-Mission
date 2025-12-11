import { useState } from "react";
import "./ImageForm.scss";
import ic_plus from "@/assets/images/ic_plus.svg";
import ic_close from "@/assets/images/ic_close.svg";

export default function ImageForm({ title, onFileChange }) {
  const [formImage, setFormImage] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFormImage(selectedFile);
    onFileChange(selectedFile);
  };

  const handleRemoveFile = () => {
    setFormImage(null);
  };

  return (
    <div className="imageform-container">
      <label className="ImageForm">
        <span className="imageform-title">{title}</span>
        <input type="file" onChange={(e) => handleFileChange(e)}></input>
        {formImage ? (
          <img className="form-image" src={URL.createObjectURL(formImage)} />
        ) : (
          <div className="form-content">
            <img className="default-image" src={ic_plus} />
            <span>이미지 등록</span>
          </div>
        )}
      </label>
      {formImage && (
        <button className="close-btn" onClick={handleRemoveFile}>
          <img src={ic_close} />
        </button>
      )}
    </div>
  );
}
