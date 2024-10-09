import DiscussionCreateForm from "@/components/discussions/discussionCreateForm";
import DiscussionList from "@/components/discussions/discussionList";
import PostList from "@/components/posts/postList";
import { fetchTopPosts } from "@/db/queries/posts";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="flex flex-row gap-4 p-4">
      <div className="w-full">
        <h1 className="text-xl m-2">Discussions</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="w-fit border shadow py-3 px-2">
        <DiscussionCreateForm />
        <Divider className="my-2" />
        <h3 className="text-lg">Discussions</h3>
        <DiscussionList />
      </div>
    </div>
  );
}
