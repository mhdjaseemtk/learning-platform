"use client";
import { useState } from "react";

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [lessons, setLessons] = useState([{ title: "", videoUrl: "" }]);

 interface Lesson {
  title: string;
  description: string;
  videoUrl: string;
}

  function addLesson() {
    setLessons((prev) => [...prev, { title: "", videoUrl: "" }]);
  }

 function updateLesson<T extends keyof Lesson>(index: number, key: T, value: Lesson[T]) {
  setLessons((prev) => {
    const updated = [...prev];
    updated[index] = { ...updated[index], [key]: value };
    return updated;
  });
}


async function uploadVideo(
  e: React.ChangeEvent<HTMLInputElement>,
  index: number
) {
  const file = e.target.files?.[0];  
  if (!file) return;

    const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    if (!preset || !cloud) {
      alert("Cloudinary ENV variables missing!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset);

    const upload = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud}/video/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await upload.json();
    console.log("Cloudinary Response:", data);

    const videoURL = data.secure_url || data.url;
    if (!videoURL) {
      alert("Upload failed!");
      return;
    }

    setLessons((prev) => {
      const updated = [...prev];
      updated[index].videoUrl = videoURL;
      return updated;
    });

    alert("Video Uploaded Successfully!");
  }

  async function saveCourse() {
    console.log("FINAL LESSONS:", lessons); 

    const res = await fetch("/api/course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        thumbnail,
        lessons,
      }),
    });

    const data = await res.json();
    console.log("SAVE RESPONSE:", data);

    if (!data.success) {
      alert("Error saving course!");
      return;
    }

    alert("Course Added Successfully!");
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Add New Course</h1>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Course Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-3"
        placeholder="Course Description"
        onChange={(e) => setDesc(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3"
        placeholder="Thumbnail Image URL"
        onChange={(e) => setThumbnail(e.target.value)}
      />

      <h2 className="text-lg font-semibold mb-2">Lessons</h2>

      {lessons.map((lesson, index) => (
        <div key={index} className="border p-3 mb-3 rounded bg-gray-50">
       
          <input
            className="border p-2 w-full mb-2"
            placeholder="Lesson Title"
            value={lesson.title}
            onChange={(e) => updateLesson(index, "title", e.target.value)}
          />

          <input
            type="file"
            accept="video/*"
            className="border p-2 w-full mb-2"
            onChange={(e) => uploadVideo(e, index)}
          />

          {lesson.videoUrl && (
            <p className="text-green-600 text-sm mt-1">
              Uploaded: {lesson.videoUrl}
            </p>
          )}
        </div>
      ))}

      <button
        onClick={addLesson}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        + Add Another Lesson
      </button>

      <button
        onClick={saveCourse}
        className="bg-blue-600 text-white px-4 py-2 rounded ml-4"
      >
        Save Course
      </button>
    </div>
  );
}
