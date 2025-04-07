
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import Logo from "@/components/Logo";

const Subscription = () => {
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Free",
      description: "Basic tools for individual creators",
      price: { monthly: 0, yearly: 0 },
      features: [
        { name: "Basic AI Assistance", included: true },
        { name: "Limited Content Generation", included: true },
        { name: "Collaboration Features", included: false },
        { name: "Advanced Automation", included: false },
        { name: "Analytics Dashboard", included: false },
        { name: "Priority Support", included: false },
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      description: "Advanced tools for serious creators",
      price: { monthly: 19.99, yearly: 199.99 },
      features: [
        { name: "Advanced AI Assistance", included: true },
        { name: "Unlimited Content Generation", included: true },
        { name: "Basic Collaboration Features", included: true },
        { name: "Advanced Automation", included: true },
        { name: "Analytics Dashboard", included: true },
        { name: "Priority Support", included: false },
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Custom solutions for teams and businesses",
      price: { monthly: 49.99, yearly: 499.99 },
      features: [
        { name: "Advanced AI Assistance", included: true },
        { name: "Unlimited Content Generation", included: true },
        { name: "Advanced Collaboration Features", included: true },
        { name: "Custom Workflows", included: true },
        { name: "Advanced Analytics Dashboard", included: true },
        { name: "24/7 Priority Support", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const selectPlan = (planName: string) => {
    if (planName === "Free") {
      navigate("/dashboard");
    } else if (planName === "Enterprise") {
      // Open contact form or modal in a real app
      navigate("/dashboard");
    } else {
      // In a real app, this would go to payment
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-jax-dark to-black flex flex-col items-center p-4 py-10">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <Logo size="md" />
          <h1 className="text-3xl md:text-5xl font-bold mt-6 mb-4 text-gradient">
            Choose Your Plan
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Select the plan that fits your creative needs. All plans include a 14-day free trial.
          </p>
          
          <div className="inline-flex items-center p-1 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 mb-4">
            <Button
              variant="ghost"
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 ${
                billingPeriod === "monthly" 
                  ? "bg-jax-purple text-white" 
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              Monthly
            </Button>
            <Button
              variant="ghost"
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 ${
                billingPeriod === "yearly" 
                  ? "bg-jax-purple text-white" 
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              Yearly <Badge className="ml-2 bg-jax-purple/30 text-jax-purple-light hover:bg-jax-purple/30">Save 20%</Badge>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`backdrop-blur-lg border-white/10 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                plan.popular 
                  ? "bg-gradient-to-b from-jax-purple/20 to-transparent border-jax-purple/30 neo-glow" 
                  : "bg-white/5"
              }`}
            >
              <CardHeader className="pb-4">
                {plan.popular && (
                  <Badge className="mb-2 self-start bg-jax-purple text-white hover:bg-jax-purple-dark">
                    Most Popular
                  </Badge>
                )}
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-gray-300">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 pb-4">
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">
                      ${plan.price[billingPeriod].toFixed(2)}
                    </span>
                    {plan.price[billingPeriod] > 0 && (
                      <span className="text-gray-400 ml-2">
                        /{billingPeriod === "monthly" ? "month" : "year"}
                      </span>
                    )}
                  </div>
                  {plan.price[billingPeriod] > 0 && (
                    <p className="text-sm text-jax-purple mt-1">
                      14-day free trial
                    </p>
                  )}
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-gray-200" : "text-gray-500"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => selectPlan(plan.name)}
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-jax-purple to-jax-purple-dark hover:from-jax-purple-dark hover:to-jax-purple text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="link"
            onClick={() => navigate("/dashboard")}
            className="text-jax-purple hover:text-jax-purple-light"
          >
            Skip for now and explore JAX
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
