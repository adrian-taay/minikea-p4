import React from "react";

export default function ProductSkeleton() {
  return (
    <div className="relative w-full flex flex-col items-start gap-3">
      <div className="relative w-full aspect-square bg-neutral-400 animate-pulse"></div>
      <div className="flex flex-col items-start w-full gap-2">
        <div className="bg-neutral-400 animate-pulse h-6 w-7/12 rounded-full"></div>
        <div className="bg-neutral-400 animate-pulse h-5 w-1/4 rounded-full"></div>
      </div>
    </div>
  );
}
