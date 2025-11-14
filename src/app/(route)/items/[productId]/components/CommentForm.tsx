"use client";

import { Axios, AxiosError } from "axios"; //   에러 타입 정의용

import { useState } from "react";
import { useComments } from "../context/CommentsContext";
import { postComment } from "@/apis/comments";

import Button from "@/components/Button/base/Button";
import TextArea from "@/components/TextArea/TextArea";
import ShowLoginModal from "./ShowLoginModal";
import { MODAL_TYPE, useModalStore } from "@/components/Modal/modalStore";

const TEXTAREA_PLACEHOLDER =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

const CommentForm = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { productId, addComment } = useComments();
  const { open } = useModalStore();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      setLoading(true);
      setError(null);

      const newComment = await postComment(productId, content);
      addComment(newComment);
      setContent("");
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          open("SHOW_LOGIN");
        } else {
          console.error("댓글 작성에 실패했습니다.", error);
        }
      } else {
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
        <TextArea
          value={content}
          height={104}
          maxLength={2000}
          placeholder={TEXTAREA_PLACEHOLDER}
          disabled={loading}
          onChange={(e) => setContent(e.target.value)}
          className="text-sm md:text-[16px]"
        />
        <div className="flex w-full justify-end">
          <Button type="submit" disabled={!(content.length > 0)}>
            <span>등록</span>
          </Button>
        </div>
      </form>
      <ShowLoginModal />
    </div>
  );
};

export default CommentForm;
