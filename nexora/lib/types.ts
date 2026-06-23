export type SessionFormat = "1-on-1" | "Group";

export type Expert = {
  id: string;
  name: string;
  title: string;
  skills: string[];
  rating: number;
  hourlyRate: number;
  format: SessionFormat[];
  bio: string;
};

export type Roadmap = {
  id: string;
  title: string;
  description: string;
  steps: string[];
};

export type BookingRequest = {
  teacherId: string;
  learnerId: string;
  skillId?: string;
  topic: string;
  startsAt: string;
};
