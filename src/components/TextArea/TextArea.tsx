"use client";

import clsx from "clsx";
import React from "react";
import { tv } from "tailwind-variants";

const styles = tv({
  base: "bg-gray100 w-full resize-none rounded-xl p-4 text-gray-900 placeholder:text-gray-300 focus:outline-none",
});
export interface TextAreaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "value" | "onChange" | "onSubmit"
  > {
  className?: string;
  maxLength?: number;
  placeholder?: string;
  value: string;
  height: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (e?: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  {
    className,
    maxLength = 200,
    placeholder = "무엇이든 물어보세요",
    value = "",
    height = "md",
    onChange,
    onSubmit,
    ...rest
  },
  ref,
) {
  const classes = styles();
  const isOverMaxLength = value.length >= maxLength;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // IME(한글 등) 조합 중 Enter 잘못 제출되는 것 방지
    const isComposing =
      (e.nativeEvent as KeyboardEvent).isComposing ||
      (e as unknown as { isComposing?: boolean }).isComposing;
    if (e.key === "Enter" && !e.shiftKey && !isComposing) {
      e.preventDefault(); // 줄바꿈 방지
      onSubmit?.();
    }
  };

  return (
    <div className="relative inline-block pb-4">
      <textarea
        ref={ref}
        className={clsx(classes, className)}
        value={value}
        placeholder={placeholder}
        aria-label={placeholder}
        maxLength={maxLength}
        style={{ height: `${height}px` }}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        {...rest}
      />
      <div
        className={clsx(
          "absolute right-2 -bottom-1 text-xs select-none",
          isOverMaxLength ? "text-red-400" : "text-gray-500",
        )}
        aria-live="polite"
        aria-atomic="true"
        role="status"
      >
        {value.length}/{maxLength}
      </div>
    </div>
  );
});

export default TextArea;
