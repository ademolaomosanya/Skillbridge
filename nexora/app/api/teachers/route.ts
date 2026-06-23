import { NextResponse } from "next/server";
import { experts } from "@/lib/data";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const teachers = await prisma.teacherProfile.findMany({
      include: {
        user: {
          select: { name: true, email: true, image: true },
        },
        skills: true,
      },
      orderBy: { rating: "desc" },
    });

    return NextResponse.json({ teachers });
  } catch {
    return NextResponse.json({
      teachers: experts.map((expert) => ({
        id: expert.id,
        title: expert.title,
        bio: expert.bio,
        hourlyRate: expert.hourlyRate,
        rating: expert.rating,
        user: { name: expert.name },
        skills: expert.skills.map((name) => ({ name })),
      })),
    });
  }
}
