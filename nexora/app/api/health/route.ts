import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    service: "nexora-api",
    timestamp: new Date().toISOString(),
  });
}
