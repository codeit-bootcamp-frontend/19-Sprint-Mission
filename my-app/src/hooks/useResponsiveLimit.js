import { useEffect, useState } from "react";

const getLimitByWidth = (width) => {
  if (width < 640) return 4;
  if (width < 1024) return 6;
  return 10;
};

export function useResponsiveLimit() {
  const [limit, setLimit] = useState(() =>
    getLimitByWidth(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setLimit(getLimitByWidth(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return limit;
}
