import Link from "next/link";
import { Card } from "@/components/ui/card";

type TeacherCardProps = {
  id: string;
  name: string;
  title: string;
  bio: string;
  hourlyRate: number;
  rating: number;
  skills?: string[];
};

export function TeacherCard({
  id,
  name,
  title,
  bio,
  hourlyRate,
  rating,
  skills = [],
}: TeacherCardProps) {
  return (
    <Card className="teacher-card">
      <div className="teacher-card-top">
        <span>{name.split(" ").map((part) => part[0]).join("")}</span>
        <em>{rating.toFixed(2)}</em>
      </div>
      <p className="teacher-title">{title}</p>
      <h3>{name}</h3>
      <p className="teacher-bio">{bio}</p>
      <div className="teacher-skills">
        {skills.slice(0, 3).map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
      <div className="teacher-meta">
        <span>{rating.toFixed(2)} rating</span>
        <strong>${hourlyRate}/hr</strong>
      </div>
      <Link
        className="teacher-card-link"
        href={`/teachers/${id}`}
      >
        View profile
      </Link>
    </Card>
  );
}
