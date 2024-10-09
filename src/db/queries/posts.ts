import type { Post } from "@prisma/client";
import { db } from "@/db";

export type PostWithData = Post & {
  discussion: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

// Alternate type def
export type EnrichedPost = Awaited<
  ReturnType<typeof fetchPostsByDiscussionSlug>
>[number];

export function fetchPostsByDiscussionSlug(
  slug: string
): Promise<PostWithData[]> {
  return db.post.findMany({
    where: { discussion: { slug } },
    include: {
      discussion: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
}
