"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function BookingForm({ teacherId }: { teacherId?: string }) {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Creating booking...");

    const formData = new FormData(event.currentTarget);
    const payload = {
      teacherId: teacherId ?? String(formData.get("teacherId")),
      learnerId: teacherId ? "demo-learner" : String(formData.get("learnerId")),
      topic: String(formData.get("topic")),
      startsAt: String(formData.get("startsAt")),
    };

    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setStatus(response.ok ? "Booking created." : "Unable to create booking.");
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      {!teacherId && <Input name="teacherId" placeholder="Mentor ID" required />}
      {!teacherId && <Input name="learnerId" placeholder="Learner user ID" required />}
      <Input name="topic" placeholder="Session topic" required />
      <Input name="startsAt" type="datetime-local" required />
      <Button type="submit">Book session</Button>
      {status && <p className="text-sm text-slate-600">{status}</p>}
    </form>
  );
}
