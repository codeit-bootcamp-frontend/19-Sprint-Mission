"use client";

import { usePopoverStore } from "../popoverStore";
import React, { useRef } from "react";

import Popover from "../Popover";
import Button from "@/components/Button/base/Button";

import IC_VertMenu from "@/components/icons/ic_verticalmenu.svg";

export default function EditPopover() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuType = "Edit";
  const { isOpen, type, open, close, anchorEl } = usePopoverStore();

  const togglePopover = () => {
    const current = buttonRef.current;
    if (!current) return;
    if (!isOpen || type !== menuType) {
      open(menuType, current);
      return;
    }
    if (anchorEl === current) {
      close();
    } else {
      open(menuType, current); // 다른 앵커로 전환
    }
  };

  // === STYLES ===
  const listStyle =
    "flex cursor-pointer justify-center rounded-lg py-2 text-black transition-colors hover:bg-gray-100";

  return (
    <div className="relative inline-block">
      {/* Trigger */}
      <Button
        ref={buttonRef}
        size="sm"
        variant="ghost"
        onClick={togglePopover}
        aria-label="Open Edit Menu"
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen && type === menuType && anchorEl === buttonRef.current}
      >
        <IC_VertMenu className="h-[13px]" />
      </Button>

      {/* Popover Content */}
      <Popover type={menuType} triggerRef={buttonRef}>
        <ul
          className="m-1 min-w-[139px] rounded-lg border border-gray-300 bg-white p-2 shadow-md"
          id="side-nav-item-popover"
          role="menu"
        >
          <li className={listStyle} role="menu item-edit">
            수정하기
          </li>
          <li className={listStyle} role="menu item-delete">
            삭제하기
          </li>
        </ul>
      </Popover>
    </div>
  );
}
