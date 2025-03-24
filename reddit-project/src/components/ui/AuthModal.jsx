"use client";

import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function AuthModal({ type, onClose }) {
  const [isLogin, setIsLogin] = useState(type === "login"); // Set initial state based on prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Transparent Blurred Background (NO DARK OVERLAY) */}
      <div className="absolute inset-0 backdrop-blur-md bg-transparent" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="bg-white p-6 rounded-lg w-96 shadow-xl relative animate-fadeIn scale-100 transition-transform duration-200">
        
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Log In" : "Sign Up"}
        </h2>

        {/* Terms & Privacy Notice */}
        <p className="text-gray-500 text-sm text-center mb-4">
          By continuing, you agree to our{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            User Agreement
          </span>{" "}
          and acknowledge our{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            Privacy Policy
          </span>.
        </p>

        {/* Social Login Options */}
        <div className="space-y-2">
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-md p-2 hover:bg-gray-200 transition">
            <FcGoogle className="text-xl mr-2" />
            Continue with Google
          </button>
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-md p-2 hover:bg-gray-200 transition">
            <FaApple className="text-xl mr-2" />
            Continue with Apple
          </button>
        </div>

        {/* OR Separator */}
        <div className="flex items-center my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Form Fields */}
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Email or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="text-right text-sm">
            <span className="text-blue-500 cursor-pointer hover:underline">
              Forgot password?
            </span>
          </p>
          <button
            type="submit"
            className={`w-full p-2 rounded-md transition ${
              email && password
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!email || !password}
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        {/* Switch Between Login & Sign Up */}
        <p className="text-center mt-3 text-sm">
          {isLogin ? "New to Reddit?" : "Already have an account?"}{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </span>
        </p>
      </div>
    </div>
  );
}
