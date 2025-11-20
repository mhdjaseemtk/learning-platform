"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-10 flex flex-col items-center gap-6 w-[350px]">
        
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Welcome
        </h2>

        <SignInButton>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium
                             hover:bg-blue-700 transition-all">
            Sign In
          </button>
        </SignInButton>

        <SignUpButton>
          <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-medium
                             hover:bg-gray-300 transition-all">
            Sign Up
          </button>
        </SignUpButton>

      </div>
    </div>
  );
}
