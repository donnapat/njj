import Link from "next/link";

type Post = { id: number; title: string };

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl">Posts</h1>
      <ul className="list-disc pl-4">
        {posts.slice(0, 5).map((p) => (
          <li key={p.id}>
            <Link href={`/post/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
