import Link from "next/link";
import SearchPostForm from "./SearchPostForm";

type Post = { id: number; title: string };

export default async function HomePage() {
  let posts: Post[] = [];

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("โหลดโพสต์ไม่สำเร็จ");
    posts = await res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

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

      {/* Client Component สำหรับค้นหาโพสต์ */}
      <div className="w-full max-w-md mb-6">
        <SearchPostForm />
      </div>

      {/* ตัวอย่างโพสต์แบบ scrollable */}
      <div className="w-full max-w-md h-[32rem] overflow-y-auto grid gap-4">
        {posts.slice(0, 20).map((post, idx) => (
          <Link
          key={post.id}
          href={`/posts/${post.id}`}
          className={`${colors[idx % colors.length]} ${textColors[idx % textColors.length]} rounded-xl p-4 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 block font-medium`}
          >
            {post.title}
            </Link>
          ))}
        </div>
    </div>
  );
}
