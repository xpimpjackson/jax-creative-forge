
import { Button } from "@/components/ui/button";
import { ModuleCard } from "@/components/ModuleCard";
import { Image, Users, BarChart, Settings } from "lucide-react";

const CreativeWorkspace = () => {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Creative Workspace</h2>
        <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
          Customize
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <ModuleCard
          title="Content Creation"
          icon={<Image className="h-6 w-6 text-jax-purple" />}
          description="Create and edit content"
          color="purple"
        />
        
        <ModuleCard
          title="Collaboration"
          icon={<Users className="h-6 w-6 text-jax-teal" />}
          description="Work with your team"
          color="teal"
        />
        
        <ModuleCard
          title="Analytics"
          icon={<BarChart className="h-6 w-6 text-jax-blue" />}
          description="Track performance"
          color="blue"
        />
        
        <ModuleCard
          title="Settings"
          icon={<Settings className="h-6 w-6 text-gray-400" />}
          description="Configure your workspace"
          color="gray"
        />
      </div>
    </section>
  );
};

export default CreativeWorkspace;
