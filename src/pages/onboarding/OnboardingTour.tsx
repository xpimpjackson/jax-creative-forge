
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "@/components/Logo";
import { 
  Zap, 
  Users, 
  LayoutDashboard, 
  ArrowRight, 
  ArrowLeft 
} from "lucide-react";

const OnboardingTour = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  
  const tourSteps = [
    {
      title: "AI-Powered Creation",
      description: "JAX's intelligent AI assists you throughout the creative process, providing suggestions and automating tedious tasks.",
      icon: <Zap className="h-12 w-12 text-jax-purple" />,
      image: "https://source.unsplash.com/random/800x600/?ai",
    },
    {
      title: "Real-Time Collaboration",
      description: "Work seamlessly with your team in real-time. Share, comment, and edit projects together no matter where you are.",
      icon: <Users className="h-12 w-12 text-jax-blue" />,
      image: "https://source.unsplash.com/random/800x600/?collaboration",
    },
    {
      title: "Customizable Dashboard",
      description: "Arrange your workspace exactly how you want it. Drag, drop, and resize modules to create your perfect creative environment.",
      icon: <LayoutDashboard className="h-12 w-12 text-jax-teal" />,
      image: "https://source.unsplash.com/random/800x600/?dashboard",
    },
  ];

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/onboarding/sample");
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/onboarding/personalization");
    }
  };

  const currentTourStep = tourSteps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-jax-dark to-black flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <Logo size="md" />
          <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-gradient">
            Let's Explore JAX
          </h1>
          <p className="text-lg text-gray-300 mb-4 max-w-3xl mx-auto">
            Take a quick tour of key features that will transform your creative workflow.
          </p>
        </div>

        <div className="glass-panel rounded-2xl overflow-hidden mb-8">
          <div className="h-64 md:h-80 bg-gradient-to-br from-jax-purple/20 to-jax-blue/20 relative">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
              {currentTourStep.icon}
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">{currentTourStep.title}</h2>
            <p className="text-gray-300 mb-6">{currentTourStep.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {tourSteps.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-2 w-8 rounded-full ${index === currentStep ? 'bg-jax-purple' : 'bg-gray-600'}`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="border-jax-purple/50 text-jax-purple hover:bg-jax-purple/10"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                
                <Button 
                  onClick={nextStep}
                  className="bg-gradient-to-r from-jax-purple to-jax-purple-dark hover:from-jax-purple-dark hover:to-jax-purple text-white"
                >
                  {currentStep < tourSteps.length - 1 ? 'Next' : 'Continue'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="link"
            onClick={() => navigate("/onboarding/sample")}
            className="text-jax-purple hover:text-jax-purple-light"
          >
            Skip Tour
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingTour;
