
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface PlaceholderTabProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onTrySocial: () => void;
}

const PlaceholderTab = ({ icon: Icon, title, description, onTrySocial }: PlaceholderTabProps) => {
  return (
    <div className="text-center py-8">
      <Icon className="h-12 w-12 text-jax-purple mx-auto mb-4" />
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-400 mb-6 max-w-md mx-auto">
        {description}
      </p>
      <Button 
        variant="outline"
        onClick={onTrySocial}
        className="border-jax-purple/50 text-jax-purple hover:bg-jax-purple/10"
      >
        Try Social Post First
      </Button>
    </div>
  );
};

export default PlaceholderTab;
