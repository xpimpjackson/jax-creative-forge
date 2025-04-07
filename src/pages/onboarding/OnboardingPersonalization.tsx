
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import Logo from "@/components/Logo";

const OnboardingPersonalization = () => {
  const navigate = useNavigate();
  const [creativeType, setCreativeType] = useState("");
  const [experience, setExperience] = useState("");
  const [preferences, setPreferences] = useState({
    aiAssistance: true,
    collaboration: false,
    automation: true,
    analytics: false,
  });

  const handlePreferenceChange = (preference: string) => {
    setPreferences(prev => ({
      ...prev,
      [preference]: !prev[preference as keyof typeof preferences],
    }));
  };

  const nextStep = () => {
    // In a real application, we would save these preferences
    localStorage.setItem("jax-preferences", JSON.stringify({
      creativeType,
      experience,
      preferences,
    }));
    
    navigate("/onboarding/tour");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-jax-dark to-black flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-10">
          <Logo size="md" />
          <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-gradient">
            Personalize Your Experience
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Tell us about your creative needs so we can tailor JAX to work best for you.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-semibold mb-6 text-white">What type of creator are you?</h2>
          
          <RadioGroup value={creativeType} onValueChange={setCreativeType} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { value: "designer", label: "Designer", description: "Visual and graphic design" },
              { value: "writer", label: "Writer", description: "Content and copywriting" },
              { value: "marketer", label: "Marketer", description: "Digital and social media marketing" },
              { value: "developer", label: "Developer", description: "Web and app development" },
              { value: "videoCreator", label: "Video Creator", description: "Video production and editing" },
              { value: "other", label: "Other", description: "Something else entirely" },
            ].map((item) => (
              <Label
                key={item.value}
                htmlFor={item.value}
                className={`
                  glass-card p-4 flex items-start gap-3 cursor-pointer hover:bg-white/10
                  ${creativeType === item.value ? "border-jax-purple neo-glow" : "border-white/10"}
                `}
              >
                <RadioGroupItem value={item.value} id={item.value} className="mt-1" />
                <div>
                  <div className="font-medium">{item.label}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
              </Label>
            ))}
          </RadioGroup>
        </div>

        <div className="glass-panel rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-semibold mb-6 text-white">What's your experience level?</h2>
          
          <RadioGroup value={experience} onValueChange={setExperience} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { value: "beginner", label: "Beginner", description: "I'm just getting started" },
              { value: "intermediate", label: "Intermediate", description: "I have some experience" },
              { value: "advanced", label: "Advanced", description: "I'm very experienced" },
            ].map((item) => (
              <Label
                key={item.value}
                htmlFor={`exp-${item.value}`}
                className={`
                  glass-card p-4 flex items-start gap-3 cursor-pointer hover:bg-white/10
                  ${experience === item.value ? "border-jax-purple neo-glow" : "border-white/10"}
                `}
              >
                <RadioGroupItem value={item.value} id={`exp-${item.value}`} className="mt-1" />
                <div>
                  <div className="font-medium">{item.label}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
              </Label>
            ))}
          </RadioGroup>
        </div>

        <div className="glass-panel rounded-2xl p-6 md:p-8 mb-10">
          <h2 className="text-xl font-semibold mb-6 text-white">Features you're interested in:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "aiAssistance", label: "AI Assistance", description: "Get creative suggestions and help from AI" },
              { id: "collaboration", label: "Collaboration Tools", description: "Work with teammates in real-time" },
              { id: "automation", label: "Workflow Automation", description: "Automate repetitive tasks" },
              { id: "analytics", label: "Performance Analytics", description: "Track and optimize your content" },
            ].map((item) => (
              <div
                key={item.id}
                className="glass-card p-4 flex justify-between items-center"
              >
                <div>
                  <div className="font-medium">{item.label}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
                <Switch
                  checked={preferences[item.id as keyof typeof preferences]}
                  onCheckedChange={() => handlePreferenceChange(item.id)}
                  className="data-[state=checked]:bg-jax-purple"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => navigate("/onboarding/welcome")}
            className="border-jax-purple/50 text-jax-purple hover:bg-jax-purple/10"
          >
            Back
          </Button>
          
          <Button 
            onClick={nextStep}
            className="bg-gradient-to-r from-jax-purple to-jax-purple-dark hover:from-jax-purple-dark hover:to-jax-purple text-white px-8"
            disabled={!creativeType || !experience}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPersonalization;
