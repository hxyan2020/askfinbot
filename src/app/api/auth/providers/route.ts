import { NextResponse } from "next/server";
import { isGoogleAuthConfigured } from "@/lib/google-oauth";
import { twilioConfigured } from "@/lib/twilio";

export async function GET() {
  return NextResponse.json({
    google: isGoogleAuthConfigured(),
    sms: twilioConfigured(),
  });
}
