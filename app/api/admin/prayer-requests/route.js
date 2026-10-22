
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectDB from "@/lib/db";
import { authOptions } from "../../auth/[...nextauth]/route";
import PrayerRequest from "@/models/PrayerRequest";

export const dynamic = "force-dynamic";

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
      Math.min(100000, Number.parseInt(searchParams.get("page") || "1", 10) || 1)
    );
    const limit = 10;

    const validStatuses = [
      "pending",
      "in-progress",
      "prayed-for",
      "closed",
    ];

    const status = validStatuses.includes(requestedStatus)
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
        { phone: search },
        { request: search },
      ];
    }

    const [requests, total, pending, inProgress, prayedFor, closed, unread] =
      await Promise.all([
        PrayerRequest.find(filter)
          .select(
            "_id firstName lastName email phone request status isRead createdAt updatedAt"
          )
          .sort({ isRead: 1, createdAt: -1 })
          .skip((page - 1) * limit)
          .limit(limit)
          .lean(),

        PrayerRequest.countDocuments(filter),
        PrayerRequest.countDocuments({ status: "pending" }),
        PrayerRequest.countDocuments({ status: "in-progress" }),
        PrayerRequest.countDocuments({ status: "prayed-for" }),
        PrayerRequest.countDocuments({ status: "closed" }),
        PrayerRequest.countDocuments({ isRead: false }),
      ]);

    return NextResponse.json({
      success: true,
      requests: requests.map((item) => ({
        ...item,
        id: item._id.toString(),
        _id: undefined,
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / limit)),
      },
      stats: {
        total: pending + inProgress + prayedFor + closed,
        pending,
        inProgress,
        prayedFor,
        closed,
        unread,
      },
    });
  } catch (error) {
    console.error("Admin prayer requests GET error:", error);

    return NextResponse.json(
      { success: false, message: "Unable to load prayer requests." },
      { status: 500 }
    );
  }
}
