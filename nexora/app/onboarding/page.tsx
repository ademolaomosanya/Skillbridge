import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function OnboardingPage() {
  const session = await auth();

  if (session?.user?.role === "TEACHER") {
    redirect("/onboarding/mentor");
  }

  redirect("/onboarding/learner");
}
