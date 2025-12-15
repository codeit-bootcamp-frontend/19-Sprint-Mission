import Button from "../Button";
import styles from "./CommentWrite.module.scss";

interface CommentWriteProps {
  title: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export default function CommentWrite({
  title,
  placeholder,
  value,
  onChange,
  onClick,
  disabled,
}: CommentWriteProps) {
  return (
    <div className={styles.commentWrite}>
      <div className={styles.tit}>{title}</div>
      <textarea value={value} onChange={onChange} placeholder={placeholder} />
      <div className={styles.btnArea}>
        <Button onClick={onClick} disabled={disabled} size="sm">
          등록
        </Button>
      </div>
    </div>
  );
}
