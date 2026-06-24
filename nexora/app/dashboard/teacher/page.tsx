import { Card } from "@/components/ui/card";

export default function TeacherDashboardPage() {
  return (
      <main className="dashboard-page">
        <section className="dashboard-hero">
          <p className="kicker">Teacher dashboard</p>
          <h1>Teacher dashboard</h1>
          <p>Manage bookings, earnings, and your teaching profile.</p>
        </section>
        <section className="dashboard-grid">
          <Card>
            <p className="text-sm text-slate-600">Pending bookings</p>
            <strong className="mt-3 block text-3xl">0</strong>
          </Card>
          <Card>
            <p className="text-sm text-slate-600">Monthly earnings</p>
            <strong className="mt-3 block text-3xl">$0</strong>
          </Card>
          <Card>
            <p className="text-sm text-slate-600">Profile rating</p>
            <strong className="mt-3 block text-3xl">New</strong>
          </Card>
        </section>
      </main>
  );
}
