import styles from "./CommentEmpty.module.scss";

interface CommentEmptyProps {
  text: string;
}

export default function CommentEmpty({ text }: CommentEmptyProps) {
  return (
    <div className={styles.commentEmpty}>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
