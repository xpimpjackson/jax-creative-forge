
import { Button } from "@/components/ui/button";
import { Check, Image } from "lucide-react";

interface CompletedPreviewProps {
  projectName: string;
  onFinish: () => void;
}

const CompletedPreview = ({ projectName, onFinish }: CompletedPreviewProps) => {
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
};

export default CompletedPreview;
