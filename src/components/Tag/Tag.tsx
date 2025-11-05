"use client";

import React from "react";
import Button from "../Button/base/Button";
import IC_X from "@/components/icons/ic_X.svg";

interface TagProps {
  label: string;
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Tag({ label, onDelete }: TagProps) {
  return (
    <div className="inline-flex cursor-default items-center justify-center gap-1 rounded-md bg-gray-300 px-2 py-1 text-xs font-medium text-gray-900">
      <span>{label}</span>
      {onDelete && (
        <Button size="sm" onClick={onDelete}>
          <IC_X />
        </Button>
      )}
    </div>
  );
}
