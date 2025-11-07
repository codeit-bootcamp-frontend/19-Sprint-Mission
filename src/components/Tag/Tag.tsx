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
    <div className="bg-gray100 text-gray800 inline-flex h-9 cursor-default items-center justify-center gap-1 rounded-full pr-3 pl-4">
      <span>{label}</span>
      {onDelete && (
        <Button size="xs" variant="ghost" onClick={onDelete}>
          <IC_X />
        </Button>
      )}
    </div>
  );
}
