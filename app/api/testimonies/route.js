// app/api/testimonies/route.js

import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Testimony, { testimonyCategories } from "@/models/Testimony";
import { testimonyRateLimit } from "@/lib/ratelimit";

export async function POST(request) {
  try {
    // Rate limit by client IP.
    const forwardedFor = request.headers
      .get("x-forwarded-for")
      ?.split(",")[0]
      ?.trim();

    const ip = forwardedFor || request.headers.get("x-real-ip") || "unknown";

    const { success, reset, remaining } = await testimonyRateLimit.limit(ip);

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
      country,
      title,
      testimony,
      category,
      isAnonymous,
      publicationConsent,
      website,
    } = body;

    // Honeypot for basic bot protection.
    if (website) {
      return NextResponse.json({
        success: true,
        message: "Your testimony has been submitted for review.",
      });
    }

    const cleanFirstName =
      typeof firstName === "string" ? firstName.trim() : "";
    const cleanLastName = typeof lastName === "string" ? lastName.trim() : "";
    const cleanEmail =
      typeof email === "string" ? email.trim().toLowerCase() : "";
    const cleanCountry = typeof country === "string" ? country.trim() : "";
    const cleanTitle = typeof title === "string" ? title.trim() : "";
    const cleanTestimony =
      typeof testimony === "string" ? testimony.trim() : "";

    if (
      !cleanFirstName ||
      !cleanLastName ||
      !cleanTitle ||
      !cleanTestimony ||
      !category
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 },
      );
    }

    if (cleanFirstName.length > 80 || cleanLastName.length > 80) {
      return NextResponse.json(
        {
          success: false,
          message: "Names must not exceed 80 characters.",
        },
        { status: 400 },
      );
    }

    if (
      cleanEmail.length > 254 ||
      (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail))
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 },
      );
    }

    if (cleanCountry.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Country must not exceed 100 characters.",
        },
        { status: 400 },
      );
    }

    if (cleanTitle.length < 3 || cleanTitle.length > 150) {
      return NextResponse.json(
        {
          success: false,
          message: "The title must be between 3 and 150 characters.",
        },
        { status: 400 },
      );
    }

    if (cleanTestimony.length < 20 || cleanTestimony.length > 10000) {
      return NextResponse.json(
        {
          success: false,
          message: "Your testimony must be between 20 and 10,000 characters.",
        },
        { status: 400 },
      );
    }

    if (!testimonyCategories.includes(category)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please select a valid testimony category.",
        },
        { status: 400 },
      );
    }

    if (typeof isAnonymous !== "boolean") {
      return NextResponse.json(
        {
          success: false,
          message: "Please select your display preference.",
        },
        { status: 400 },
      );
    }

    if (publicationConsent !== true) {
      return NextResponse.json(
        {
          success: false,
          message: "You must consent to publication before submitting.",
        },
        { status: 400 },
      );
    }

    await connectDB();

    await Testimony.create({
      firstName: cleanFirstName,
      lastName: cleanLastName,
      email: cleanEmail,
      country: cleanCountry,
      title: cleanTitle,
      testimony: cleanTestimony,
      category,
      isAnonymous,
      publicationConsent: true,
      // Never accept status or isRead from the public request.
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for sharing your testimony. It has been submitted for review.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Testimony submission failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "We couldn't submit your testimony. Please try again later.",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const testimonies = await Testimony.find({
      status: "approved",
    })
      .select("firstName lastName title testimony category country isAnonymous createdAt")
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();

    const publicTestimonies = testimonies.map((item) => ({
      _id: item._id.toString(),
      firstName: item.isAnonymous ? "" : item.firstName,
      lastName: item.isAnonymous ? "" : item.lastName,
      title: item.title,
      testimony: item.testimony,
      category: item.category,
      country: item.country,
      isAnonymous: item.isAnonymous,
      createdAt: item.createdAt,
    }));

    return NextResponse.json(
      { success: true, testimonies: publicTestimonies },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Fetching approved testimonies failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to load testimonies.",
      },
      { status: 500 }
    );
  }
}