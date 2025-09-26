import PostCommentsPage from "./PostCommentsPage";

export default function Page({ params }: { params: { postId: string } }) {
  const postId = Number(params.postId);
  return <PostCommentsPage postId={postId} />;
}
