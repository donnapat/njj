import Comments from "@/app/post-client/Comments";

type Post = { id: number; title: string; body: string };
type Params = { params: { id: string } };

export default async function PostDetailPage({ params }: Params) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post: Post = await res.json();

  return (
    <div className="min-h-screen p-6 bg-green-50 flex flex-col items-center">
      <div className="w-full max-w-xl bg-green-100 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-green-900">{post.title}</h1>
        <p className="mt-2 text-green-800">{post.body}</p>

        <h2 className="mt-6 text-xl font-semibold text-green-700">💬 Comments</h2>
        <Comments postId={Number(params.id)} />
      </div>
    </div>
  );
}
