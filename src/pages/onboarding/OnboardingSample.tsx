
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import Logo from "@/components/Logo";
import { Check, Image, Video, FileText } from "lucide-react";

const OnboardingSample = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("social");
  const [progress, setProgress] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleGenerate = () => {
    if (!projectName || !projectDescription) return;
    
    setIsGenerating(true);
    
    // Simulate progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsGenerating(false);
        setIsComplete(true);
      }
    }, 200);
  };

  const finishOnboarding = () => {
    navigate("/subscription");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-jax-dark to-black flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <Logo size="md" />
          <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-gradient">
            Create Your First Project
          </h1>
          <p className="text-lg text-gray-300 mb-4 max-w-3xl mx-auto">
            Let's create a quick sample to show how JAX can transform your creative workflow.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-6 md:p-8 mb-10">
          <Tabs defaultValue="social" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="social" className="data-[state=active]:bg-jax-purple/20 data-[state=active]:text-jax-purple">
                <Image className="mr-2 h-4 w-4" />
                Social Post
              </TabsTrigger>
              <TabsTrigger value="video" className="data-[state=active]:bg-jax-purple/20 data-[state=active]:text-jax-purple">
                <Video className="mr-2 h-4 w-4" />
                Video
              </TabsTrigger>
              <TabsTrigger value="article" className="data-[state=active]:bg-jax-purple/20 data-[state=active]:text-jax-purple">
                <FileText className="mr-2 h-4 w-4" />
                Article
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="social" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Create a Social Media Post</h2>
                <p className="text-gray-300 mb-6">
                  JAX can help you create engaging social media content with AI-generated graphics and copy suggestions.
                </p>
              </div>
              
              {!isComplete ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Project Name
                    </label>
                    <Input
                      placeholder="E.g. Summer Campaign Post"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      className="bg-white/5 border-white/10 focus:border-jax-purple"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Describe what you want to create
                    </label>
                    <Textarea
                      placeholder="E.g. A vibrant social media post announcing our summer collection, with bright colors and energetic vibes."
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      className="min-h-[120px] bg-white/5 border-white/10 focus:border-jax-purple"
                    />
                  </div>
                  
                  {isGenerating && (
                    <div className="py-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Generating your project...</span>
                        <span>{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-2 bg-white/10" indicatorClassName="bg-jax-purple" />
                      <div className="text-xs text-gray-400 mt-2">
                        AI is analyzing your request and creating assets...
                      </div>
                    </div>
                  )}
                  
                  <Button
                    disabled={isGenerating || !projectName || !projectDescription}
                    onClick={handleGenerate}
                    className="w-full bg-gradient-to-r from-jax-purple to-jax-purple-dark hover:from-jax-purple-dark hover:to-jax-purple text-white"
                  >
                    {isGenerating ? "Generating..." : "Generate Preview"}
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-black/30 rounded-lg p-6 border border-white/10">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-jax-purple/30 to-jax-blue/30 flex items-center justify-center">
                        <Image className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-xl">{projectName}</h3>
                        <p className="text-gray-400 text-sm">Created with JAX AI</p>
                      </div>
                      <div className="rounded-full bg-green-500/20 text-green-400 p-1">
                        <Check className="h-5 w-5" />
                      </div>
                    </div>
                    
                    <div className="h-40 rounded-lg bg-gradient-to-br from-jax-purple/20 to-jax-blue/20 flex items-center justify-center text-white/50">
                      Preview Generated
                    </div>
                    
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-300">
                        Your project has been successfully created! In the full version, you'll be able to edit and customize this content further.
                      </p>
                    </div>
                  </div>
                  
                  <Button
                    onClick={finishOnboarding}
                    className="w-full bg-gradient-to-r from-jax-purple to-jax-purple-dark hover:from-jax-purple-dark hover:to-jax-purple text-white"
                  >
                    Continue to Dashboard
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="video">
              <div className="text-center py-8">
                <Video className="h-12 w-12 text-jax-purple mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">Video Creation</h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  Create stunning videos with JAX's AI-powered video editor.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => setActiveTab("social")}
                  className="border-jax-purple/50 text-jax-purple hover:bg-jax-purple/10"
                >
                  Try Social Post First
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="article">
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-jax-purple mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">Article Creation</h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  Draft compelling articles with JAX's AI writing assistance.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => setActiveTab("social")}
                  className="border-jax-purple/50 text-jax-purple hover:bg-jax-purple/10"
                >
                  Try Social Post First
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => navigate("/onboarding/tour")}
            className="border-jax-purple/50 text-jax-purple hover:bg-jax-purple/10"
          >
            Back
          </Button>
          
          <Button 
            onClick={finishOnboarding}
            className="bg-white/10 hover:bg-white/20 text-white"
          >
            Skip to Plans
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSample;
