import { NextResponse } from "next/server";
import { db } from "@/db";
import { tableInquiries } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const inquiries = await db
      .select()
      .from(tableInquiries)
      .orderBy(desc(tableInquiries.createdAt))
      .limit(20);
    return NextResponse.json({ inquiries });
  } catch {
    return NextResponse.json({ inquiries: [] });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const guestName = String(body.guestName ?? "").trim();
    const guestPhone = String(body.guestPhone ?? "").trim();
    const partySize = Number(body.partySize) || 2;
    const preferredDate = String(body.preferredDate ?? "").trim();
    const preferredTime = String(body.preferredTime ?? "").trim();
    const selectedDishes = body.selectedDishes
      ? String(body.selectedDishes).trim()
      : null;
    const specialNotes = body.specialNotes
      ? String(body.specialNotes).trim()
      : null;
    const inquiryType = String(body.inquiryType ?? "reservation");

    if (!guestName || !guestPhone) {
      return NextResponse.json(
        { error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const [created] = await db
      .insert(tableInquiries)
      .values({
        guestName,
        guestPhone,
        partySize,
        preferredDate: preferredDate || new Date().toISOString().slice(0, 10),
        preferredTime: preferredTime || "20:00",
        selectedDishes,
        specialNotes,
        inquiryType,
      })
      .returning();

    return NextResponse.json({
      status: "ok",
      inquiry: created,
    });
  } catch (error) {
    console.error("Error saving table inquiry:", error);
    return NextResponse.json(
      { error: "Failed to save inquiry" },
      { status: 500 }
    );
  }
}
