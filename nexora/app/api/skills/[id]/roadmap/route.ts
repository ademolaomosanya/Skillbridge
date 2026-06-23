import { NextRequest, NextResponse } from "next/server";
import { roadmaps } from "@/lib/data";
import { getSkillRoadmap } from "@/lib/neo4j";

type Params = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: NextRequest, { params }: Params) {
  const { id } = await params;

  try {
    const roadmap = await getSkillRoadmap(id);
    return NextResponse.json({ roadmap });
  } catch {
    const fallback = roadmaps.find((item) => item.id === id);

    if (!fallback) {
      return NextResponse.json({ error: "Skill roadmap not found" }, { status: 404 });
    }

    return NextResponse.json({ roadmap: fallback });
  }
}
