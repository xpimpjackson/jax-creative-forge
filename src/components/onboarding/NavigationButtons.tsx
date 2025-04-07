
import { Button } from "@/components/ui/button";

interface NavigationButtonsProps {
  onBack: () => void;
  onSkip: () => void;
}

const NavigationButtons = ({ onBack, onSkip }: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between">
      <Button
        variant="outline"
        onClick={onBack}
        className="border-jax-purple/50 text-jax-purple hover:bg-jax-purple/10"
      >
        Back
      </Button>
      
      <Button 
        onClick={onSkip}
        className="bg-white/10 hover:bg-white/20 text-white"
      >
        Skip to Plans
      </Button>
    </div>
  );
};

export default NavigationButtons;
