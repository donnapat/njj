// src/app/page.tsx
import Link from "next/link";

type Post = { id: number; title: string };

export default async function HomePage() {
  // fetch ฝั่ง server
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  const colors = ["bg-green-100","bg-blue-100","bg-yellow-100","bg-pink-100","bg-purple-100"];
  const textColors = ["text-green-900","text-blue-900","text-yellow-900","text-pink-900","text-purple-900"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 flex flex-col items-center p-6 font-sans">
      <h1 className="text-4xl font-extrabold mb-4 text-green-900 text-center drop-shadow-md">
        🌟 ยินดีต้อนรับ! 🌟
      </h1>
      <h2 className="text-lg text-green-800 mb-6 text-center">
        เลือกจากตัวอย่างโพสต์ หรือกรอก Post ID ด้านล่าง
      </h2>

      {/* ตัวอย่างโพสต์ */}
      <div className="w-full max-w-md grid gap-4 mb-10">
        {posts.slice(0, 5).map((post, idx) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className={`${colors[idx % colors.length]} ${textColors[idx % textColors.length]} rounded-xl p-4 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 block font-medium`}
          >
            {post.title}
          </Link>
        ))}
      </div>

      {/* Input Post ID */}
      <div className="flex w-full max-w-md shadow-xl rounded-xl overflow-hidden bg-white">
        <form
          action={`/posts`}
          method="get"
          className="flex w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="number"
            name="id"
            placeholder="กรอก Post ID"
            className="flex-1 px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            id="postIdInput"
          />
          <button
            type="submit"
            onClick={() => {
              const input = document.getElementById("postIdInput") as HTMLInputElement;
              if (input?.value) window.location.href = `/posts/${input.value}`;
            }}
            className="bg-green-400 text-white px-6 py-3 font-semibold hover:bg-green-500 hover:scale-105 transition-transform duration-200"
          >
            ดูคอมเมนต์
          </button>
        </form>
      </div>
    </div>
  );
}
