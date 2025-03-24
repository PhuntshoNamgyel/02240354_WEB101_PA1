"use client";
import dynamic from "next/dynamic";

// ✅ Lazy load PopularCommunities to prevent unnecessary fetch calls
const PopularCommunities = dynamic(() => import("./PopularCommunities"), {
  ssr: false,
});

export default function RightSidebar() {
  return (
    <aside className="w-64 p-4"> {/* Removed bg-white, shadow-md, and rounded-lg */}
      <PopularCommunities />
    </aside>
  );
}
