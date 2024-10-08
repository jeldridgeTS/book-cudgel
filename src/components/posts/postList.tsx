import type { PostWithData } from "@/db/queries/posts";
import Link from "next/link";
import paths from "@/paths";

interface PostListProps {
  fetchData: () => Promise<PostWithData[]>;
}

export default async function PostList({ fetchData }: PostListProps) {
  const posts = await fetchData();

  const renderedPosts = posts.map((post) => {
    const discussionSlug = post.discussion.slug;

    if (!discussionSlug) {
      throw new Error("Need a slug to link to a post");
    }

    return (
      <div key={post.id} className="border rounded p-2">
        <Link href={paths.postShow(discussionSlug, post.id)}>
          <div className="flex flex-row justify-between">
            <h3 className="text-lg font-bold">{post.title}</h3>
            <Link className="text-xs text-gray-400" href={"#"}>
              In:
              <span className="text-xs text-gray-600 font-bold hover:text-danger">{` ${discussionSlug}`}</span>
            </Link>
          </div>
          <div className="flex flex-row gap-8">
            <p className="text-xs text-gray-400">By {post.user.name}</p>
            <p className="text-xs text-gray-400">
              {post._count.comments} comments
            </p>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}
