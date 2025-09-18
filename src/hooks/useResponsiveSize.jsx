import { useEffect, useRef, useState } from 'react';
import { BREAKPOINTS, PAGE_SIZE } from '@/constants/pageSize';

const getSizeWidth = (key, width) => {
  if (width <= BREAKPOINTS.mobile) {
    return PAGE_SIZE[key].mobile;
  }
  if (width <= BREAKPOINTS.tablet) {
    return PAGE_SIZE[key].tablet;
  }

  return PAGE_SIZE[key].desktop;
};

const useResponsiveSize = (key) => {
  const [pageSize, setPageSize] = useState(() => {
    return getSizeWidth(key, window.innerWidth);
  });
  const timerRef = useRef(null);

  useEffect(() => {
    const onResize = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        const newPageSize = getSizeWidth(key, window.innerWidth);
        setPageSize((prev) => {
          return prev !== newPageSize ? newPageSize : prev;
        });
      }, 100);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [key]);

  return pageSize;
};

export default useResponsiveSize;
