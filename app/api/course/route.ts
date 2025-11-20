import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Course from "@/models/course";


export async function GET() {
  try {
    await connectDB();

    const courses = await Course.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      courses,
    });
  } catch (error) {
    console.log("GET Courses Error:", error);
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { title, description, thumbnail, lessons } = body;

    const course = await Course.create({
      title,
      description,
      thumbnail,
      lessons,
    });

    return NextResponse.json({ success: true, course });
  } catch (error) {
    console.log("Create Course Error:", error);
    return NextResponse.json(
      { success: false, error: "Server hello" },
      { status: 500 }
    );
  }
}



