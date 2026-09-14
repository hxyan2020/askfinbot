import { NextResponse } from "next/server";
import { isGoogleAuthConfigured } from "@/lib/google-oauth";

export async function GET() {
  return NextResponse.json({
    google: isGoogleAuthConfigured(),
  });
}
