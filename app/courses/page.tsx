"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/lib/axios";


interface Course {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await api.get("/api/course");
        const data = res.data;   // ✅ FIXED

        console.log("Fetched courses:", data);

        if (data.success) {
          setCourses(data.courses);
        } else {
          setCourses(data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">All Courses</h1>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Link key={course._id} href={`/courses/${course._id}`}>
            <div
              className="
                bg-white 
                shadow-md 
                rounded-xl 
                overflow-hidden 
                hover:shadow-xl 
                hover:-translate-y-1 
                transition 
                duration-300 
                cursor-pointer
              "
            >
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt="thumbnail"
                  className="w-full h-full object-fit hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-900">
                  {course.title}
                </h2>

                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {course.description}
                </p>

                <button
                  className="
                    mt-4 
                    w-full 
                    py-2 
                    bg-blue-600 
                    text-white 
                    rounded-lg 
                    hover:bg-blue-700 
                    transition
                  "
                >
                  Watch Course →
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
