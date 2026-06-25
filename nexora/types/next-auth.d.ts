import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      role?: "LEARNER" | "TEACHER" | "ADMIN";
    };
  }

  interface User {
    role?: "LEARNER" | "TEACHER" | "ADMIN";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "LEARNER" | "TEACHER" | "ADMIN";
  }
}
