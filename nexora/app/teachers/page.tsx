import { TeacherCard } from "@/components/TeacherCard";
import { experts } from "@/lib/data";

export default function TeachersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Teachers
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Browse verified teachers</h1>
        <p className="mt-4 text-slate-600">
          This page is ready to swap from seed data to <code>GET /api/teachers</code>.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {experts.map((expert) => (
          <TeacherCard
            bio={expert.bio}
            hourlyRate={expert.hourlyRate}
            id={expert.id}
            key={expert.id}
            name={expert.name}
            rating={expert.rating}
            title={expert.title}
          />
        ))}
      </div>
    </main>
  );
}
