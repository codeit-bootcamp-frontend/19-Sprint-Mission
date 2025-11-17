"use client";

import { createContext, useContext, useState } from "react";
import { Comment } from "@/types/comment";

interface CommentsContextValue {
  productId: number;
  comments: Comment[];
  addComment: (c: Comment) => void;
  updateComment: (id: number, patch: Partial<Comment>) => void;
  removeComment: (id: number) => void;
}

const CommentsContext = createContext<CommentsContextValue | null>(null);

export function CommentsProvider({
  productId,
  initialComments,
  children,
}: {
  productId: number;
  initialComments: Comment[];
  children: React.ReactNode;
}) {
  const [comments, setComments] = useState(initialComments);

  const addComment = (comment: Comment) => setComments((prev) => [comment, ...prev]);

  const updateComment = (id: number, patch: Partial<Comment>) =>
    setComments((prev) => prev.map((c) => (c.id === id ? { ...c, ...patch } : c)));

  const removeComment = (id: number) => setComments((prev) => prev.filter((c) => c.id != id));

  return (
    <CommentsContext.Provider
      value={{ productId, comments, addComment, updateComment, removeComment }}
    >
      {children}
    </CommentsContext.Provider>
  );
}

export function useComments() {
  const ctx = useContext(CommentsContext);
  if (!ctx) throw new Error("useComment must be used within CommentProvider");
  return ctx;
}
