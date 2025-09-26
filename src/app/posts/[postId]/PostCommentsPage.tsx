"use client";

import { useComments } from "@/store/comments";
import { useEffect } from "react";

type Props = {
  postId: number;
};

export default function PostCommentsPage({ postId }: Props) {
  const { items, loading, error, fetchComments } = useComments();

  useEffect(() => {
    fetchComments(postId);
  }, [postId, fetchComments]);

  if (loading) return <p>กำลังโหลดคอมเมนต์...</p>;
  if (error) return <p className="text-red-500">ผิดพลาด: {error}</p>;

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">คอมเมนต์ของโพสต์ {postId}</h2>
      <ul className="space-y-2">
        {items.map((c) => (
          <li key={c.id} className="border p-3 rounded-lg shadow">
            <p className="font-semibold">{c.name}</p>
            <p className="text-sm text-gray-600">{c.email}</p>
            <p>{c.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
