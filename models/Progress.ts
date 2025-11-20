import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  userId: String,
  courseId: String,
  completedLessons: Number,
  totalLessons: Number,
  isCompleted: Boolean
});

export default mongoose.models.Progress ||
  mongoose.model("Progress", progressSchema);
