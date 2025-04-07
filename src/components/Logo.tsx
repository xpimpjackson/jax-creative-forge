
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo = ({ size = "md", className }: LogoProps) => {
  const sizes = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-5xl",
  };

  return (
    <div className={cn("font-bold text-center inline-flex items-center", sizes[size], className)}>
      <span className="text-gradient-purple animate-pulse-glow bg-clip-text text-transparent px-2 py-1 rounded-lg">
        JAX
      </span>
    </div>
  );
};

export default Logo;
