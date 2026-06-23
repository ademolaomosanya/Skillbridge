import { notFound } from "next/navigation";
import { BookingForm } from "@/components/BookingForm";
import { Card } from "@/components/ui/card";
import { experts } from "@/lib/data";

type TeacherProfilePageProps = {
  params: Promise<{ id: string }>;
};

export default async function TeacherProfilePage({ params }: TeacherProfilePageProps) {
  const { id } = await params;
  const teacher = experts.find((expert) => expert.id === id);

  if (!teacher) {
    notFound();
  }

  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1fr_380px]">
      <section>
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Teacher profile
        </p>
        <h1 className="mt-3 text-5xl font-semibold">{teacher.name}</h1>
        <p className="mt-3 text-xl text-slate-700">{teacher.title}</p>
        <p className="mt-6 max-w-2xl leading-7 text-slate-600">{teacher.bio}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {teacher.skills.map((skill) => (
            <span className="rounded-full bg-white px-4 py-2 text-sm" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>
      <Card>
        <h2 className="text-2xl font-semibold">Book a session</h2>
        <p className="mt-2 text-sm text-slate-600">
          ${teacher.hourlyRate}/hr · {teacher.rating.toFixed(2)} rating
        </p>
        <div className="mt-6">
          <BookingForm teacherId={teacher.id} />
        </div>
      </Card>
    </main>
  );
}
