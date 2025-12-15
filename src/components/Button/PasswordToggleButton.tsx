import clsx from "clsx";
import styles from "./PasswordToggleButton.module.scss";
interface PwShowState {
  password: boolean;
  passwordCheck: boolean;
}

interface PasswordToggleButtonProps {
  name: "password" | "passwordCheck";
  pwShow?: PwShowState;
  onToggle: () => void;
}

export default function PasswordToggleButton({
  name,
  pwShow,
  onToggle,
}: PasswordToggleButtonProps) {
  return (
    <button
      type="button"
      className={clsx(styles.btnEye, pwShow?.[name] && [styles.on])}
      onClick={onToggle}
    >
      <span className="blind">비밀번호 {pwShow?.[name] ? "숨김" : "표시"}</span>
    </button>
  );
}
