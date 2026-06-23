import Link from "next/link";
import { SignUpForm } from "@/components/AuthForms";

export default function SignUpPage() {
  return (
    <main className="auth-page">
      <section className="auth-shell">
        <div className="auth-brand-panel">
          <Link className="logo" href="/">
            Nexora
          </Link>
          <div>
            <p className="kicker">Start learning</p>
            <h1>Join the peer learning marketplace.</h1>
            <p>
              Create an account to book expert-led sessions, track skill
              roadmaps, and build a learning path that fits your goals.
            </p>
          </div>
        </div>

        <section className="auth-card" aria-labelledby="sign-up-title">
          <p className="kicker">Create account</p>
          <h2 id="sign-up-title">Get started with Nexora</h2>
          <p>Choose learner or teacher later from your dashboard.</p>

          <SignUpForm />

          <p className="auth-switch">
            Already have an account? <Link href="/auth/sign-in">Sign in</Link>
          </p>
        </section>
      </section>
    </main>
  );
}
