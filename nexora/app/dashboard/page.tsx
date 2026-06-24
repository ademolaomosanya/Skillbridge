import Link from "next/link";
import { experts, roadmaps } from "@/lib/data";

const nextSession = {
  title: "Next.js App Router fundamentals",
  teacher: "Maya Chen",
  time: "Today, 3:00 PM",
  agenda: ["Layouts and route groups", "Server vs client components", "Project review"],
};

const activities = [
  "Completed JavaScript roadmap checkpoint",
  "Saved Andre Wilson to your teacher shortlist",
  "Booked a frontend architecture session",
];

export default function DashboardPage() {
  const roadmap = roadmaps[0];
  const completedSteps = 3;
  const progress = Math.round((completedSteps / roadmap.steps.length) * 100);

  return (
      <main className="learner-dashboard">
        <section className="learner-hero">
          <div>
            <p className="kicker">Learner dashboard</p>
            <h1>Welcome back, Ademola.</h1>
            <p>
              Keep momentum on your roadmap, manage booked sessions, and find
              the next expert who can help you level up.
            </p>
          </div>
          <div className="learner-hero-actions">
            <Link className="button button-primary" href="/teachers">
              Find a teacher
            </Link>
            <Link className="button button-light" href="/bookings/new">
              Book session
            </Link>
          </div>
        </section>

        <section className="metric-row" aria-label="Learning summary">
          <article>
            <span>Upcoming</span>
            <strong>1</strong>
            <p>confirmed session</p>
          </article>
          <article>
            <span>Roadmap</span>
            <strong>{progress}%</strong>
            <p>frontend path complete</p>
          </article>
          <article>
            <span>Learning time</span>
            <strong>8.5h</strong>
            <p>spent this month</p>
          </article>
          <article>
            <span>Saved experts</span>
            <strong>4</strong>
            <p>ready to compare</p>
          </article>
        </section>

        <section className="dashboard-layout">
          <div className="dashboard-main-column">
            <article className="dashboard-panel next-session-card">
              <div className="panel-heading">
                <div>
                  <p className="kicker">Next session</p>
                  <h2>{nextSession.title}</h2>
                </div>
                <span>{nextSession.time}</span>
              </div>
              <div className="session-teacher">
                <div className="teacher-avatar">MC</div>
                <div>
                  <strong>{nextSession.teacher}</strong>
                  <p>Senior Frontend Engineer</p>
                </div>
              </div>
              <ul className="agenda-list">
                {nextSession.agenda.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="panel-actions">
                <Link className="button button-primary" href="/bookings/new">
                  View booking
                </Link>
                <Link className="button button-light" href="/teachers/maya-chen">
                  Teacher profile
                </Link>
              </div>
            </article>

            <article className="dashboard-panel">
              <div className="panel-heading">
                <div>
                  <p className="kicker">Active roadmap</p>
                  <h2>{roadmap.title}</h2>
                </div>
                <Link href={`/skills/${roadmap.id}`}>Open roadmap</Link>
              </div>
              <div className="progress-track" aria-label={`${progress}% complete`}>
                <span style={{ width: `${progress}%` }} />
              </div>
              <div className="roadmap-steps">
                {roadmap.steps.map((step, index) => (
                  <div
                    className={index < completedSteps ? "complete" : ""}
                    key={step}
                  >
                    <span>{index + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="dashboard-side-column">
            <article className="dashboard-panel">
              <div className="panel-heading compact">
                <div>
                  <p className="kicker">Recommended</p>
                  <h2>Experts for you</h2>
                </div>
              </div>
              <div className="mini-teacher-list">
                {experts.slice(0, 5).map((expert) => (
                  <Link href={`/teachers/${expert.id}`} key={expert.id}>
                    <span>{expert.name.split(" ").map((part) => part[0]).join("")}</span>
                    <div>
                      <strong>{expert.name}</strong>
                      <p>{expert.skills.slice(0, 2).join(" · ")}</p>
                    </div>
                    <em>${expert.hourlyRate}/hr</em>
                  </Link>
                ))}
              </div>
            </article>

            <article className="dashboard-panel">
              <div className="panel-heading compact">
                <div>
                  <p className="kicker">Recent activity</p>
                  <h2>What changed</h2>
                </div>
              </div>
              <ul className="activity-list">
                {activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </article>
          </aside>
        </section>
      </main>
  );
}
