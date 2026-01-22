import React from "react";
import Profile from "./pages/Profile";

export default function App() {
  const path = window.location.pathname;
  if (path === "/profile") {
    return <Profile />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-400 via-orange-400 to-amber-600 flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent mb-8 drop-shadow-2xl">
        Google Authentication
      </h1>
      <a
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:-translate-y-1 active:scale-95 overflow-hidden btn"
        href="http://localhost:3000/auth/google"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 -skew-x-12 -rotate-2 opacity-50 group-hover:opacity-75 transition-all duration-500"></span>
        <span className="relative z-10 flex items-center space-x-3">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <span>Continue with Google</span>
        </span>
      </a>
    </div>
  );
}
