
import { Progress } from "@/components/ui/progress";

interface ProgressIndicatorProps {
  progress: number;
}

const ProgressIndicator = ({ progress }: ProgressIndicatorProps) => {
  return (
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
  );
};

export default ProgressIndicator;
