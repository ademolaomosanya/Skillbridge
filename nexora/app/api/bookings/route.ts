import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const bookings = await prisma.booking.findMany({
    include: {
      learner: { select: { id: true, name: true, email: true } },
      teacher: { include: { user: { select: { name: true, email: true } } } },
      skill: true,
      payment: true,
    },
    orderBy: { startsAt: "desc" },
  });

  return NextResponse.json({ bookings });
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    learnerId?: string;
    teacherId?: string;
    skillId?: string;
    topic?: string;
    startsAt?: string;
  };

  if (!body.learnerId || !body.teacherId || !body.topic || !body.startsAt) {
    return NextResponse.json(
      { error: "learnerId, teacherId, topic, and startsAt are required" },
      { status: 400 },
    );
  }

  const booking = await prisma.booking.create({
    data: {
      learnerId: body.learnerId,
      teacherId: body.teacherId,
      skillId: body.skillId,
      topic: body.topic,
      startsAt: new Date(body.startsAt),
    },
  });

  return NextResponse.json({ booking }, { status: 201 });
}
