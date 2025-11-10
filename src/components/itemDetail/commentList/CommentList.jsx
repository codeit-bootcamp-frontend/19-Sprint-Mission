import images from '@/assets/images/images';
import MoreDropdown from '@/components/itemDetail/MoreDropdown/MoreDropdown';
import UserInfo from '@/components/itemDetail/userInfo/UserInfo';
import { formatTimeCalculation } from '@/utils/formatDate';
import styles from './CommentList.module.css';

const CommentList = ({ comments, onEdit, onDelete }) => {
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
          <li key={item.id} className={styles.contents}>
            <div className={styles['comment-info']}>
              <span className={styles.comment}>{item.content}</span>
              <UserInfo
                size="s"
                nickname={item.writer.nickname}
                date={formatTimeCalculation(item.updatedAt)}
              />
            </div>
            <MoreDropdown
              key={item.id}
              items={[
                { label: '수정하기', onClick: onEdit },
                { label: '삭제하기', onClick: onDelete },
              ]}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
