import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Course from "@/models/course";

export async function GET( request:Request, {params}: {
  params: Promise<{ id: string }>
}) {

    const { id } = await params;
    
 

  console.log("haihahahahha ID:", id);
  try {
    
    await connectDB();

    const course = await Course.findById(id);

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json({ course });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}



export async function DELETE( request:Request, {params}: {
  params: Promise<{ id: string }>
}) {
  try {
    await connectDB();

    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Course ID is required" },
        { status: 400 }
      );
    }

    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return NextResponse.json(
        { success: false, message: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Course deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE Course Error:", error);
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}

