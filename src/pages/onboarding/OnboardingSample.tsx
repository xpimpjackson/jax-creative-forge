
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import ProjectTabs from "@/components/onboarding/ProjectTabs";
import NavigationButtons from "@/components/onboarding/NavigationButtons";

const OnboardingSample = () => {
  const navigate = useNavigate();
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = () => {
    setIsComplete(true);
    navigate("/subscription");
  };

  const handleBack = () => {
    navigate("/onboarding/tour");
  };

  const handleSkip = () => {
    navigate("/subscription");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-jax-dark to-black flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <OnboardingHeader />

        <div className="glass-panel rounded-2xl p-6 md:p-8 mb-10">
          <ProjectTabs onComplete={handleComplete} />
        </div>

        <NavigationButtons onBack={handleBack} onSkip={handleSkip} />
      </div>
    </div>
  );
};

export default OnboardingSample;
