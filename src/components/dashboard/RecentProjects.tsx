
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";

interface Project {
  id: number;
  title: string;
  type: string;
  date: string;
  image: string | null;
}

const RecentProjects = () => {
  const recentProjects = [
    { id: 1, title: "Summer Campaign", type: "Social Post", date: "Just now", image: null },
    { id: 2, title: "Product Launch Video", type: "Video", date: "2 days ago", image: null },
    { id: 3, title: "Blog Article Draft", type: "Article", date: "1 week ago", image: null },
  ];

  return (
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
  );
};

export default RecentProjects;
