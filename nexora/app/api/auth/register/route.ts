import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    password?: string;
    role?: "LEARNER" | "TEACHER";
  };

  if (!body.email || !body.password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 },
    );
  }

  const email = body.email.toLowerCase();
  const passwordHash = await hash(body.password, 12);
  const role = body.role === "TEACHER" ? "TEACHER" : "LEARNER";

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email,
      passwordHash,
      role,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });

  return NextResponse.json({ user }, { status: 201 });
}
