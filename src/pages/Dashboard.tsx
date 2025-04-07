
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { toast } from "sonner";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import RecentProjects from "@/components/dashboard/RecentProjects";
import CreativeWorkspace from "@/components/dashboard/CreativeWorkspace";

const Dashboard = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    
    // Show welcome toast
    setTimeout(() => {
      toast("Welcome to JAX!", {
        description: "Your creative workspace is ready.",
      });
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-jax-dark to-black text-white">
      <DashboardHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <section className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <Button variant="outline" className="border-jax-purple/50 text-jax-purple hover:bg-jax-purple/10">
                <Zap className="mr-2 h-4 w-4" /> 
                Try Pro Free
              </Button>
            </div>
            
            <WelcomeSection />
          </section>
          
          <RecentProjects />
          
          <CreativeWorkspace />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
