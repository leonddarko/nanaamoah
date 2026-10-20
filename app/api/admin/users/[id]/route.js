
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function DELETE(_req, context) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json(
        { message: "Unauthorized. Admin access required." },
        { status: 403 }
      );
    }

    const { id } = await context.params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json(
        { message: "Invalid user ID." },
        { status: 400 }
      );
    }

    if (id === session.user.id) {
      return NextResponse.json(
        { message: "You cannot delete your own account." },
        { status: 400 }
      );
    }

    await connectDB();

    const user = await User.findById(id).select("_id");

    if (!user) {
      return NextResponse.json(
        { message: "User not found." },
        { status: 404 }
      );
    }

    await User.deleteOne({ _id: user._id });

    return NextResponse.json({
      message: "User deleted successfully.",
    });
  } catch (error) {
    console.error("ADMIN USER DELETE ERROR:", error);

    return NextResponse.json(
      { message: "Unable to delete this user." },
      { status: 500 }
    );
  }
}
