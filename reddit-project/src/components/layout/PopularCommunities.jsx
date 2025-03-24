"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PopularCommunities() {
  const [communities, setCommunities] = useState([]);
  const [failedImages, setFailedImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchPopularCommunities() {
      try {
        const response = await fetch(
          "https://www.reddit.com/subreddits/popular.json?limit=5"
        );
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        if (!isMounted) return;

        const formattedData = data.data.children.slice(0, 5).map((subreddit) => {
          let icon =
            subreddit.data.icon_img || subreddit.data.community_icon || "";

          if (!icon || icon.trim() === "") {
            icon = "/default-subreddit-icon.png";
          } else if (icon.includes("?")) {
            icon = icon.split("?")[0]; // Remove query parameters
          }

          return {
            name: subreddit.data.display_name_prefixed,
            members: subreddit.data.subscribers.toLocaleString(),
            icon,
          };
        });

        setCommunities(formattedData);
      } catch (error) {
        console.error("Error fetching subreddits:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPopularCommunities();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleImageError = (index) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="w-full p-4 bg-gray-100 rounded-md">
      <h2 className="text-lg font-bold mb-3">Popular Communities</h2>

      {loading ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-sm text-red-500">Failed to load communities.</p>
      ) : (
        <ul>
          {communities.map((community, index) => (
            <li key={index} className="py-2 flex items-center gap-3 border-b last:border-none">
              <img
                src={failedImages[index] ? "/default-subreddit-icon.png" : community.icon}
                alt={community.name}
                className="w-8 h-8 rounded-full object-cover"
                onError={() => handleImageError(index)}
              />
              
              <Link href={`/${community.name}`} className="flex-1 text-sm text-gray-800 hover:underline">
                <span className="font-medium">{community.name}</span>
                <span className="block text-gray-500 text-xs">{community.members} members</span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3">
        <Link href="/r/popular">
          <button className="w-full text-blue-600 hover:bg-gray-200 py-2 rounded-lg text-sm font-medium">
            See more
          </button>
        </Link>
      </div>
    </div>
  );
}
