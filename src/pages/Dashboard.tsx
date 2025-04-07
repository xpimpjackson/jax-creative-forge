
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Logo from "@/components/Logo";
import {
  ArrowRight,
  Plus,
  LayoutDashboard,
  Image,
  Video,
  FileText,
  Users,
  BarChart,
  Settings,
  MoreHorizontal,
  Zap,
} from "lucide-react";
import { ModuleCard } from "@/components/ModuleCard";
import { ProjectCard } from "@/components/ProjectCard";
import { toast } from "@/components/ui/sonner";

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

  const recentProjects = [
    { id: 1, title: "Summer Campaign", type: "Social Post", date: "Just now", image: null },
    { id: 2, title: "Product Launch Video", type: "Video", date: "2 days ago", image: null },
    { id: 3, title: "Blog Article Draft", type: "Article", date: "1 week ago", image: null },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-jax-dark to-black text-white">
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
            </div>
          </section>
          
          <section className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Recent Projects</h2>
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                View All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
          
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
