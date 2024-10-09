import { db } from "@/db";
import paths from "@/paths";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

export default async function DiscussionList() {
  const discussions = await db.discussion.findMany();

  const renderedDiscussions = discussions.map((discussion) => {
    return (
      <div key={discussion.id}>
        <Link href={paths.discussionShow(discussion.slug)}>
          <Chip color="warning" variant="shadow">
            {discussion.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return (
    <div className="flex flex-col flex-wrap gap-2">{renderedDiscussions}</div>
  );
}
