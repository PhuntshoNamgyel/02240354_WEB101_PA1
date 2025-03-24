"use client";

import { useState, useEffect } from "react";
import PostCard from "../ui/PostCard";

export default function PostFeed() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const posts = [
    {
      id: 1,
      subreddit: "r/mlbb",
      user: "ml/dorji",
      title: "7 winstreak in ranked!",
      image: "ws.PNG",
      upvotes: 4521,
      comments: 312,
    },
    {
      id: 2,
      subreddit: "r/mlbb",
      user: "ml/shacha",
      title: "Finally reached Immortal just before season end!",
      image: "immo.PNG",
      upvotes: 3789,
      comments: 212,
    },
    {
      id: 3,
      subreddit: "r/gaming",
      user: "u/gamerX",
      title: "New MLBB hero is so OP!",
      image: "kalea.jpg",
      upvotes: 5213,
      comments: 189,
    },
    {
      id: 4,
      subreddit: "r/memes",
      user: "u/laughingstock",
      title: "When you get matched with a troll teammate 😂",
      image: "troll.PNG",
      upvotes: 6321,
      comments: 412,
    },
    {
      id: 5,
      subreddit: "r/coc",
      user: "u/clashking",
      title: "Legend ezpz?",
      image: "legend.JPG",
      upvotes: 7290,
      comments: 537,
    },
  ];

  // Function to check if scrolled to the bottom
  const checkScrollPosition = () => {
    const bottom =
      document.documentElement.scrollHeight ===
      document.documentElement.scrollTop + window.innerHeight;
    setIsAtBottom(bottom);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <div className="space-y-4">
      {/* Your post cards */}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      {/* "You're all caught up" message below the last post */}
      {isAtBottom && (
        <div className="mt-8 p-4 flex flex-col items-center space-y-2 opacity-90 transition-opacity duration-500 ease-in-out">
          <img src="/reddit-logo.svg" alt="Reddit Logo" className="h-16 w-16" />
          <span className="text-xl font-semibold">You're all caught up!</span>
        </div>
      )}
    </div>
  );
}
