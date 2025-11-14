"use client";

import clsx from "clsx";
import React, { CSSProperties } from "react";

export interface DividerProps {
  width?: number;
  orientation?: "horizontal" | "vertical";
}

const Divider = ({ width = 1, orientation = "horizontal" }: DividerProps) => {
  // 두께 동적 스타일링 적용
  const thickness = Math.max(0, Number.isFinite(width) ? width : 1);
  const dynamicStyle: CSSProperties =
    orientation === "horizontal" ? { height: `${thickness}px` } : { width: `${thickness}px` };
  return (
    <div
      className={clsx(orientation, "bg-gray-200")}
      style={dynamicStyle}
      role="separator"
      aria-orientation={orientation}
    />
  );
};

export default Divider;
