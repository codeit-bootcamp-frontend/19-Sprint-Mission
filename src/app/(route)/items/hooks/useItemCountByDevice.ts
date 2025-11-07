"use client";
import useResponsive from "@/utils/useResponsive";
import { useMemo } from "react";

interface ResponsiveItemCount {
  bestItemCount: number;
  allItemCount: number;
}

export default function useItemCountByDevice(): ResponsiveItemCount {
  const { isTablet, isDesktop } = useResponsive();

  const counts = useMemo(() => {
    if (isDesktop) {
      return { bestItemCount: 4, allItemCount: 10 };
    } else if (isTablet) {
      return { bestItemCount: 2, allItemCount: 6 };
    } else {
      return { bestItemCount: 1, allItemCount: 4 };
    }
  }, [isTablet, isDesktop]);

  return counts;
}
