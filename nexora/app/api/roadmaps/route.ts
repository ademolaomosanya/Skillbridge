import { NextResponse } from "next/server";
import { roadmaps } from "@/lib/data";

export function GET() {
  return NextResponse.json({ roadmaps });
}
