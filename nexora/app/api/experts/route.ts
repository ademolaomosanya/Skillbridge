import { NextRequest, NextResponse } from "next/server";
import { experts } from "@/lib/data";

export function GET(request: NextRequest) {
  const skill = request.nextUrl.searchParams.get("skill")?.toLowerCase();

  const results = skill
    ? experts.filter((expert) =>
        expert.skills.some((item) => item.toLowerCase().includes(skill)),
      )
    : experts;

  return NextResponse.json({ experts: results });
}
