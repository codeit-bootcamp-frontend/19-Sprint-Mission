"use client";

import { useState, useEffect } from "react";

const BREAK_POINT = { md: 768, xl: 1024 };

export default function useResponsive(debounceDelay: number = 50) {
  const [windowWidth, setWindowWidth] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    return window.innerWidth;
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, debounceDelay);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [debounceDelay]);

  if (windowWidth === null)
    return { windowWidth: null, isMobile: false, isTablet: false, isDesktop: false };

  const isMobile = windowWidth < BREAK_POINT.md;
  const isTablet = BREAK_POINT.md <= windowWidth && windowWidth < BREAK_POINT.xl;
  const isDesktop = BREAK_POINT.xl <= windowWidth;

  return { windowWidth, isMobile, isTablet, isDesktop };
}
