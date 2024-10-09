import PostList from "@/components/posts/postList";
import { redirect } from "next/navigation";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }

  return <PostList fetchData={() => fetchPostsBySearchTerm(term)} />;
}
