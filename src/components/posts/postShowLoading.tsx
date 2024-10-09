import { Skeleton } from "@nextui-org/react";

export default function PostShowLoading() {
  return (
    <div className="m-4">
      <div className="my-2">
        <Skeleton className="rounded-lg h-8 w-full" />
      </div>
      <div className="p-4 border rounded space-y-2">
        <Skeleton className="rounded-lg h-24 w-full" />
      </div>
    </div>
  );
}
