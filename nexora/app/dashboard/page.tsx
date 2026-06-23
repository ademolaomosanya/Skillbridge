import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <>
      <AppHeader />
      <main className="dashboard-page">
        <section className="dashboard-hero">
          <p className="kicker">Dashboard</p>
          <h1>User dashboard</h1>
          <p>Track your sessions, roadmaps, and learning progress.</p>
        </section>
        <section className="dashboard-grid">
          <Card>
            <p className="text-sm text-slate-600">Upcoming sessions</p>
            <strong className="mt-3 block text-3xl">0</strong>
          </Card>
          <Card>
            <p className="text-sm text-slate-600">Roadmaps active</p>
            <strong className="mt-3 block text-3xl">0</strong>
          </Card>
          <Card>
            <p className="text-sm text-slate-600">Hours learned</p>
            <strong className="mt-3 block text-3xl">0</strong>
          </Card>
        </section>
      </main>
      <AppFooter />
    </>
  );
}
