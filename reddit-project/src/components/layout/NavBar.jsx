"use client";

import { useState, useEffect } from "react";
import { FaReddit } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { HiOutlineQrcode, HiOutlineLogin } from "react-icons/hi";
import { RiAdvertisementLine } from "react-icons/ri";
import { MdOutlineBarChart, MdOutlineShoppingBag } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs"; // Three-dot menu icon
import AuthModal from "../ui/AuthModal";
import GetAppModal from "../ui/GetAppModal";

export default function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [modalType, setModalType] = useState("login");
  const [isGetAppModalOpen, setIsGetAppModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-10">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-3">
        
        {/* Logo (Now Refreshes on Click) */}
        <a href="/" className="flex items-center space-x-1 mr-4">
          <FaReddit className="text-orange-600 text-3xl" />
          <h1 className="text-xl font-bold text-gray-800">reddit</h1>
        </a>

        {/* Search Bar */}
        <div className="relative flex items-center bg-gray-100 px-3 py-2 rounded-full w-[400px]">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search Reddit"
            className="bg-transparent outline-none ml-2 w-full"
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-2 items-center">
          {/* Get App Button */}
          <button
            className="flex items-center bg-gray-100 text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
            onClick={() => setIsGetAppModalOpen(true)}
          >
            <HiOutlineQrcode className="text-xl mr-2" />
            Get App
          </button>

          {/* Log In Button */}
          <button
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
            onClick={() => {
              setModalType("login");
              setIsAuthModalOpen(true);
            }}
          >
            Log In
          </button>

          {/* Three-Dot Dropdown Menu */}
          <div className="relative dropdown-container">
            <button
              className="p-2 rounded-full hover:bg-gray-200 transition"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <BsThreeDots className="text-xl" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-md rounded-lg overflow-hidden z-20">
                <button
                  className="flex items-center w-full px-4 py-3 hover:bg-gray-100 transition"
                  onClick={() => {
                    setModalType("login");
                    setIsAuthModalOpen(true);
                    setIsDropdownOpen(false);
                  }}
                >
                  <HiOutlineLogin className="text-xl mr-2" />
                  Log In / Sign Up
                </button>
                <button className="flex items-center w-full px-4 py-3 hover:bg-gray-100 transition">
                  <RiAdvertisementLine className="text-xl mr-2" />
                  Advertise on Reddit
                </button>
                <button className="flex items-center w-full px-4 py-3 hover:bg-gray-100 transition">
                  <MdOutlineBarChart className="text-xl mr-2" />
                  Try Reddit Pro <span className="text-orange-600 font-bold ml-1">BETA</span>
                </button>
                <button className="flex items-center w-full px-4 py-3 hover:bg-gray-100 transition">
                  <MdOutlineShoppingBag className="text-xl mr-2" />
                  Shop Collectible Avatars
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      {isAuthModalOpen && <AuthModal type={modalType} onClose={() => setIsAuthModalOpen(false)} />}
      {isGetAppModalOpen && <GetAppModal onClose={() => setIsGetAppModalOpen(false)} />}
    </header>
  );
}
