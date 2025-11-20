import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Course from "@/models/course";
import Progress from "@/models/Progress";
import { clerkClient } from "@clerk/clerk-sdk-node";

export async function GET() {
  try {
    await connectDB();

   

    const userList = await clerkClient.users.getUserList();

    console.log( userList)

    const totalUsers = userList.totalCount;


    const totalCourses = await Course.countDocuments();
    const completedCourses = await Progress.countDocuments({
      isCompleted: true,
    });

    return NextResponse.json({
      success: true,
      totalUsers,
      totalCourses,
      completedCourses,
    });
  } catch (error) {
    console.error("  ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error ?? String(error),
      },
      { status: 500 }
    );
  }
}
