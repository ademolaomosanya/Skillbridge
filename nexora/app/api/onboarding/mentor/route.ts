import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    title?: string;
    skills?: string;
    hourlyRate?: string;
    availability?: string[];
    style?: string[];
  };

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const hourlyRate = Number(String(body.hourlyRate ?? "0").replace(/[^0-9]/g, "")) || 0;

  const profile = await prisma.teacherProfile.upsert({
    where: { userId: user.id },
    create: {
      userId: user.id,
      title: body.title || "Nexora mentor",
      bio: `Mentors learners in ${body.skills || "professional skills"}.`,
      hourlyRate,
    },
    update: {
      title: body.title || "Nexora mentor",
      bio: `Mentors learners in ${body.skills || "professional skills"}.`,
      hourlyRate,
    },
  });

  return NextResponse.json({ profile });
}
