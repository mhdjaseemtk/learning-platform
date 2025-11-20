"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <Image src="/logo.png" alt="Logo" width={120} height={40} />
          <p className="mt-4 text-sm">
            Building modern, scalable web applications using Next.js, Tailwind, and more.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-3">Get updates on new courses and offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg focus:outline-none text-black"
            />
            <button className="bg-green-500 px-4 py-2 rounded-r-lg text-white">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Your Website. All rights reserved.
      </div>
    </footer>
  );
}
