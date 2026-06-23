import { NextRequest, NextResponse } from "next/server";
import { experts } from "@/lib/data";
import { prisma } from "@/lib/prisma";

type Params = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: NextRequest, { params }: Params) {
  const { id } = await params;

  try {
    const teacher = await prisma.teacherProfile.findUnique({
      where: { id },
      include: {
        user: {
          select: { name: true, email: true, image: true },
        },
        skills: true,
      },
    });

    if (!teacher) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    return NextResponse.json({ teacher });
  } catch {
    const expert = experts.find((item) => item.id === id);

    if (!expert) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    return NextResponse.json({ teacher: expert });
  }
}
