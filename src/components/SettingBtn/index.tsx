import styles from "./SettingBtn.module.scss";

interface SettingBtnProps {
  isOpen: boolean;
  onSetToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function SettingBtn({
  isOpen,
  onSetToggle,
  onEdit,
  onDelete,
}: SettingBtnProps) {
  return (
    <div className={styles.setting}>
      <button className={styles.btnSet} onClick={onSetToggle}>
        <span className="blind">댓글 설정</span>
      </button>
      {isOpen && (
        <ul className={styles.btns}>
          <li>
            <button onClick={onEdit}>수정하기</button>
          </li>
          <li>
            <button onClick={onDelete}>삭제하기</button>
          </li>
        </ul>
      )}
    </div>
  );
}
