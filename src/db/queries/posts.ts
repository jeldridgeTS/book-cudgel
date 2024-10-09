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

export function fetchPostsBySearchTerm(term: string): Promise<PostWithData[]> {
  return db.post.findMany({
    include: {
      discussion: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
    where: {
      OR: [{ title: { contains: term } }, { content: { contains: term } }],
    },
  });
}

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

export function fetchTopPosts(): Promise<PostWithData[]> {
  return db.post.findMany({
    orderBy: [
      {
        comments: {
          _count: "desc",
        },
      },
    ],
    include: {
      discussion: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
    take: 10,
  });
}
