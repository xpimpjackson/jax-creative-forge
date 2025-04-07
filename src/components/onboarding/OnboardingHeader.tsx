
import Logo from "@/components/Logo";

const OnboardingHeader = () => {
  return (
    <div className="text-center mb-8">
      <Logo size="md" />
      <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-gradient">
        Create Your First Project
      </h1>
      <p className="text-lg text-gray-300 mb-4 max-w-3xl mx-auto">
        Let's create a quick sample to show how JAX can transform your creative workflow.
      </p>
    </div>
  );
};

export default OnboardingHeader;
