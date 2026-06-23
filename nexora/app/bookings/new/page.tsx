import { BookingForm } from "@/components/BookingForm";
import { Card } from "@/components/ui/card";

export default function NewBookingPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center px-6 py-16">
      <Card className="w-full">
        <h1 className="text-3xl font-semibold">Book a session</h1>
        <p className="mt-2 text-sm text-slate-600">
          Creates a booking through <code>POST /api/bookings</code>.
        </p>
        <div className="mt-8">
          <BookingForm />
        </div>
      </Card>
    </main>
  );
}
