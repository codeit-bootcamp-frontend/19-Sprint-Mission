import Input from "../../components/Form/Input";
import Label from "../../components/Form/Label";
import Textarea from "../../components/Form/Textarea";
import styles from "./ItemForm.module.scss";
import clsx from "clsx";
import ErrorMessage from "@/components/Form/ErrorMessage";

export default function ItemForm({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  onClick,
  onKeyDown,
  onDeleteImg,
  errorMsg,
  img,
  fileInputRef,
}) {
  // 인풋 값
  const handleChange = (e) => {
    let val = e.target.value;

    // price 필드면 숫자만 허용
    if (name === "price") {
      val = val.replace(/\D/g, "");
    }
    onChange(val.trim());
  };
  return (
    <div className={styles.iptBox}>
      {type === "text" || type === "number" || type === "textarea" ? (
        <Label htmlFor={id}>{label}</Label>
      ) : (
        <Label>{label}</Label>
      )}
      <div className={styles.ipt}>
        {type === "text" || type === "number" ? (
          <Input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onKeyDown={onKeyDown}
          />
        ) : type === "textarea" ? (
          <Textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        ) : (
          <div className={styles.itemImgUpload}>
            <div className={clsx(styles.imgUpload, styles.imgBox)}>
              <input type="file" onChange={onChange} ref={fileInputRef} />
              <button className={styles.btnUpload} onClick={onClick}>
                이미지 등록
              </button>
            </div>
            {img.length > 0 && (
              <div className={styles.imgBox}>
                <img src={img} alt="" />
                <button className={styles.btnDelete} onClick={onDeleteImg}>
                  <span className="blind">이미지 삭제</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
    </div>
  );
}
