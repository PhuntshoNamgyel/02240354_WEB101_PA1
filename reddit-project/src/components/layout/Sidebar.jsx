"use client";

import { AiOutlineHome, AiOutlineFire } from "react-icons/ai";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FaGamepad, FaFilm, FaLightbulb, FaRobot, FaGlobe } from "react-icons/fa";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Sidebar() {
  const [showTopics, setShowTopics] = useState(false);
  const [showRecent, setShowRecent] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const handleHomeClick = () => {
    if (pathname === "/") {
      window.location.reload(); // Refresh if already on home
    } else {
      router.push("/");
    }
  };

  return (
    <aside className="w-64 p-4 bg-white shadow-md h-screen fixed top-16 left-0 overflow-y-auto">
      <ul className="space-y-4">
        {/* Home & Popular */}
        <li
          className="flex items-center space-x-2 text-lg font-semibold cursor-pointer hover:bg-gray-200 p-2 rounded-md transition"
          onClick={handleHomeClick}
        >
          <AiOutlineHome className="text-blue-600" />
          <span>Home</span>
        </li>

        <li
          className="flex items-center space-x-2 text-lg font-semibold cursor-pointer hover:bg-gray-200 p-2 rounded-md transition"
          onClick={() => router.push("/popular")}
        >
          <AiOutlineFire className="text-red-500" />
          <span>Popular</span>
        </li>

        {/* Topics (Collapsible Section) */}
        <li>
          <div
            className="flex items-center justify-between text-lg font-semibold cursor-pointer p-2 rounded-md hover:bg-gray-200 transition"
            onClick={() => setShowTopics(!showTopics)}
          >
            <span>Topics</span>
            {showTopics ? <BiChevronUp /> : <BiChevronDown />}
          </div>

          {showTopics && (
            <ul className="pl-4 space-y-2 mt-2">
              <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
                <FaGlobe className="text-gray-500" />
                <span>Internet Culture</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
                <FaGamepad className="text-gray-500" />
                <span>Games</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
                <FaLightbulb className="text-gray-500" />
                <span>Q&As</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
                <FaRobot className="text-gray-500" />
                <span>Technology</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
                <FaGlobe className="text-gray-500" />
                <span>Pop Culture</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
                <FaFilm className="text-gray-500" />
                <span>Movies & TV</span>
              </li>
              <li className="text-blue-500 cursor-pointer">See more</li>
            </ul>
          )}
        </li>

        {/* Recent Subreddits (Collapsible) */}
        <li>
          <div
            className="flex items-center justify-between text-lg font-semibold cursor-pointer p-2 rounded-md hover:bg-gray-200 transition"
            onClick={() => setShowRecent(!showRecent)}
          >
            <span>Recent</span>
            {showRecent ? <BiChevronUp /> : <BiChevronDown />}
          </div>

          {showRecent && (
            <ul className="pl-4 space-y-2 mt-2">
              <li className="cursor-pointer hover:text-blue-500">r/tryhackme</li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}
