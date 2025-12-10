import clsx from "clsx";
import styles from "./InputForm.module.scss";
import Label from "../Form/Label";
import Input from "../Form/Input";
import ErrorMessage from "../Form/ErrorMessage";

export default function InputForm({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  handleFocus,
  handlePassword,
  pwShow,
  inputError,
}) {
  const currentError = inputError?.hasError;
  return (
    <div className={styles.iptBox}>
      <Label htmlFor={id}>{label}</Label>
      <div className={styles.ipt}>
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value.trim())}
          onBlur={handleFocus}
          pwShow={pwShow}
          error={currentError}
        />
        {type === "password" && (
          <button
            type="button"
            className={clsx(styles.btnEye, { [styles.on]: pwShow?.[name] })}
            onClick={() => handlePassword(name)}
          >
            <span className="blind">
              비밀번호 {pwShow?.[name] ? "숨김" : "표시"}
            </span>
          </button>
        )}
      </div>
      {currentError && <ErrorMessage>{inputError.message}</ErrorMessage>}
    </div>
  );
}
