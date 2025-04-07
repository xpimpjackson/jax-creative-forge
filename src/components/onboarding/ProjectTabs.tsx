
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, Video, FileText } from "lucide-react";
import SocialPostForm from "./SocialPostForm";
import PlaceholderTab from "./PlaceholderTab";

interface ProjectTabsProps {
  onComplete: () => void;
}

const ProjectTabs = ({ onComplete }: ProjectTabsProps) => {
  const [activeTab, setActiveTab] = useState("social");
  const [isComplete, setIsComplete] = useState(false);

  const handleGenerate = () => {
    setIsComplete(true);
  };

  return (
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
        
        <SocialPostForm 
          isComplete={isComplete} 
          onGenerate={handleGenerate} 
          onFinish={onComplete} 
        />
      </TabsContent>
      
      <TabsContent value="video">
        <PlaceholderTab 
          icon={Video}
          title="Video Creation"
          description="Create stunning videos with JAX's AI-powered video editor."
          onTrySocial={() => setActiveTab("social")}
        />
      </TabsContent>
      
      <TabsContent value="article">
        <PlaceholderTab 
          icon={FileText}
          title="Article Creation"
          description="Draft compelling articles with JAX's AI writing assistance."
          onTrySocial={() => setActiveTab("social")}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ProjectTabs;
