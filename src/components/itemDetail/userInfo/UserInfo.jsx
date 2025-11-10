import classNames from 'classnames';
import ProfileImg from '@/components/common/profileImg/ProfileImg';
import styles from './UserInfo.module.css';

const UserInfo = ({ nickname, date, size = 'm' }) => {
  return (
    <div className={styles.container}>
      <ProfileImg size={size} />
      <div
        className={classNames(styles['info-area'], {
          [styles['info-area-m']]: size === 'm',
          [styles['info-area-s']]: size === 's',
        })}>
        <span className={styles.nickname}>{nickname}</span>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};

export default UserInfo;
