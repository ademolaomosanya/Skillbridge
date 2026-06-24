import Link from "next/link";
import { auth } from "@/lib/auth";
import { LogoutButton } from "@/components/LogoutButton";

export async function AppHeader() {
  const session = await auth().catch(() => null);

  return (
    <header className="nav-shell">
      <nav className="navbar" aria-label="Dashboard navigation">
        <Link className="logo" href="/">
          Nexora
        </Link>
        <div className="nav-links">
          <Link href="/teachers">Teachers</Link>
          <Link href="/bookings/new">Book session</Link>
          <Link href="/skills/frontend-developer">Roadmap</Link>
          <Link href="/dashboard/teacher">Teacher dashboard</Link>
        </div>
        <div className="nav-actions">
          {session?.user ? (
            <>
              <Link className="button button-outline" href="/dashboard">
                Dashboard
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
