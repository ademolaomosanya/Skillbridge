type SkillGraphProps = {
  title: string;
  steps: string[];
};

export function SkillGraph({ title, steps }: SkillGraphProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-6 grid gap-3">
        {steps.map((step, index) => (
          <div
            className="flex items-center gap-3 rounded-md border border-slate-200 p-3"
            key={step}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              {index + 1}
            </span>
            <span>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
