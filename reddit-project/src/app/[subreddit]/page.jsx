"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function SubredditPage() {
    const params = useParams();
    const subreddit = params.subreddit; // Correct way to get subreddit name
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=6`);
                if (!response.ok) throw new Error("Failed to fetch data");

                const data = await response.json();
                const formattedPosts = data.data.children.map(post => ({
                    title: post.data.title,
                    selftext: post.data.selftext || "No description available.",
                    ups: post.data.ups,
                    num_comments: post.data.num_comments
                }));

                setPosts(formattedPosts);
            } catch (error) {
                console.error("Error fetching subreddit posts:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, [subreddit]);

    return (
        <div className="p-4 max-w-3xl mx-auto">
            {/* Subreddit Header */}
            <div className="bg-orange-500 text-white py-4 px-6 rounded-md">
                <h2 className="text-2xl font-bold">r/{subreddit}</h2>
                <p className="text-sm text-white/80 mt-1">Welcome to the {subreddit} community</p>
            </div>

            {/* List of Posts */}
            <div className="mt-6 space-y-4">
                {loading ? (
                    <p className="text-center text-gray-500">Loading posts...</p>
                ) : error ? (
                    <p className="text-center text-red-500">Failed to load posts.</p>
                ) : posts.length > 0 ? (
                    posts.map((post, index) => (
                        <div key={index} className="bg-white p-4 rounded-md shadow-md border">
                            <h3 className="text-lg font-semibold">{post.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{post.selftext}</p>

                            {/* Post Meta */}
                            <div className="flex items-center text-xs text-gray-500 mt-2">
                                <span className="mr-3">👍 {post.ups} Upvotes</span>
                                <span>💬 {post.num_comments} Comments</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No posts found.</p>
                )}
            </div>
        </div>
    );
}
