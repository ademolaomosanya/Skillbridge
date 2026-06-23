import Link from "next/link";
import { Card } from "@/components/ui/card";

type TeacherCardProps = {
  id: string;
  name: string;
  title: string;
  bio: string;
  hourlyRate: number;
  rating: number;
};

export function TeacherCard({
  id,
  name,
  title,
  bio,
  hourlyRate,
  rating,
}: TeacherCardProps) {
  return (
    <Card>
      <p className="text-sm font-semibold text-blue-700">{title}</p>
      <h3 className="mt-2 text-2xl font-semibold">{name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{bio}</p>
      <div className="mt-5 flex items-center justify-between text-sm">
        <span>{rating.toFixed(2)} rating</span>
        <strong>${hourlyRate}/hr</strong>
      </div>
      <Link
        className="mt-5 inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white"
        href={`/teachers/${id}`}
      >
        View profile
      </Link>
    </Card>
  );
}
