"use client";
import Link from "next/link";
import { FaHome, FaFire, FaSearch } from "react-icons/fa";
import dynamic from "next/dynamic";

// ✅ Lazy load RightSidebar to prevent unnecessary initial render
const RightSidebar = dynamic(() => import("../components/layout/RightSidebar"), {
  ssr: false,
});

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="md:w-60 w-16 border-r fixed h-full overflow-y-auto bg-white">
        <div className="p-4">
          <Link href="/" className="text-3xl font-bold text-red-600 flex items-center">
            Reddit
          </Link>
        </div>

        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="flex items-center p-3 hover:bg-gray-200 rounded-md mx-2">
                <FaHome className="text-xl mr-3" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/popular" className="flex items-center p-3 hover:bg-gray-200 rounded-md mx-2">
                <FaFire className="text-xl mr-3" />
                <span>Popular</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Log In Button */}
        <div className="px-3 py-4">
          <Link href="/login">
            <button className="w-full bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
              Log in
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content & Right Sidebar */}
      <div className="md:ml-60 ml-16 flex-1 flex">
        <div className="max-w-[750px] mx-auto flex-1">
          {/* Top Header with Search */}
          <header className="h-16 border-b flex items-center justify-between px-4 bg-white shadow-md">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Reddit"
                  className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-full"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-4">{children}</main>
        </div>

        {/* Right Sidebar (Popular Communities) */}
        <aside className="hidden lg:block w-80 p-4">
          <RightSidebar /> {/* ✅ Lazy Loaded for Optimization */}
        </aside>
      </div>
    </div>
  );
}
