"use client";

import Link from "next/link";
import Button from "@/components/Button/base/Button";
import IC_Back from "@/components/icons/ic_back.svg";

export default function BackButton() {
  return (
    <Button radius="full" className="w-60 gap-2" asChild>
      <Link href="/items">
        <span>목록으로 돌아가기</span>
        <IC_Back />
      </Link>
    </Button>
  );
}
