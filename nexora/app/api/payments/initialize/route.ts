import { NextRequest, NextResponse } from "next/server";
import { initializePaystackPayment } from "@/lib/paystack";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    bookingId?: string;
    email?: string;
    amount?: number;
  };

  if (!body.bookingId || !body.email || !body.amount) {
    return NextResponse.json(
      { error: "bookingId, email, and amount are required" },
      { status: 400 },
    );
  }

  const reference = `nexora-${Date.now()}`;

  const payment = await initializePaystackPayment({
    email: body.email,
    amount: body.amount,
    reference,
    metadata: { bookingId: body.bookingId },
  });

  await prisma.payment.create({
    data: {
      bookingId: body.bookingId,
      provider: "paystack",
      reference,
      amount: body.amount,
    },
  });

  return NextResponse.json(payment);
}
