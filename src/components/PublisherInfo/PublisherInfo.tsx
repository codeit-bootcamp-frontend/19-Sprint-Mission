"use client";

import { useTimeAgo } from "@/utils/useDate";

interface PublisherInfoProps {
  profileImage: string;
  nickname: string;
  dateInfo: string;
  isAgo?: boolean;
}

export default function PublisherInfo({
  profileImage,
  nickname,
  dateInfo,
  isAgo = false,
}: PublisherInfoProps) {
  const timeAgo = useTimeAgo(dateInfo);
  const formattedDate = isAgo ? timeAgo : dateInfo.slice(0, 10);

  return (
    <div className="flex gap-4">
      <span>
        <img
          src={profileImage ? profileImage : "/images/ic_profile.png"}
          className="h-10 w-10 rounded-full"
        />
      </span>
      <div className="flex flex-col gap-[2px]">
        <span className="text-gray600 text-sm">{nickname}</span>
        <span className="text-gray400 text-sm">{formattedDate}</span>
      </div>
    </div>
  );
}
