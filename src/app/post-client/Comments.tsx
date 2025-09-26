// src/app/post-client/Comments.tsx
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
    return (
      <p className="text-green-700 text-center py-4 animate-pulse">
        กำลังโหลดคอมเมนต์...
      </p>
    );

  if (error)
    return (
      <p className="text-red-500 text-center py-4 font-medium">
        ❌ {error}
      </p>
    );

  return (
    <ul className="space-y-4 w-full max-w-2xl mx-auto">
      {items.map((c) => (
        <li
          key={c.id}
          className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-5 shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
        >
          {/* ชื่อผู้คอมเมนต์ */}
          <p className="font-semibold text-green-900 mb-1">{c.name}</p>

          {/* อีเมล */}
          <p className="text-green-800 text-sm mb-3">{c.email}</p>

          {/* เนื้อหาคอมเมนต์ */}
          <p className="text-green-700 leading-relaxed">{c.body}</p>
        </li>
      ))}
    </ul>
  );
}
