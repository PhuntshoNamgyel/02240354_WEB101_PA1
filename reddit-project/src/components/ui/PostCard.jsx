import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineComment,
} from "react-icons/ai";

export default function PostCard({ post }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
      <div className="flex items-center space-x-2 text-gray-500 text-sm">
        <span className="font-semibold">{post.subreddit}</span>
        <span>•</span>
        <span>{post.user}</span>
      </div>

      <h2 className="text-lg font-bold mt-2">{post.title}</h2>

      {post.image && (
        <img
          src={`/${post.image}`}
          alt={`Post image: ${post.title}`}
          className="w-full max-h-[500px] object-contain mt-2 rounded-md"
        />
      )}

      <div className="flex items-center justify-between text-gray-500 mt-2">
        <div className="flex items-center space-x-2">
          <button className="hover:text-red-500">
            <AiOutlineArrowUp />
          </button>
          <span>{post.upvotes}</span>
          <button className="hover:text-blue-500">
            <AiOutlineArrowDown />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <AiOutlineComment />
          <span>{post.comments} Comments</span>
        </div>
      </div>
    </div>
  );
}
