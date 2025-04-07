
import { useState } from "react";
import { Button } from "@/components/ui/button";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import ProgressIndicator from "./ProgressIndicator";
import CompletedPreview from "./CompletedPreview";

interface SocialPostFormProps {
  isComplete: boolean;
  onGenerate: () => void;
  onFinish: () => void;
}

const SocialPostForm = ({ isComplete, onGenerate, onFinish }: SocialPostFormProps) => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleGenerate = () => {
    if (!projectName || !projectDescription) return;
    
    setIsGenerating(true);
    
    // Simulate progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsGenerating(false);
        onGenerate();
      }
    }, 200);
  };

  if (isComplete) {
    return <CompletedPreview projectName={projectName} onFinish={onFinish} />;
  }

  return (
    <div className="space-y-4">
      <FormInput
        label="Project Name"
        value={projectName}
        onChange={setProjectName}
        placeholder="E.g. Summer Campaign Post"
      />
      
      <FormTextarea
        label="Describe what you want to create"
        value={projectDescription}
        onChange={setProjectDescription}
        placeholder="E.g. A vibrant social media post announcing our summer collection, with bright colors and energetic vibes."
      />
      
      {isGenerating && <ProgressIndicator progress={progress} />}
      
      <Button
        disabled={isGenerating || !projectName || !projectDescription}
        onClick={handleGenerate}
        className="w-full bg-gradient-to-r from-jax-purple to-jax-purple-dark hover:from-jax-purple-dark hover:to-jax-purple text-white"
      >
        {isGenerating ? "Generating..." : "Generate Preview"}
      </Button>
    </div>
  );
};

export default SocialPostForm;
