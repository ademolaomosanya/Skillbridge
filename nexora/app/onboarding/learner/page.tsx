import { LearnerOnboardingForm } from "@/components/OnboardingForms";

export default function LearnerOnboardingPage() {
  return (
    <main className="onboarding-page">
      <section className="onboarding-hero">
        <p className="kicker">Learner onboarding</p>
        <h1>Build the right roadmap first.</h1>
        <p>
          Tell Nexora what you want to improve, your current level, and your
          goal. We will use that to shape your roadmap and mentor matches.
        </p>
      </section>
      <section className="onboarding-panel">
        <LearnerOnboardingForm />
      </section>
    </main>
  );
}
