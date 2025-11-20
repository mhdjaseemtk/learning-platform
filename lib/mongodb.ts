import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://jaseemdevxtra_db_user:uZvK0aBdUAu2oc9V@cluster0.ruhxqhc.mongodb.net/learning_platform?retryWrites=true&w=majority";

export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      return console.log("MongoDB already connected");
    }

    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Error:", error);
    throw new Error("Database connection failed");
  }
}
