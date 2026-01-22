import React, { useState } from "react";

export default function Profile() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name") || "User";
  const email = params.get("email") || "";
  const rawImg = params.get("img") || "";
  const decodedImg = rawImg ? decodeURIComponent(rawImg) : "";
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center justify-center p-8">
      {/* Profile Card */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 max-w-md w-full p-10 transform hover:scale-[1.02] transition-all duration-300">
        {/* Welcome Header */}
        <div className="text-center mb-10">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 shadow-2xl border-4 border-white flex items-center justify-center">
            {!decodedImg || imgError ? (
              <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                {name.charAt(0).toUpperCase()}
              </div>
            ) : (
              <img
                src={decodedImg}
                alt="profile"
                className="w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white"
                onError={() => setImgError(true)}
              />
            )}
          </div>
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-2 drop-shadow-lg">
            Welcome, {name}!
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Email Display */}
        <div className="mb-10">
          <p className="text-lg text-gray-700 font-medium bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-3 rounded-2xl backdrop-blur-sm border border-gray-200 text-center shadow-sm">
            {email || "No email provided"}
          </p>
        </div>

        {/* Back Button */}
        <a
          href="/"
          className="group relative w-full block py-4 px-8 text-lg font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 transform -skew-x-12 -rotate-2 scale-0 group-hover:scale-100 transition-transform duration-500"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          <span className="relative z-10 flex items-center justify-center space-x-3">
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Go to Home</span>
          </span>
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-purple-400/20 to-pink-400/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>
    </div>
  );
}
