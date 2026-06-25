import Link from "next/link";
import { SignInForm } from "@/components/AuthForms";

export default function SignInPage() {
  return (
    <main className="auth-page">
      <section className="auth-shell">
        <div className="auth-brand-panel">
          <Link className="logo" href="/">
            Nexora
          </Link>
          <div>
            <p className="kicker">Welcome back</p>
            <h1>Continue your learning journey.</h1>
            <p>
              Sign in to manage bookings, follow your roadmap, and connect with
              mentors who can help you move faster.
            </p>
          </div>
        </div>

        <section className="auth-card" aria-labelledby="sign-in-title">
          <p className="kicker">Sign in</p>
          <h2 id="sign-in-title">Access your account</h2>
          <p>Use the email and password you registered with.</p>

          <SignInForm />

          <p className="auth-switch">
            New to Nexora? <Link href="/auth/sign-up">Create an account</Link>
          </p>
        </section>
      </section>
    </main>
  );
}
