import CommentShow from "@/components/comments/commentShow";
import { fetchCommentsByPostId } from "@/db/queries/comments";
import { Suspense } from "react";
import CommentShowLoading from "@/components/comments/commentShowLoading";
interface CommentListProps {
  postId: string;
}

// TODO: Get a list of comments from somewhere
export default async function CommentList({ postId }: CommentListProps) {
  const comments = await fetchCommentsByPostId(postId);

  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <Suspense fallback={<CommentShowLoading />}>
        <CommentShow key={comment.id} commentId={comment.id} postId={postId} />
      </Suspense>
    );
  });

  return (
    <div className="space-y-3 pb-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
}
