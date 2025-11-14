"use client";

import { useComments } from "../context/CommentsContext";

import PostedCommentBox from "./PostedCommentBox";
import CommentForm from "./CommentForm";

const CommentSection = () => {
  const { comments } = useComments();

  return (
    <div>
      <CommentForm />
      <div className="mt-6 flex flex-col gap-6">
        {comments.map((comment) => (
          <ul key={comment.id}>
            <PostedCommentBox
              writer={comment.writer}
              createdAt={comment.createdAt}
              content={comment.content}
            />
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
