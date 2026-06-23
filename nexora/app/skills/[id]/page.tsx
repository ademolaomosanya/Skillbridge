import { notFound } from "next/navigation";
import { SkillGraph } from "@/components/SkillGraph";
import { roadmaps } from "@/lib/data";

type SkillPageProps = {
  params: Promise<{ id: string }>;
};

export default async function SkillPage({ params }: SkillPageProps) {
  const { id } = await params;
  const roadmap = roadmaps.find((item) => item.id === id);

  if (!roadmap) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
        Skill roadmap
      </p>
      <h1 className="mt-3 text-4xl font-semibold">{roadmap.title}</h1>
      <p className="mt-4 text-slate-600">{roadmap.description}</p>
      <div className="mt-10">
        <SkillGraph steps={roadmap.steps} title={roadmap.title} />
      </div>
    </main>
  );
}
