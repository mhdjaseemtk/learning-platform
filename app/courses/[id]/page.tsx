import api from "@/lib/axios";

type Lesson = {
  title: string;
  videoUrl: string;
};

type Course = {
  title: string;
  lessons: Lesson[];
};

export default async function CourseDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  console.log("Correct ID:", id);

  const res = await api.get(`/api/course/${id}`);
  const course: Course = res.data.course || res.data;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <div className="mt-6 space-y-6">
        {course.lessons.map((lesson: Lesson, index: number) => (
          <div key={index}>
            <h2 className="text-xl font-semibold">{lesson.title}</h2>
            <video
              src={lesson.videoUrl}
              controls
              className="w-full mt-2 rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
