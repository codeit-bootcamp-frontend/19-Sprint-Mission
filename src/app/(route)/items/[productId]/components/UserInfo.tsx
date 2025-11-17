"use client";

import Divider from "@/components/Divider/Divider";
import Button from "@/components/Button/base/Button";

import IC_Heart from "@/components/icons/ic_heart.svg";
import PublisherInfo from "@/components/PublisherInfo/PublisherInfo";

interface UserInfo {
  profileImage: string;
  ownerNickname: string;
  createdAt: string;
  favoriteCount: number;
}

const UserInfo = ({ profileImage, ownerNickname, createdAt, favoriteCount }: UserInfo) => {
  return (
    <div className="flex justify-between">
      <PublisherInfo profileImage={profileImage} nickname={ownerNickname} dateInfo={createdAt} />
      <div className="flex gap-6">
        <Divider orientation="vertical" />
        <Button variant="outlined" radius="full" className="flex gap-1 pr-3 pl-3">
          <IC_Heart className="h-8 w-8" />
          <span>{favoriteCount}</span>
        </Button>
      </div>
    </div>
  );
};

export default UserInfo;
