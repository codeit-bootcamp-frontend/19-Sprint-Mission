import Profile from "@/components/Profile";
import styles from "./User.module.scss";
import clsx from "clsx";

interface userInfoProps {
  type: "seller" | "commenter";
  name: string;
  date: string;
  image?: string;
}

export default function User({ name, date, type, image }: userInfoProps) {
  const defaultImage = "/img/common/profile.svg";
  const sellerDate = date.substring(0, 10).replace(/-/g, ".");
  const commenterDate = getTimeAgo(date);

  return (
    <div className={clsx(styles.user, type && [styles[type]])}>
      <Profile image={image || defaultImage} />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.date}>
          {type === "seller" ? sellerDate : commenterDate}
        </div>
      </div>
    </div>
  );
}

// 과거 시간
export const getTimeAgo = (dateString: string): string => {
  const now = new Date();
  const past = new Date(dateString);
  const diffInMs = now.getTime() - past.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInSeconds < 60) {
    return "방금 전";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  } else if (diffInDays < 30) {
    return `${diffInDays}일 전`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths}개월 전`;
  } else {
    return `${diffInYears}년 전`;
  }
};
