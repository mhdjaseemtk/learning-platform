"use client";
import { useRouter } from "next/navigation";


import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
    const router = useRouter();

  return (
    <div className="bg-[#F8FDFB] min-h-screen overflow-hidden">
      <Navbar />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-10 pt-14">

        <div className="flex flex-col justify-center relative">

          <div className="absolute -left-10 -top-10 w-[450px] h-[450px] rounded-full border border-green-300 opacity-40"></div>
          <div className="absolute -left-20 top-20 w-[300px] h-[300px] rounded-full border border-green-200 opacity-30"></div>

          <h1 className="text-[40px] font-extrabold text-gray-900 leading-tight relative z-10">
            Up Your <span className="text-[rgba(32,180,134,1)]">Skills</span> <br />
            To <span className="text-[rgba(32,180,134,1)]">Advance</span> Your <br />
            Career Path
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-md relative z-10">
            Learn UI–UX Design skills with Weekend UX. The latest online learning system
            and material that help your knowledge growing.
          </p>

          <div className="flex gap-4 mt-8 relative z-10">
           <button
      onClick={() => router.push("/courses")}
      className="px-6 py-3 bg-[rgba(32,180,134,1)] text-white rounded-lg shadow hover:bg-green-700 transition"
    >
      Get Started
    </button>

            <button
              onClick={() => router.push("/courses")}
             className="px-6 py-3 bg-white border border-green-400 text-[rgba(32,180,134,1)] rounded-lg shadow hover:bg-green-50 transition">

              Get free trial
            </button>
          </div>

          <div className="flex gap-6 mt-10 text-gray-700 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              Public Speaking
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              Career-Oriented
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-400"></span>
              Creative Thinking
            </div>
          </div>

        </div>

        <div className="relative flex justify-center">

<div className="relative w-[420px] h-[420px]">
  
  <div className="absolute w-full h-full bg-[rgba(32,180,134,1)] rounded-full"></div>

  <div className="absolute inset-0 overflow-hidden rounded-full">
    <Image
      src="/hero-girl.png"
      alt="logo"
      width={300}
      height={300}
      className="object-contain pt-7 w-full h-full"
    />
  </div>

</div>


          <div className="absolute top-5 right-0 bg-white shadow-lg rounded-xl px-5 py-3">
            <h2 className="text-xl font-bold text-gray-700 text-right">5K+</h2>
            <p className="text-gray-500 text-sm text-right">Online Courses</p>
          </div>

          <div className="absolute top-40 -left-5 bg-white shadow-lg rounded-xl px-5 py-3 flex items-center gap-2">
            <div className="p-2 bg-green-100 rounded-lg">📗</div>
            <div>
              <h2 className="text-xl font-bold text-gray-700">2K+</h2>
              <p className="text-gray-500 text-sm">Video Courses</p>
            </div>
          </div>

          <div className="absolute bottom-5 right-5 bg-white shadow-lg rounded-xl px-5 py-3 flex items-center gap-2">
            <div className="p-2 bg-green-100 rounded-lg">👨‍🏫</div>
            <div>
              <h2 className="text-xl font-bold text-gray-700">250+</h2>
              <p className="text-gray-500 text-sm">Tutors</p>
            </div>
          </div>

        </div>
      </div>

 
      <div className="max-w-7xl mx-auto mt-6 flex justify-between px-10 opacity-80">
        <span className="text-lg font-bold text-[rgba(32,180,134,1)]">250+ Collaboration</span>
        <img src="/logo-duolingo.png" className="h-8" />
        <img src="/logo-codecov.png" className="h-8" />
        <img src="/logo-usertesting.png" className="h-8" />
        <img src="/logo-magicleap.png" className="h-8" />
      </div>
<div className="h-screen w-full"></div>
<Footer/>
    </div>
  );
}
