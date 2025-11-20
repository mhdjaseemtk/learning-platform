"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import {SignedIn, UserButton} from '@clerk/nextjs'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Image from "next/image";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface Course {
  _id: string;
  title: string;
  thumbnail: string;
}

interface StatsInt {
  totalUsers: number;
  totalCourses: number;
  completedCourses: number;
}



export default function AdminDashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
const [stats, setStats] = useState<StatsInt | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const coursesRes = await api.get("/api/course");
        const statsRes = await fetch("/api/admin/stats");
        const statsData = await statsRes.json();

        if (coursesRes.data.success) setCourses(coursesRes.data.courses);
        if (statsData.success) setStats(statsData);
      } catch (error) {
        console.error("Error loading admin data:", error);
      }
    }

    loadData();
  }, []);
  console.log('====================================');
  console.log(stats);
  console.log('====================================');

  const chartData = stats
    ? {
        labels: ["Users", "Courses", "Completed"],
        datasets: [
          {
            label: "Admin Stats",
            data: [
              stats.totalUsers,
              stats.totalCourses,
              stats.completedCourses,
            ],
            backgroundColor: [
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
              "rgba(75, 192, 192, 0.7)",
            ],
            borderWidth: 2,
          },
        ],
      }
    : null;

  async function deleteCourse(id: string) {
    if (!confirm("Are you sure you want to delete this course?")) return;

    try {
      await api.delete(`/api/course/${id}`);
      setCourses((prev) => prev.filter((c) => c._id !== id));
      alert("Course deleted!");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Delete failed");
    }
  }

  return (
<SignedIn>    
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-md p-5">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

        <nav className="flex flex-col gap-4">
          <Link href="/admin" className="text-lg hover:text-blue-600">
            Dashboard
          </Link>

          <Link
            href="/admin/add-course"
            className="text-lg hover:text-blue-600"
          >
             Add Course
          </Link>

          <Link href="/courses" className="text-lg hover:text-blue-600">
            View Courses
          </Link>
          <div className="justify-center items-center  p-2">
         <h1>  Profile </h1>
           <SignedIn><UserButton/></SignedIn>
        </div>
        </nav>
      </aside>

      <main className="flex-1 p-8">

        <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            <div className="bg-white shadow p-5 rounded">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-3xl font-bold text-blue-600">
                {stats.totalUsers}
              </p>
            </div>

            <div className="bg-white shadow p-5 rounded">
              <h3 className="text-lg font-semibold">Total Courses</h3>
              <p className="text-3xl font-bold text-yellow-600">
                {stats.totalCourses}
              </p>
            </div>

            <div className="bg-white shadow p-5 rounded">
              <h3 className="text-lg font-semibold">Completed Courses</h3>
              <p className="text-3xl font-bold text-green-600">
                {stats.completedCourses}
              </p>
            </div>

          </div>
        )}

        
        {chartData && (
          <div className="bg-white p-6 rounded shadow mb-10">
            <h3 className="text-lg font-semibold mb-4">
              Platform Statistics
            </h3>
            <Bar data={chartData} />
          </div>
        )}

        {/* COURSE LIST */}
        <h2 className="text-2xl font-bold mb-4">Manage Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course._id} className="bg-white shadow rounded-lg p-4">

              
            <Image
  src={course.thumbnail}
  alt="Thumbnail"
  width={500}          
  height={300}         
  className="w-full h-32 object-cover rounded"
/>

              <h3 className="text-xl font-semibold mt-3">{course.title}</h3>

              <div className="flex gap-3 mt-4">
               <Link
  href={`/admin/edit/${course._id}`}
  className="bg-yellow-500 text-white px-3 py-1 rounded"
>
  Edit
</Link>


                <Link
                  href={`/courses/${course._id}`}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  View
                </Link>

                <button
                  onClick={() => deleteCourse(course._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>

            </div>
          ))}
        </div>
      </main>
    </div>
    </SignedIn>
    
  );
}
