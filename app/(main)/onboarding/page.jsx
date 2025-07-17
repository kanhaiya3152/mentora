import { industries } from "@/data/industries";
import OnboardingForm from "./_components/onboarding-form";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

export default async function OnboardingPage() {
  // Check if user is already onboarded
  const {isOnboarded} = await getUserOnboardingStatus();

  if(isOnboarded) {
    redirect("/dashboard")
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
}