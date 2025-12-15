import clsx from "clsx";
import styles from "./ImgUpload.module.scss";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";
import type { ChangeEventHandler, MouseEventHandler, RefObject } from "react";
interface ItemFormValues {
  images: string[];
  tag: string[];
  price: string;
  description: string;
  name: string;
}
interface ImgUploadProps {
  label: string;
  img: string;
  errorMsg: string;
  values: ItemFormValues;
  fileInputRef: RefObject<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  setValues: React.Dispatch<React.SetStateAction<ItemFormValues>>;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
}

export default function ImgUpload({
  label,
  img,
  fileInputRef,
  onChange,
  errorMsg,
  setValues,
  setErrorMsg,
  values,
}: ImgUploadProps) {
  // 파일 선택창 열기
  const handleFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (values.images.length > 0) {
      setErrorMsg("*이미지 등록은 최대 1개까지 가능합니다.");
    } else {
      fileInputRef.current.click();
    }
  };
  // 이미지 삭제
  const handleImgDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setValues((prev) => {
      return {
        ...prev,
        images: [],
      };
    });
    // 한개이상일때 에러메시지
    errorMsg && setErrorMsg("");
  };

  return (
    <div className={styles.iptBox}>
      <Label>{label}</Label>
      <div className={styles.ipt}>
        <div className={styles.itemImgUpload}>
          <div className={clsx(styles.imgUpload, styles.imgBox)}>
            <input type="file" onChange={onChange} ref={fileInputRef} />
            <button className={styles.btnUpload} onClick={handleFile}>
              이미지 등록
            </button>
          </div>
          {img.length > 0 && (
            <div className={styles.imgBox}>
              <img src={img} alt="" />
              <button className={styles.btnDelete} onClick={handleImgDelete}>
                <span className="blind">이미지 삭제</span>
              </button>
            </div>
          )}
        </div>
      </div>
      {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
    </div>
  );
}
