export const formatDate = (isoDate) => {
  if (!isoDate) {
    return '';
  }

  const date = new Date(isoDate);

  if (isNaN(date)) {
    return '';
  }

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Seoul',
  };

  const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
  const year = parts.find(({ type }) => type === 'year').value;
  const month = parts.find(({ type }) => type === 'month').value;
  const day = parts.find(({ type }) => type === 'day').value;

  return `${year}. ${month}. ${day}`;
};

export const formatTimeCalculation = (isoDate) => {
  const now = new Date();
  const updatedAt = new Date(isoDate);

  if (!updatedAt) {
    return '';
  }

  const timeDiff = now.getTime() - updatedAt.getTime();

  // 방금 전 (분 초)
  if (timeDiff < 60 * 1000) {
    return '방금 전';
  }

  // 1시간 이내 (시 분 초)
  if (timeDiff < 60 * 60 * 1000) {
    const minutes = Math.floor(timeDiff / (60 * 1000));
    return `${minutes}분 전`;
  }

  // 24시간 이내
  if (timeDiff < 24 * 60 * 60 * 1000) {
    const hours = Math.floor(timeDiff / (60 * 60 * 1000));
    return `${hours}시간 전`;
  }

  // 7일 전
  if (timeDiff <= 7 * 24 * 60 * 60 * 1000) {
    const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
    return `${days}일 전`;
  }

  return formatDate(updatedAt);
};
