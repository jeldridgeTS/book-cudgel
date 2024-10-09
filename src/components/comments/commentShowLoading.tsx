import { Skeleton } from "@nextui-org/react";

export default function CommentShowLoading() {
  return (
    <div className="p-4 border mt-2 mb-1">
      <div className="flex gap-3">
        <Skeleton className="flex rounded-full w-12 h-12" />
        <div className="flex-1 space-y-3">
          <p className="text-sm font-medium text-gray-500">
            <Skeleton className="h-3 w-1/5 rounded-lg" />
          </p>
          <p className="text-gray-900">
            <Skeleton className="h-3 w-4/5 rounded-lg" />
          </p>
        </div>
      </div>
    </div>
  );
}
