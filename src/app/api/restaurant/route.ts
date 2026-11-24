import { NextResponse } from "next/server";
import {
  ensureSeededAndLoadData,
  updateRestaurantSettings,
} from "@/lib/db-service";

export async function GET() {
  try {
    const data = await ensureSeededAndLoadData();
    return NextResponse.json({
      status: "ok",
      ...data,
    });
  } catch (error) {
    console.error("Failed to load restaurant data:", error);
    return NextResponse.json(
      { error: "Failed to load restaurant data" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const updated = await updateRestaurantSettings({
      openingHours: body.openingHours,
      socialLinks: body.socialLinks,
    });
    return NextResponse.json({
      status: "ok",
      settings: updated,
    });
  } catch (error) {
    console.error("Failed to update restaurant settings:", error);
    return NextResponse.json(
      { error: "Failed to update settings" },
      { status: 500 }
    );
  }
}
