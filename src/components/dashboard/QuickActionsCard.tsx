
import { Card, CardContent } from "@/components/ui/card";
import { Image, Video, FileText } from "lucide-react";

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

export default QuickActionsCard;
