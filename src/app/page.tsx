import DiscussionCreateForm from "@/components/discussions/discussionCreateForm";
import DiscussionList from "@/components/discussions/discussionList";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Discussions</h1>
      </div>
      <div className="border shadow py-3 px-2">
        <DiscussionCreateForm />
        <Divider className="my-2" />
        <h3 className="text-lg">Discussions</h3>
        <DiscussionList />
      </div>
    </div>
  );
}
