import { useState } from 'react';
import Button from '@/components/common/button/Button';
import Label from '@/components/common/label/Label';
import Textarea from '@/components/common/textarea/Textarea';
import styles from './CommentForm.module.css';

const CommentForm = () => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 다음 미션에서 폼 등록 구현
    console.log(comment);
    setComment('');
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Label id="question" label="문의하기" className={styles.label} />
      <Textarea
        id="question"
        className={styles.textarea}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        disabled={!comment.trim()}
        type="submit"
        size="xs"
        className={styles.button}>
        등록
      </Button>
    </form>
  );
};

export default CommentForm;
