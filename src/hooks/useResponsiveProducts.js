import { useState, useEffect } from 'react';

export function useResponsiveProducts() {
  const [pageSize, setPageSize] = useState(10);
  const [bigPageSize, setBigPageSize] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 600) {
        setPageSize(4);
        setBigPageSize(1);
      } else if (width <= 900) {
        setPageSize(6);
        setBigPageSize(2);
      } else {
        setPageSize(10);
        setBigPageSize(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { pageSize, bigPageSize };
}
