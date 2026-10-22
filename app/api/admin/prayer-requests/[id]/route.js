
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectDB from "@/lib/db";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PrayerRequest from "@/models/PrayerRequest";

const validStatuses = [
  "pending",
  "in-progress",
  "prayed-for",
  "closed",
];

async function requireAdmin() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return {
      authorized: false,
      response: NextResponse.json(
        { success: false, message: "Authentication required." },
        { status: 401 }
      ),
    };
  }

  if (session.user.role !== "admin") {
    return {
      authorized: false,
      response: NextResponse.json(
        { success: false, message: "Admin access required." },
        { status: 403 }
      ),
    };
  }

  return { authorized: true };
}

export async function PATCH(req, context) {
  try {
    const auth = await requireAdmin();
    if (!auth.authorized) return auth.response;

    const { id } = await context.params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid request ID." },
        { status: 400 }
      );
    }

    const body = await req.json();
    const updates = {};

    if (Object.hasOwn(body, "status")) {
      if (!validStatuses.includes(body.status)) {
        return NextResponse.json(
          { success: false, message: "Invalid status." },
          { status: 400 }
        );
      }

      updates.status = body.status;
    }

    if (Object.hasOwn(body, "isRead")) {
      if (typeof body.isRead !== "boolean") {
        return NextResponse.json(
          { success: false, message: "isRead must be a boolean." },
          { status: 400 }
        );
      }

      updates.isRead = body.isRead;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { success: false, message: "No valid updates provided." },
        { status: 400 }
      );
    }

    await connectDB();

    const request = await PrayerRequest.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    )
      .select(
        "_id firstName lastName email phone request status isRead createdAt updatedAt"
      )
      .lean();

    if (!request) {
      return NextResponse.json(
        { success: false, message: "Prayer request not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Prayer request updated.",
      request: {
        ...request,
        id: request._id.toString(),
        _id: undefined,
      },
    });
  } catch (error) {
    console.error("Admin prayer request PATCH error:", error);

    return NextResponse.json(
      { success: false, message: "Unable to update prayer request." },
      { status: 500 }
    );
  }
}

export async function DELETE(req, context) {
  try {
    const auth = await requireAdmin();
    if (!auth.authorized) return auth.response;

    const { id } = await context.params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid request ID." },
        { status: 400 }
      );
    }

    await connectDB();

    const deleted = await PrayerRequest.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Prayer request not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Prayer request deleted.",
    });
  } catch (error) {
    console.error("Admin prayer request DELETE error:", error);

    return NextResponse.json(
      { success: false, message: "Unable to delete prayer request." },
      { status: 500 }
    );
  }
}
