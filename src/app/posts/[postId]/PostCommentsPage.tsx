"use client";

import Comments from "@/app/post-client/Comments";

type Props = { postId: number };

export default function PostCommentsPage({ postId }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 flex flex-col items-center p-6 font-sans">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-green-900 mb-4 drop-shadow-sm">
          โพสต์ #{postId}
        </h1>

        <h2 className="text-2xl font-semibold mb-4 text-green-800 border-b border-green-200 pb-2">
          💬 Comments
        </h2>

        <Comments postId={postId} />
      </div>
    </div>
  );
}
