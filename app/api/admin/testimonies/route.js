import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectDB from "@/lib/db";
import { authOptions } from "../../auth/[...nextauth]/route";
import Testimony from "@/models/Testimony";

export const dynamic = "force-dynamic";

const VALID_STATUSES = ["pending", "approved", "rejected"];

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

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

export async function GET(req) {
  try {
    const auth = await requireAdmin();
    if (!auth.authorized) return auth.response;

    await connectDB();

    const { searchParams } = new URL(req.url);
    const q = (searchParams.get("q") || "").trim().slice(0, 150);
    const requestedStatus = searchParams.get("status") || "all";
    const page = Math.max(
      1,
      Number.parseInt(searchParams.get("page") || "1", 10) || 1,
    );
    const limit = 10;

    const status = VALID_STATUSES.includes(requestedStatus)
      ? requestedStatus
      : "all";

    const filter = {};

    if (status !== "all") {
      filter.status = status;
    }

    if (q) {
      const search = new RegExp(escapeRegex(q), "i");

      filter.$or = [
        { firstName: search },
        { lastName: search },
        { email: search },
        { country: search },
        { title: search },
        { testimony: search },
        { category: search },
      ];
    }

    const [testimonies, total, pending, approved, rejected, unread] =
      await Promise.all([
        Testimony.find(filter)
          .select(
            "_id firstName lastName email country title testimony category isAnonymous publicationConsent status isRead createdAt updatedAt",
          )
          .sort({ isRead: 1, createdAt: -1 })
          .skip((page - 1) * limit)
          .limit(limit)
          .lean(),

        Testimony.countDocuments(filter),
        Testimony.countDocuments({ status: "pending" }),
        Testimony.countDocuments({ status: "approved" }),
        Testimony.countDocuments({ status: "rejected" }),
        Testimony.countDocuments({ isRead: false }),
      ]);

    return NextResponse.json({
      success: true,
      testimonies: testimonies.map(({ _id, ...item }) => ({
        ...item,
        id: _id.toString(),
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / limit)),
      },
      stats: {
        total: pending + approved + rejected,
        pending,
        approved,
        rejected,
        unread,
      },
    });
  } catch (error) {
    console.error("Admin testimonies GET error:", error);

    return NextResponse.json(
      { success: false, message: "Unable to load testimonies." },
      { status: 500 },
    );
  }
}
