import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectDB from "@/lib/db";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Testimony from "@/models/Testimony";

const VALID_STATUSES = ["pending", "approved", "rejected"];

async function requireAdmin() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return {
      authorized: false,
      response: NextResponse.json(
        { success: false, message: "Authentication required." },
        { status: 401 },
      ),
    };
  }

  if (session.user.role !== "admin") {
    return {
      authorized: false,
      response: NextResponse.json(
        { success: false, message: "Admin access required." },
        { status: 403 },
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
        { success: false, message: "Invalid testimony ID." },
        { status: 400 },
      );
    }

    const body = await req.json();
    const updates = {};

    if (Object.hasOwn(body, "status")) {
      if (!VALID_STATUSES.includes(body.status)) {
        return NextResponse.json(
          { success: false, message: "Invalid testimony status." },
          { status: 400 },
        );
      }

      updates.status = body.status;
    }

    if (Object.hasOwn(body, "isRead")) {
      if (typeof body.isRead !== "boolean") {
        return NextResponse.json(
          { success: false, message: "isRead must be a boolean." },
          { status: 400 },
        );
      }

      updates.isRead = body.isRead;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { success: false, message: "No valid updates provided." },
        { status: 400 },
      );
    }

    await connectDB();

    if (updates.status === "approved") {
      const existing = await Testimony.findById(id)
        .select("publicationConsent")
        .lean();

      if (!existing) {
        return NextResponse.json(
          { success: false, message: "Testimony not found." },
          { status: 404 },
        );
      }

      if (existing.publicationConsent !== true) {
        return NextResponse.json(
          {
            success: false,
            message: "Publication consent is required before approval.",
          },
          { status: 403 },
        );
      }
    }

    const testimony = await Testimony.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true },
    )
      .select(
        "_id firstName lastName email country title testimony category isAnonymous publicationConsent status isRead createdAt updatedAt",
      )
      .lean();

    if (!testimony) {
      return NextResponse.json(
        { success: false, message: "Testimony not found." },
        { status: 404 },
      );
    }

    const { _id, ...item } = testimony;

    return NextResponse.json({
      success: true,
      message: "Testimony updated successfully.",
      testimony: { ...item, id: _id.toString() },
    });
  } catch (error) {
    console.error("Admin testimony PATCH error:", error);

    return NextResponse.json(
      { success: false, message: "Unable to update testimony." },
      { status: 500 },
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
        { success: false, message: "Invalid testimony ID." },
        { status: 400 },
      );
    }

    await connectDB();

    const deleted = await Testimony.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Testimony not found." },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Testimony deleted successfully.",
    });
  } catch (error) {
    console.error("Admin testimony DELETE error:", error);

    return NextResponse.json(
      { success: false, message: "Unable to delete testimony." },
      { status: 500 },
    );
  }
}
