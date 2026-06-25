import { TeacherCard } from "@/components/TeacherCard";
import { experts } from "@/lib/data";

type TeachersPageProps = {
  searchParams?: Promise<{
    filter?: string;
  }>;
};

export default async function TeachersPage({ searchParams }: TeachersPageProps) {
  const params = await searchParams;
  const filter = params?.filter ?? "";

  const filteredExperts = experts.filter((expert) => {
    const matchesQuickFilter =
      filter === "top-rated"
        ? expert.rating >= 4.9
        : filter === "available-this-week"
          ? expert.availability.some((item) => item.includes("Weekday") || item.includes("Saturday"))
          : filter === "under-50"
            ? expert.hourlyRate < 50
            : true;

    return matchesQuickFilter;
  });

  return (
    <main className="teachers-page">
      <section className="teachers-hero">
        <div>
          <p className="kicker">Mentors</p>
          <h1>Browse verified mentors</h1>
          <p>
            Explore {experts.length} practitioners across engineering, design,
            marketing, product, cloud, data, and security.
          </p>
        </div>
      </section>

      <div className="teacher-toolbar">
        <div>
          <a className={filter === "top-rated" ? "active" : ""} href="/teachers?filter=top-rated">
            Top rated
          </a>
          <a
            className={filter === "available-this-week" ? "active" : ""}
            href="/teachers?filter=available-this-week"
          >
            Available this week
          </a>
          <a className={filter === "under-50" ? "active" : ""} href="/teachers?filter=under-50">
            Under $50/hr
          </a>
          {filter && <a href="/teachers">Clear filter</a>}
        </div>
      </div>

      <section className="teachers-grid">
        {filteredExperts.map((expert) => (
          <TeacherCard
            bio={expert.bio}
            avatarUrl={expert.avatarUrl}
            hourlyRate={expert.hourlyRate}
            id={expert.id}
            key={expert.id}
            name={expert.name}
            rating={expert.rating}
            skills={expert.skills}
            title={expert.title}
          />
        ))}
      </section>
    </main>
  );
}
