import Link from "next/link";
import PostShow from "@/components/posts/postShow";
import CommentList from "@/components/comments/commentList";
import CommentCreateForm from "@/components/comments/commentCreateForm";
import paths from "@/paths";
import { Suspense } from "react";
import PostShowLoading from "@/components/posts/postShowLoading";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return (
    <div className="space-y-3">
      <Link
        className="underline decoration-solid"
        href={paths.discussionShow(slug)}
      >
        {"< "}Back to {slug}
      </Link>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
}
