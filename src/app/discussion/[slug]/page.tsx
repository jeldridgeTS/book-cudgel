import PostCreateForm from "@/components/posts/postCreateForm";
import PostList from "@/components/posts/postList";
import { fetchPostsByDiscussionSlug } from "@/db/queries/posts";

interface DiscussionShowPageProps {
  params: {
    slug: string;
  };
}

export default function DiscussionShowPage({
  params,
}: DiscussionShowPageProps) {
  const { slug } = params;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostsByDiscussionSlug(params.slug)} />
      </div>

      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}
