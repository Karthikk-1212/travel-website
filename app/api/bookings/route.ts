import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const bookingSchema = z.object({
  name: z.string().min(1).max(120),
  mobile: z.string().min(8).max(15),
  email: z.string().email().optional().or(z.literal("")),
  pickup: z.string().min(1).max(200),
  destination: z.string().min(1).max(200),
  date: z.string().min(1),
  vehicle: z.string().min(1).max(120),
  passengers: z.string().min(1),
  message: z.string().max(1000).optional().or(z.literal("")),
});

// Basic in-memory rate limiting per IP (swap for Upstash/Redis in production).
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid enquiry details." }, { status: 400 });
  }

  const data = parsed.data;

  try {
    const booking = await prisma.booking.create({
      data: {
        name: data.name,
        mobile: data.mobile,
        email: data.email || null,
        pickup: data.pickup,
        destination: data.destination,
        travelDate: new Date(data.date),
        vehicle: data.vehicle,
        passengers: Number(data.passengers) || 1,
        message: data.message || null,
        status: "NEW",
      },
    });
    return NextResponse.json({ ok: true, id: booking.id }, { status: 201 });
  } catch (err) {
    console.error("Booking creation failed", err);
    return NextResponse.json({ error: "Could not save enquiry. Please call us directly." }, { status: 500 });
  }
}
