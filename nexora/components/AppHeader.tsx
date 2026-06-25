import Link from "next/link";
import { auth } from "@/lib/auth";
import { LogoutButton } from "@/components/LogoutButton";

export async function AppHeader() {
  const session = await auth().catch(() => null);
  const role = session?.user?.role;
  const isMentor = role === "TEACHER";

  return (
    <header className="nav-shell">
      <nav className="navbar" aria-label="Dashboard navigation">
        <Link className="logo" href="/">
          Nexora
        </Link>
        {session?.user ? (
          <div className="nav-links">
            {isMentor ? (
              <>
                <Link href="/dashboard/teacher">Mentor dashboard</Link>
                <Link href="/bookings/new">Bookings</Link>
                <Link href="/teachers">Mentor profile</Link>
                <Link href="/onboarding/mentor">Mentor setup</Link>
              </>
            ) : (
              <>
                <Link href="/dashboard">Learner dashboard</Link>
                <Link href="/teachers">Mentors</Link>
                <Link href="/skills/frontend-developer">Roadmap</Link>
                <Link href="/onboarding/learner">Learning setup</Link>
              </>
            )}
          </div>
        ) : (
          <div className="nav-links">
            <Link href="/teachers">Mentors</Link>
            <Link href="/skills/frontend-developer">Roadmap</Link>
            <Link href="/auth/sign-in">Sign in</Link>
          </div>
        )}
        <div className="nav-actions">
          {session?.user ? (
            <>
              <Link
                className="button button-outline"
                href={isMentor ? "/dashboard/teacher" : "/dashboard"}
              >
                {isMentor ? "Mentor home" : "Learner home"}
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link className="button button-outline" href="/auth/sign-in">
                Sign in
              </Link>
              <Link className="button button-primary" href="/auth/sign-up">
                Start
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
