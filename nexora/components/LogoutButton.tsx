"use client";

import { signOut } from "next-auth/react";

export function LogoutButton() {
  return (
    <button
      className="button button-outline app-logout"
      onClick={() => signOut({ callbackUrl: "/" })}
      type="button"
    >
      Logout
    </button>
  );
}
