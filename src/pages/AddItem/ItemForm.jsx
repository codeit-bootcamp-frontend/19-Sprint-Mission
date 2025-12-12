import Input from "../../components/Form/Input";
import Label from "../../components/Form/Label";
import Textarea from "../../components/Form/Textarea";
import styles from "./ItemForm.module.scss";

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
        ) : (
          <Textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
}
