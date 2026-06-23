import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const signature = request.headers.get("x-paystack-signature");
  const secret = process.env.PAYSTACK_SECRET_KEY;

  if (!secret || !signature) {
    return NextResponse.json({ error: "Invalid webhook" }, { status: 401 });
  }

  const hash = crypto.createHmac("sha512", secret).update(payload).digest("hex");

  if (hash !== signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(payload) as {
    event: string;
    data?: { reference?: string };
  };

  if (event.event === "charge.success" && event.data?.reference) {
    await prisma.payment.update({
      where: { reference: event.data.reference },
      data: { status: "SUCCESS" },
    });
  }

  return NextResponse.json({ received: true });
}
