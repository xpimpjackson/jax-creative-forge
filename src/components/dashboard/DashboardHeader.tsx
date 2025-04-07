
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="border-b border-white/10 backdrop-blur-md bg-black/30 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo size="sm" />
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-jax-purple transition-colors">Dashboard</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Templates</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Assets</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            size="sm"
            className="hidden md:flex bg-gradient-to-r from-jax-purple to-jax-purple-dark hover:from-jax-purple-dark hover:to-jax-purple text-white"
          >
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
          
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-jax-purple to-jax-purple-dark flex items-center justify-center text-white text-sm cursor-pointer">
            J
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
