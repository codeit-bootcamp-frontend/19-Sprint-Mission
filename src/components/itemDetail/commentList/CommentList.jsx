import classNames from 'classnames';
import { useState } from 'react';
import images from '@/assets/images/images';
import Button from '@/components/common/button/Button';
import Textarea from '@/components/common/textarea/Textarea';
import MoreDropdown from '@/components/itemDetail/MoreDropdown/MoreDropdown';
import UserInfo from '@/components/itemDetail/userInfo/UserInfo';
import { formatTimeCalculation } from '@/utils/formatDate';
import styles from './CommentList.module.css';

const CommentList = ({ comments, onEdit, onDelete }) => {
  const [editingId, setEditingId] = useState(null);
  const [editingContent, setEditingContent] = useState('');

  const handleEditClick = (comment) => {
    setEditingId(comment.id);
    setEditingContent(comment.content);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditingContent('');
  };

  const handleSave = (commentId) => {
    // TODO: 댓글 수정 기능 구현
    console.log({ id: commentId, content: editingContent });
    onEdit();
    setEditingId(null);
    setEditingContent('');
  };

  if (comments.length === 0) {
    return (
      <div className={styles['not-comment-container']}>
        <img className={styles.img} src={images.commentEmpty} alt="빈 이미지" />
        <span className={styles.text}>아직 문의가 없어요</span>
      </div>
    );
  }

  return (
    <ul className={styles.container}>
      {comments.map((item) => {
        return (
          <li
            key={item.id}
            className={classNames(styles.contents, {
              [styles.editing]: editingId === item.id,
            })}>
            <div className={styles['comment-info']}>
              {editingId === item.id ? (
                <Textarea
                  className={styles.textarea}
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                />
              ) : (
                <span className={styles.comment}>{item.content}</span>
              )}
              <UserInfo
                size="s"
                nickname={item.writer.nickname}
                date={formatTimeCalculation(item.updatedAt)}
              />
            </div>
            {editingId === item.id ? (
              <div className={styles['edit-button-area']}>
                <Button size="xs" theme="text" onClick={handleCancel}>
                  취소
                </Button>
                <Button
                  size="xs"
                  onClick={() => handleSave(item.id)}
                  disabled={!editingContent.trim()}>
                  수정 완료
                </Button>
              </div>
            ) : (
              <MoreDropdown
                key={item.id}
                items={[
                  { label: '수정하기', onClick: () => handleEditClick(item) },
                  { label: '삭제하기', onClick: () => onDelete(item.id) },
                ]}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
