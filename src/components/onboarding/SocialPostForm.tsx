
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Check, Image } from "lucide-react";

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
    return (
      <div className="space-y-6">
        <div className="bg-black/30 rounded-lg p-6 border border-white/10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-jax-purple/30 to-jax-blue/30 flex items-center justify-center">
              <Image className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-xl">{projectName}</h3>
              <p className="text-gray-400 text-sm">Created with JAX AI</p>
            </div>
            <div className="rounded-full bg-green-500/20 text-green-400 p-1">
              <Check className="h-5 w-5" />
            </div>
          </div>
          
          <div className="h-40 rounded-lg bg-gradient-to-br from-jax-purple/20 to-jax-blue/20 flex items-center justify-center text-white/50">
            Preview Generated
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-300">
              Your project has been successfully created! In the full version, you'll be able to edit and customize this content further.
            </p>
          </div>
        </div>
        
        <Button
          onClick={onFinish}
          className="w-full bg-gradient-to-r from-jax-purple to-jax-purple-dark hover:from-jax-purple-dark hover:to-jax-purple text-white"
        >
          Continue to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Project Name
        </label>
        <Input
          placeholder="E.g. Summer Campaign Post"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="bg-white/5 border-white/10 focus:border-jax-purple"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Describe what you want to create
        </label>
        <Textarea
          placeholder="E.g. A vibrant social media post announcing our summer collection, with bright colors and energetic vibes."
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          className="min-h-[120px] bg-white/5 border-white/10 focus:border-jax-purple"
        />
      </div>
      
      {isGenerating && (
        <div className="py-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Generating your project...</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-white/10" />
          <div className="text-xs text-gray-400 mt-2">
            AI is analyzing your request and creating assets...
          </div>
        </div>
      )}
      
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
