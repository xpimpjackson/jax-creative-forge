
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";

const OnboardingWelcome = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const nextStep = () => {
    navigate("/onboarding/personalization");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-jax-dark to-black flex flex-col items-center justify-center p-4">
      <div className={`max-w-4xl w-full text-center transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-8">
          <Logo size="lg" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
          Welcome to JAX
        </h1>
        
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Get ready to explore a new dimension of creativity with powerful AI tools, 
          seamless workflows, and a customizable experience that evolves with you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="h-20 flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-jax-purple to-jax-purple-dark flex items-center justify-center text-white text-2xl">
                1
              </div>
            </div>
            <h3 className="text-lg font-medium mb-2">Personalize</h3>
            <p className="text-gray-400 text-sm">Tell us about your creative needs</p>
          </div>
          
          <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="h-20 flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-jax-purple/50 to-jax-purple-dark/50 flex items-center justify-center text-white text-2xl">
                2
              </div>
            </div>
            <h3 className="text-lg font-medium mb-2">Discover</h3>
            <p className="text-gray-400 text-sm">Explore JAX's powerful features</p>
          </div>
          
          <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="h-20 flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-jax-purple/30 to-jax-purple-dark/30 flex items-center justify-center text-white text-2xl">
                3
              </div>
            </div>
            <h3 className="text-lg font-medium mb-2">Create</h3>
            <p className="text-gray-400 text-sm">Start your first creative project</p>
          </div>
        </div>
        
        <Button 
          onClick={nextStep}
          className="bg-gradient-to-r from-jax-purple to-jax-purple-dark hover:from-jax-purple-dark hover:to-jax-purple text-white font-medium py-6 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg animate-pulse-glow"
        >
          Let's Begin
        </Button>
        
        <div className="mt-8 text-sm text-gray-400">
          Already know your way around? <span className="text-jax-purple cursor-pointer hover:underline" onClick={() => navigate("/dashboard")}>Skip to Dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default OnboardingWelcome;
