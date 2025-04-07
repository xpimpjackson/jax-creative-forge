
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const startOnboarding = () => {
    navigate("/onboarding/welcome");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-jax-dark to-black flex flex-col items-center justify-center p-4">
      <div className={`max-w-5xl w-full text-center transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-10">
          <Logo size="lg" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gradient">
          Where Creativity Meets the Future
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          JAX is an all-in-one, next-generation creative platform designed to elevate your creative potential with powerful AI, seamless automation, and modular design.
        </p>
        
        <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
          <Button 
            size="lg" 
            onClick={startOnboarding}
            className="bg-gradient-to-r from-jax-purple to-jax-purple-dark hover:from-jax-purple-dark hover:to-jax-purple text-white font-medium py-6 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            Get Started
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate("/subscription")} 
            className="border-jax-purple/50 text-jax-purple hover:bg-jax-purple/10 font-medium py-6 px-8 rounded-lg text-lg"
          >
            View Plans
          </Button>
        </div>

        <div className="mt-16 glass-panel rounded-2xl p-6 md:p-10 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-jax-purple/20 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Elevate Your Creative Workflow</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-jax-purple text-4xl mb-4">✨</div>
                <h3 className="text-xl font-medium mb-2">AI-Powered Design</h3>
                <p className="text-gray-400">Intelligent suggestions that adapt to your creative style</p>
              </div>
              <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-jax-teal text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-medium mb-2">Seamless Automation</h3>
                <p className="text-gray-400">Automate repetitive tasks and focus on what matters</p>
              </div>
              <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="text-jax-blue text-4xl mb-4">👥</div>
                <h3 className="text-xl font-medium mb-2">Real-Time Collaboration</h3>
                <p className="text-gray-400">Work with your team in real-time, anywhere</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
