import { industries } from "@/data/industries";
import OnboardingForm from "./_components/onboarding-form";

export default async function OnboardingPage() {
  // Check if user is already onboarded

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
}