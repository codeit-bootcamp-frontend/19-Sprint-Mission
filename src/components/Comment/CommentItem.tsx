import Button from "../Button";
import User from "../User";
import styles from "./CommentItem.module.scss";

interface CommentItemProps {
  id: number;
  image: string;
  content: string;
  nickname: string;
  createdAt: string;
  editValue: string;
  isEdit: boolean;
  isOpen: boolean;
  setEditValue: (value: string) => void;
  handleEditCancel: React.MouseEventHandler<HTMLButtonElement>;
  handleEditSubmit: (value: string) => void;
  handleCommentSet: (value: number) => void;
  handleCommentEditSet: (id: number, content: string) => void;
  handleDeleteSubmit: (value: number) => void;
}

export default function CommentItem({
  id,
  image,
  content,
  nickname,
  createdAt,
  editValue,
  isEdit,
  isOpen,
  setEditValue,
  handleEditCancel,
  handleEditSubmit,
  handleCommentSet,
  handleCommentEditSet,
  handleDeleteSubmit,
}: CommentItemProps) {
  return (
    <li key={id} className={styles.commentItem}>
      {isEdit ? (
        <div className={styles.textarea}>
          <textarea
            value={editValue}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setEditValue(e.target.value);
            }}
          />
          <div className={styles.btns}>
            <Button onClick={handleEditCancel} size="sm" variant="white">
              취소
            </Button>
            <Button onClick={() => handleEditSubmit(editValue)} size="sm">
              수정완료
            </Button>
          </div>
        </div>
      ) : (
        <div className={styles.content}>{content}</div>
      )}
      <User type="commenter" name={nickname} date={createdAt} image={image} />
      {!isEdit && (
        <div className={styles.setting}>
          <button
            className={styles.btnSet}
            onClick={() => handleCommentSet(id)}
          >
            <span className="blind">댓글 설정</span>
          </button>
          {isOpen && (
            <ul className={styles.btns}>
              <li>
                <button onClick={() => handleCommentEditSet(id, content)}>
                  수정하기
                </button>
              </li>
              <li>
                <button onClick={() => handleDeleteSubmit(id)}>삭제하기</button>
              </li>
            </ul>
          )}
        </div>
      )}
    </li>
  );
}
