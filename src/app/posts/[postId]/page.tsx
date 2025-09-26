import PostCommentsPage from "./PostCommentsPage";

type Props = { params: { postId: string } };

export default function Page({ params }: Props) {
  const postId = Number(params.postId);

  // ตรวจสอบว่า postId เป็นตัวเลข
  if (isNaN(postId)) {
    return (
      <p className="text-red-500 text-center py-4">
        รหัสโพสต์ไม่ถูกต้อง
      </p>
    );
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <PostCommentsPage postId={postId} />
    </div>
  );
}
