"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const learnerLevels = ["Beginner", "Intermediate", "Advanced"];
const learnerGoals = [
  "Get job-ready",
  "Build a portfolio project",
  "Improve at work",
  "Prepare for interviews",
];

export function LearnerOnboardingForm() {
  const router = useRouter();
  const [targetSkill, setTargetSkill] = useState("Frontend Development");
  const [level, setLevel] = useState("Beginner");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    await fetch("/api/onboarding/learner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        targetSkill: String(formData.get("targetSkill")),
        level: String(formData.get("level")),
        goal: String(formData.get("goal")),
      }),
    });

    router.push("/dashboard");
  }

  return (
    <form className="onboarding-form" onSubmit={handleSubmit}>
      <label>
        What do you want to get better at?
        <input
          name="targetSkill"
          onChange={(event) => setTargetSkill(event.target.value)}
          placeholder="Frontend Development"
          value={targetSkill}
        />
      </label>
      <fieldset>
        <legend>Current level</legend>
        <div className="choice-grid">
          {learnerLevels.map((item) => (
            <label className={level === item ? "selected" : ""} key={item}>
              <input
                checked={level === item}
                name="level"
                onChange={() => setLevel(item)}
                type="radio"
                value={item}
              />
              {item}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Main goal</legend>
        <div className="choice-grid">
          {learnerGoals.map((item) => (
            <label key={item}>
              <input
                defaultChecked={item === learnerGoals[0]}
                name="goal"
                type="radio"
                value={item}
              />
              {item}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="roadmap-preview">
        <span>Suggested roadmap</span>
        <strong>{targetSkill || "Your skill"} · {level}</strong>
        <p>
          We will recommend mentors and roadmap steps based on your level and
          the outcome you choose.
        </p>
      </div>
      <button className="button button-primary" type="submit">
        Continue to learner dashboard
      </button>
    </form>
  );
}

export function MentorOnboardingForm() {
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    await fetch("/api/onboarding/mentor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: String(formData.get("title")),
        skills: String(formData.get("skills")),
        hourlyRate: String(formData.get("hourlyRate")),
        availability: formData.getAll("availability").map(String),
        style: formData.getAll("style").map(String),
      }),
    });

    router.push("/dashboard/teacher");
  }

  return (
    <form className="onboarding-form" onSubmit={handleSubmit}>
      <label>
        Professional headline
        <input name="title" placeholder="Senior Frontend Engineer" required />
      </label>
      <label>
        Skills you can mentor
        <input name="skills" placeholder="React, Next.js, TypeScript" required />
      </label>
      <label>
        Hourly rate
        <input name="hourlyRate" placeholder="$45/hr" required />
      </label>
      <fieldset>
        <legend>Availability</legend>
        <div className="choice-grid">
          {["Weekday mornings", "Weekday evenings", "Saturday sessions"].map((item) => (
            <label key={item}>
              <input name="availability" type="checkbox" value={item} />
              {item}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Teaching style</legend>
        <div className="choice-grid">
          {["Live walkthroughs", "Project review", "Beginner-friendly pacing"].map((item) => (
            <label key={item}>
              <input name="style" type="checkbox" value={item} />
              {item}
            </label>
          ))}
        </div>
      </fieldset>
      <button className="button button-primary" type="submit">
        Continue to mentor dashboard
      </button>
    </form>
  );
}
