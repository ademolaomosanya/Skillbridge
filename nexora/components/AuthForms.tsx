"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignUpForm() {
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Creating account...");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: String(formData.get("name")),
        email: String(formData.get("email")),
        password: String(formData.get("password")),
        role: String(formData.get("role")),
      }),
    });

    if (!response.ok) {
      setStatus("Unable to create account. Check your details and try again.");
      return;
    }

    const result = await signIn("credentials", {
      email: String(formData.get("email")),
      password: String(formData.get("password")),
      redirect: false,
    });

    if (result?.error) {
      setStatus("Account created. Sign in to continue.");
      router.push("/auth/sign-in");
      return;
    }

    const role = String(formData.get("role"));
    router.push(role === "TEACHER" ? "/onboarding/mentor" : "/onboarding/learner");
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <label>
        Full name
        <input name="name" placeholder="Your name" required />
      </label>
      <label>
        Email
        <input name="email" placeholder="you@example.com" required type="email" />
      </label>
      <label>
        Password
        <input
          minLength={8}
          name="password"
          placeholder="Create a password"
          required
          type="password"
        />
      </label>
      <fieldset className="role-choice">
        <legend>I want to join as</legend>
        <label>
          <input defaultChecked name="role" type="radio" value="LEARNER" />
          <span>
            <strong>Learner</strong>
            <small>Find mentors, follow roadmaps, and book sessions.</small>
          </span>
        </label>
        <label>
          <input name="role" type="radio" value="TEACHER" />
          <span>
            <strong>Mentor</strong>
            <small>Share your expertise and manage learner bookings.</small>
          </span>
        </label>
      </fieldset>
      <button className="button button-primary" type="submit">
        Sign up
      </button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}

export function SignInForm() {
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Signing in...");

    const formData = new FormData(event.currentTarget);
    const result = await signIn("credentials", {
      email: String(formData.get("email")),
      password: String(formData.get("password")),
      redirect: false,
    });

    if (result?.error) {
      setStatus("Invalid email or password.");
      return;
    }

    const sessionResponse = await fetch("/api/auth/session");
    const session = (await sessionResponse.json()) as {
      user?: { role?: "LEARNER" | "TEACHER" | "ADMIN" };
    };

    router.push(
      session.user?.role === "TEACHER"
        ? "/dashboard/teacher"
        : "/dashboard",
    );
    router.refresh();
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <label>
        Email
        <input name="email" placeholder="you@example.com" required type="email" />
      </label>
      <label>
        Password
        <input name="password" placeholder="Your password" required type="password" />
      </label>
      <button className="button button-primary" type="submit">
        Sign in
      </button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
