import { useState, useEffect } from "react";

export function useTimeAgo(isoString: string) {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    if (!isoString) return;

    const updateTimeAgo = () => {
      const now = new Date();
      const target = new Date(isoString);
      const diff = Math.floor((now.getTime() - target.getTime()) / 1000);

      if (diff < 3600) {
        setTimeAgo(`${Math.floor(diff / 60)}분 전`);
      } else if (diff < 86400) {
        setTimeAgo(`${Math.floor(diff / 3600)}시간 전`);
      } else if (diff < 2592000) {
        setTimeAgo(`${Math.floor(diff / 86400)}일 전`);
      } else if (diff < 31536000) {
        setTimeAgo(`${Math.floor(diff / 2592000)}개월 전`);
      } else {
        setTimeAgo(`${Math.floor(diff / 31536000)}년 전`);
      }
    };
    updateTimeAgo();
    const interval = setInterval(updateTimeAgo, 60 * 1000);

    return () => clearInterval(interval);
  }, [isoString]);

  return timeAgo;
}
