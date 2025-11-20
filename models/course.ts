import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
});

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String },
    lessons: [LessonSchema],
  },
  { timestamps: true }
);

export default mongoose.models.Course ||
  mongoose.model("Course", CourseSchema);
