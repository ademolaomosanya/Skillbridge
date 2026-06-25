import { MentorOnboardingForm } from "@/components/OnboardingForms";

export default function MentorOnboardingPage() {
  return (
    <main className="onboarding-page">
      <section className="onboarding-hero">
        <p className="kicker">Mentor onboarding</p>
        <h1>Set up your mentor profile.</h1>
        <p>
          Add your expertise, availability, and teaching style so learners know
          what you can help them achieve.
        </p>
      </section>
      <section className="onboarding-panel">
        <MentorOnboardingForm />
      </section>
    </main>
  );
}
