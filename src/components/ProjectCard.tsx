
import { Card, CardContent } from "@/components/ui/card";
import { MoreHorizontal, Image, Video, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Project {
  id: number;
  title: string;
  type: string;
  date: string;
  image: string | null;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "Social Post":
        return <Image className="h-6 w-6 text-jax-purple" />;
      case "Video":
        return <Video className="h-6 w-6 text-jax-teal" />;
      case "Article":
        return <FileText className="h-6 w-6 text-jax-blue" />;
      default:
        return <Image className="h-6 w-6 text-gray-400" />;
    }
  };

  const getGradient = (type: string) => {
    switch (type) {
      case "Social Post":
        return "from-jax-purple/20 to-transparent";
      case "Video":
        return "from-jax-teal/20 to-transparent";
      case "Article":
        return "from-jax-blue/20 to-transparent";
      default:
        return "from-white/10 to-transparent";
    }
  };

  return (
    <Card className="glass-panel overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className={`h-32 bg-gradient-to-b ${getGradient(project.type)} relative`}>
        <div className="absolute top-2 right-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 rounded-full">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black/80 backdrop-blur-md border-white/10">
              <DropdownMenuItem className="text-white hover:bg-white/10 cursor-pointer">Edit</DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-white/10 cursor-pointer">Duplicate</DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-white/10 cursor-pointer">Archive</DropdownMenuItem>
              <DropdownMenuItem className="text-red-400 hover:bg-red-500/10 cursor-pointer">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="absolute top-3 left-3 h-8 w-8 rounded-lg bg-black/30 backdrop-blur-sm flex items-center justify-center">
          {getIcon(project.type)}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium">{project.title}</h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-gray-400">{project.type}</span>
          <span className="text-xs text-gray-400">{project.date}</span>
        </div>
      </CardContent>
    </Card>
  );
};
