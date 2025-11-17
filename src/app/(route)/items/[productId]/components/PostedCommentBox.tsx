"use client";

import Divider from "@/components/Divider/Divider";
import EditPopover from "@/components/Popover/Wrappers/EditPopover";
import PublisherInfo from "@/components/PublisherInfo/PublisherInfo";

interface PostedCommentBoxProps {
  writer: { image: string; nickname: string };
  createdAt: string;
  content: string;
}

const PostedCommentBox = ({ writer, createdAt, content }: PostedCommentBoxProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <span className="text-gray800 text-sm">{content}</span>
        <EditPopover />
      </div>
      <div>
        <PublisherInfo
          profileImage={writer.image}
          nickname={writer.nickname}
          dateInfo={createdAt}
          isAgo
        />
      </div>
      <Divider />
    </div>
  );
};

export default PostedCommentBox;
