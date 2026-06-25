import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingForm } from "@/components/BookingForm";
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
    <main className="teacher-profile-page">
      <section className="teacher-profile-hero">
        <img
          className="teacher-profile-avatar"
          src={teacher.avatarUrl}
          alt={`${teacher.name} profile photo`}
        />
        <div>
          <p className="kicker">Mentor profile</p>
          <h1>{teacher.name}</h1>
          <p className="teacher-profile-title">{teacher.title}</p>
          <p className="teacher-profile-bio">{teacher.bio}</p>
          <div className="teacher-profile-tags">
            {teacher.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="teacher-profile-stats" aria-label="Teacher stats">
        <article>
          <span>Rating</span>
          <strong>{teacher.rating.toFixed(2)}</strong>
        </article>
        <article>
          <span>Sessions taught</span>
          <strong>{teacher.sessionsTaught}+</strong>
        </article>
        <article>
          <span>Rate</span>
          <strong>${teacher.hourlyRate}/hr</strong>
        </article>
        <article>
          <span>Response</span>
          <strong>{teacher.responseTime}</strong>
        </article>
      </section>

      <section className="teacher-profile-layout">
        <div className="teacher-profile-main">
          <article className="profile-panel">
            <h2>About {teacher.name.split(" ")[0]}</h2>
            <p>{teacher.about}</p>
            <div className="profile-detail-grid">
              <div>
                <span>Location</span>
                <strong>{teacher.location}</strong>
              </div>
              <div>
                <span>Languages</span>
                <strong>{teacher.languages.join(", ")}</strong>
              </div>
              <div>
                <span>Session formats</span>
                <strong>{teacher.format.join(", ")}</strong>
              </div>
            </div>
          </article>

          <article className="profile-panel">
            <h2>What you can learn</h2>
            <div className="profile-list-grid">
              {teacher.outcomes.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </article>

          <article className="profile-panel">
            <h2>Teaching style</h2>
            <div className="profile-chip-row">
              {teacher.teachingStyle.map((style) => (
                <span key={style}>{style}</span>
              ))}
            </div>
          </article>

          <article className="profile-panel">
            <h2>Experience</h2>
            <ul className="profile-check-list">
              {teacher.experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="profile-panel">
            <h2>Learner reviews</h2>
            <div className="profile-review-grid">
              {teacher.reviews.map((review) => (
                <blockquote key={review.name}>
                  <p>&quot;{review.quote}&quot;</p>
                  <cite>{review.name}</cite>
                </blockquote>
              ))}
            </div>
          </article>
        </div>

        <aside className="teacher-booking-panel">
          <div className="booking-price">
            <span>Starting at</span>
            <strong>${teacher.hourlyRate}/hr</strong>
          </div>
          <div className="availability-list">
            <h2>Availability</h2>
            {teacher.availability.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="booking-form-wrap">
            <h2>Book a session</h2>
            <p>Send a session request and confirm the topic you want to work on.</p>
            <BookingForm teacherId={teacher.id} />
          </div>
          <Link className="teacher-back-link" href="/teachers">
            Back to all mentors
          </Link>
        </aside>
      </section>
    </main>
  );
}
