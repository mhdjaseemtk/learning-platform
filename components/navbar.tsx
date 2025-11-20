import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <div>
      <ul className="flex items-center justify-center text-[17px]  text-gray-700 text-center select-none cursor-pointer gap-5 py-6">
        
        <li>
          <Image
            src="/log.png"
            alt="log"
            width={60}
            height={60}
          />
        </li>

        <li>
          <div className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-sm w-64">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 w-full bg-transparent outline-none"
            />
          </div>
        </li>

        <li><a>Home</a></li>
        <li><a>About us</a></li>
        <li><Link href="/courses">Courses</Link></li>
        <li><a>Contact us</a></li>
        <li><a>FAQ</a></li>
        <li><SignedOut><SignInButton/></SignedOut></li>
        <li><SignedIn><UserButton/></SignedIn></li>
        <li><SignedOut><SignUpButton/></SignedOut></li>
      </ul>
    </div>
  )
}
