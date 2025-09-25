"use client";

import { useEffect } from "react";
import { useComments } from "@/store/comments";

type Props = { postId: number };

export default function Comments({ postId }: Props) {
  const { items, loading, error, fetchComments } = useComments();

  useEffect(() => {
    fetchComments(postId);
  }, [postId, fetchComments]);

  if (loading)
    return <p className="text-green-700 text-center py-4">กำลังโหลดคอมเมนต์...</p>;
  if (error)
    return <p className="text-red-500 text-center py-4">❌ {error}</p>;

  return (
    <ul className="space-y-4">
      {items.map((c) => (
        <li
          key={c.id}
          className="bg-green-50 rounded-lg p-4 shadow hover:shadow-md transition-shadow duration-200"
        >
          <p className="font-semibold text-green-900">{c.name}</p>
          <p className="text-green-800 text-sm mb-2">{c.email}</p>
          <p className="text-green-700">{c.body}</p>
        </li>
      ))}
    </ul>
  );
}
