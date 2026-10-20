import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req) {
  try {
    // 1. Authorize the requesting administrator
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json(
        { message: "Unauthorized. Admin access required." },
        { status: 403 },
      );
    }

    await connectDB();

    const body = await req.json();

    const { firstName, lastName, email, password } = body;

    // 2. Validate required fields
    if (
      typeof firstName !== "string" ||
      typeof lastName !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    // 3. Normalize text fields
    const normalizedFirstName = firstName.trim();
    const normalizedLastName = lastName.trim();
    const normalizedEmail = email.trim().toLowerCase();

    if (
      !normalizedFirstName ||
      !normalizedLastName ||
      !normalizedEmail ||
      !password.trim()
    ) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    // 4. Validate name lengths
    if (normalizedFirstName.length > 50 || normalizedLastName.length > 50) {
      return NextResponse.json(
        { message: "Names must not exceed 50 characters." },
        { status: 400 },
      );
    }

    // 5. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // 6. Validate password
    const hasMinLength = password.length >= 8;
    const hasLetter = /[A-Za-z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (!hasMinLength || !hasLetter || !hasNumber) {
      return NextResponse.json(
        {
          message:
            "Password must be at least 8 characters long and contain both letters and numbers.",
        },
        { status: 400 },
      );
    }

    // 7. Check for an existing account
    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "An account with this email already exists." },
        { status: 409 },
      );
    }

    // 8. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 9. Create admin account
    await User.create({
      firstName: normalizedFirstName,
      lastName: normalizedLastName,
      email: normalizedEmail,
      password: hashedPassword,
      role: "admin",
    });

    // 10. Return success
    return NextResponse.json(
      { message: "Admin account created successfully." },
      { status: 201 },
    );
  } catch (error) {
    console.error("ADMIN USER CREATION ERROR:", error);

    if (error?.code === 11000) {
      return NextResponse.json(
        { message: "An account with this email already exists." },
        { status: 409 },
      );
    }

    return NextResponse.json(
      { message: "Something went wrong while creating the admin account." },
      { status: 500 },
    );
  }
}

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json(
        { message: "Unauthorized. Admin access required." },
        { status: 403 },
      );
    }

    await connectDB();

    const { searchParams } = new URL(req.url);
    const q = (searchParams.get("q") || "").trim();
    const page = Math.max(
      1,
      Number.parseInt(searchParams.get("page") || "1", 10) || 1,
    );
    const limit = 10;
    const skip = (page - 1) * limit;

    const filter = {};

    if (q) {
      const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(escaped, "i");

      filter.$or = [
        { firstName: regex },
        { lastName: regex },
        { email: regex },
      ];
    }

    const [users, total] = await Promise.all([
      User.find(filter)
        .select("_id firstName lastName email role createdAt")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      User.countDocuments(filter),
    ]);

    return NextResponse.json({
      users: users.map((user) => ({
        id: user._id.toString(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("ADMIN USERS LIST ERROR:", error);

    return NextResponse.json(
      { message: "Unable to retrieve users." },
      { status: 500 },
    );
  }
}
