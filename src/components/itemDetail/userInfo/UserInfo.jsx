import ProfileImg from '@/components/common/profileImg/ProfileImg';
import styles from './UserInfo.module.css';

const UserInfo = ({ nickname, date }) => {
  return (
    <div className={styles.container}>
      <ProfileImg />
      <div className={styles['info-area']}>
        <span className={styles.nickname}>{nickname}</span>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};

export default UserInfo;
