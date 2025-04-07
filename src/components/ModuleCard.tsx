
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  color: "purple" | "teal" | "blue" | "gray";
}

export const ModuleCard = ({ title, icon, description, color }: ModuleCardProps) => {
  const colorStyles = {
    purple: "from-jax-purple/20 to-transparent border-jax-purple/30 hover:border-jax-purple/50",
    teal: "from-jax-teal/20 to-transparent border-jax-teal/30 hover:border-jax-teal/50",
    blue: "from-jax-blue/20 to-transparent border-jax-blue/30 hover:border-jax-blue/50",
    gray: "from-white/10 to-transparent border-white/10 hover:border-white/30",
  };

  return (
    <Card className={cn(
      "glass-panel overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      "bg-gradient-to-b",
      colorStyles[color]
    )}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>{icon}</div>
          <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
            <span className="sr-only">Open menu</span>
            <svg
              width="15"
              height="3"
              viewBox="0 0 15 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="scale-125"
            >
              <path
                d="M1.5 1.5H13.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
};
