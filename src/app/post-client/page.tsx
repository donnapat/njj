"use client";

import { usePosts } from "@/store/posts";
import { useEffect } from "react";

export default function Page() {
  const { items, loading, error, fetchData } = usePosts();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <p className="text-center py-4">กำลังโหลด...</p>;
  if (error) return <p className="text-red-500 text-center py-4">ผิดพลาด: {error}</p>;
  if (!loading && !error && items.length === 0)
    return <p className="text-center py-4">ยังไม่มีโพสต์</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-4">
        {items.map((post) => (
          <li key={post.id} className="bg-green-50 rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold text-green-900">{post.title}</h2>
            <p className="text-green-800">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
