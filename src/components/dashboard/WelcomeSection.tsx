
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Image, Users, Zap, Video, FileText } from "lucide-react";

const WelcomeSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="col-span-2 glass-panel overflow-hidden">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Welcome to JAX!</h2>
              <p className="text-gray-400">Let's create something amazing today.</p>
            </div>
            <Button
              className="bg-white/10 hover:bg-white/20"
              size="sm"
            >
              Setup Guide
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-jax-purple mb-2">
                <Image className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-1">Create a Project</h3>
              <p className="text-gray-400 text-sm mb-3">Start a new creative project</p>
              <Button size="sm" variant="link" className="text-jax-purple p-0">
                Start <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
            
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-jax-teal mb-2">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-1">Invite Team</h3>
              <p className="text-gray-400 text-sm mb-3">Collaborate with others</p>
              <Button size="sm" variant="link" className="text-jax-teal p-0">
                Invite <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
            
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-jax-blue mb-2">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-1">Explore AI Tools</h3>
              <p className="text-gray-400 text-sm mb-3">Discover AI-powered features</p>
              <Button size="sm" variant="link" className="text-jax-blue p-0">
                Explore <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <QuickActionsCard />
    </div>
  );
};

const QuickActionsCard = () => {
  return (
    <Card className="glass-panel">
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        
        <div className="space-y-3">
          <button className="w-full text-left flex items-center p-3 rounded-lg hover:bg-white/10 transition-colors">
            <div className="h-8 w-8 rounded-lg bg-jax-purple/20 flex items-center justify-center mr-3">
              <Image className="h-4 w-4 text-jax-purple" />
            </div>
            <div>
              <div className="font-medium">New Social Post</div>
              <div className="text-xs text-gray-400">Create graphics for social media</div>
            </div>
          </button>
          
          <button className="w-full text-left flex items-center p-3 rounded-lg hover:bg-white/10 transition-colors">
            <div className="h-8 w-8 rounded-lg bg-jax-teal/20 flex items-center justify-center mr-3">
              <Video className="h-4 w-4 text-jax-teal" />
            </div>
            <div>
              <div className="font-medium">New Video</div>
              <div className="text-xs text-gray-400">Create or edit video content</div>
            </div>
          </button>
          
          <button className="w-full text-left flex items-center p-3 rounded-lg hover:bg-white/10 transition-colors">
            <div className="h-8 w-8 rounded-lg bg-jax-blue/20 flex items-center justify-center mr-3">
              <FileText className="h-4 w-4 text-jax-blue" />
            </div>
            <div>
              <div className="font-medium">New Article</div>
              <div className="text-xs text-gray-400">Create written content</div>
            </div>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeSection;
