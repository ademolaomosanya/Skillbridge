import Link from "next/link";
import { LogoutButton } from "@/components/LogoutButton";

export function AppHeader() {
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
          <Link className="button button-outline" href="/dashboard">
            Dashboard
          </Link>
          <LogoutButton />
        </div>
      </nav>
    </header>
  );
}
