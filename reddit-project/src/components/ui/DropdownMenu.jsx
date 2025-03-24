"use client";

import { useState, useRef, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { FiBarChart2 } from "react-icons/fi";
import { BsBag } from "react-icons/bs";

export default function DropdownMenu({ onLoginClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Dots Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-200"
      >
        <span className="text-xl">⋯</span>
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200">
          <ul className="py-2">
            {/* Log In / Sign Up */}
            <li
              className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100"
              onClick={onLoginClick}
            >
              <FaSignInAlt className="mr-3 text-lg" />
              <span className="text-sm font-medium">Log In / Sign Up</span>
            </li>

            {/* Advertise on Reddit */}
            <li className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100">
              <HiSpeakerphone className="mr-3 text-lg" />
              <span className="text-sm font-medium">Advertise on Reddit</span>
            </li>

            {/* Try Reddit Pro */}
            <li className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100">
              <FiBarChart2 className="mr-3 text-lg" />
              <span className="text-sm font-medium">
                Try Reddit Pro <span className="text-orange-500 font-bold text-xs">BETA</span>
              </span>
            </li>

            {/* Shop Collectible Avatars */}
            <li className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100">
              <BsBag className="mr-3 text-lg" />
              <span className="text-sm font-medium">Shop Collectible Avatars</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
