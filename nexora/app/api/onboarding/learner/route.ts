import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    targetSkill?: string;
    level?: string;
    goal?: string;
  };

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const profile = await prisma.learnerProfile.upsert({
    where: { userId: user.id },
    create: {
      userId: user.id,
      targetSkill: body.targetSkill,
      currentLevel: body.level,
      goal: body.goal,
      roadmapId: "frontend-developer",
    },
    update: {
      targetSkill: body.targetSkill,
      currentLevel: body.level,
      goal: body.goal,
      roadmapId: "frontend-developer",
    },
  });

  return NextResponse.json({ profile });
}
