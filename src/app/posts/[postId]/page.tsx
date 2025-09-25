import PostCommentsPage from "@/app/posts/[postId]/PostCommentsPage";

type Params = { params: { postId: string } };

export default function Page({ params }: Params) {
  // แปลง params.postId เป็น number แล้วส่งลง Client Component
  const postId = Number(params.postId);

  return <PostCommentsPage postId={postId} />;
}
