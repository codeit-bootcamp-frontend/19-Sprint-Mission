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
