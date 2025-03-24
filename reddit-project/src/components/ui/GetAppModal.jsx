"use client";

import Image from "next/image";

export default function GetAppModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Transparent backdrop with blur (NO DARK OVERLAY) */}
      <div
        className="absolute inset-0 backdrop-blur-md bg-transparent"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white rounded-lg p-6 w-96 shadow-xl z-10 animate-fadeIn">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Modal Heading */}
        <h2 className="text-lg font-bold text-center mb-2">Get the Reddit app</h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          Scan this QR code to download the app now
        </p>

        {/* QR Code */}
        <div className="flex justify-center mb-4">
          <Image src="/qr.png" alt="QR Code" width={150} height={150} />
        </div>

        {/* Store Buttons */}
        <p className="text-sm text-gray-600 text-center mb-2">
          Or check it out in the app stores
        </p>
        <div className="flex justify-center space-x-2">
          <Image src="/google-play.svg" alt="Google Play" width={135} height={40} />
          <Image src="/app-store.svg" alt="App Store" width={120} height={40} />
        </div>
      </div>
    </div>
  );
}
