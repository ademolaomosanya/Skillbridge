import Link from "next/link";

export function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="app-footer-inner">
        <Link className="logo" href="/">
          Nexora
        </Link>
        <div className="app-footer-links">
          <Link href="/teachers">Teachers</Link>
          <Link href="/bookings/new">Bookings</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/auth/sign-in">Sign in</Link>
        </div>
      </div>
      <div className="app-footer-bottom">
        <p>© 2025 Nexora. All rights reserved.</p>
        <div>
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
          <a href="#">Cookies settings</a>
        </div>
      </div>
    </footer>
  );
}
