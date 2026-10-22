import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import PrayerRequest from "@/models/PrayerRequest";
import { isValidPhoneNumber } from "libphonenumber-js";
import { prayerRateLimit } from "@/lib/ratelimit";

export async function POST(request) {
  try {
    const forwardedFor = request.headers
      .get("x-forwarded-for")
      ?.split(",")[0]
      ?.trim();

    const ip = forwardedFor || request.headers.get("x-real-ip") || "unknown";

    const { success, reset, remaining } = await prayerRateLimit.limit(ip);

    if (!success) {
      const retryAfter = Math.max(1, Math.ceil((reset - Date.now()) / 1000));

      return NextResponse.json(
        {
          success: false,
          message: "Too many submissions. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfter),
            "X-RateLimit-Remaining": String(remaining),
          },
        },
      );
    }

    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      request: prayerRequest,
      website,
    } = body;

    // Honeypot: silently reject automated submissions.
    if (website) {
      return NextResponse.json(
        { success: true, message: "Prayer request submitted successfully." },
        { status: 200 },
      );
    }

    // Validate required fields.
    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !email?.trim() ||
      !phone ||
      !prayerRequest?.trim()
    ) {
      return NextResponse.json(
        { success: false, message: "Please complete all required fields." },
        { status: 400 },
      );
    }

    // Validate names.
    if (firstName.trim().length > 80 || lastName.trim().length > 80) {
      return NextResponse.json(
        { success: false, message: "Names must not exceed 80 characters." },
        { status: 400 },
      );
    }

    // Validate email.
    const normalizedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (normalizedEmail.length > 254 || !emailRegex.test(normalizedEmail)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // Validate international phone number in E.164 format.
    if (
      typeof phone !== "string" ||
      phone.length > 25 ||
      !isValidPhoneNumber(phone)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid international phone number.",
        },
        { status: 400 },
      );
    }

    // Validate prayer request.
    const trimmedRequest = prayerRequest.trim();

    if (trimmedRequest.length < 5 || trimmedRequest.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: "Your prayer request must be between 5 and 5000 characters.",
        },
        { status: 400 },
      );
    }

    await connectDB();

    const savedRequest = await PrayerRequest.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: normalizedEmail,
      phone,
      request: trimmedRequest,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Prayer request submitted successfully.",
        id: savedRequest._id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Prayer request submission failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "We couldn't submit your prayer request. Please try again.",
      },
      { status: 500 },
    );
  }
}
