
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OnboardingWelcome from "./pages/onboarding/OnboardingWelcome";
import OnboardingPersonalization from "./pages/onboarding/OnboardingPersonalization";
import OnboardingTour from "./pages/onboarding/OnboardingTour";
import OnboardingSample from "./pages/onboarding/OnboardingSample";
import Subscription from "./pages/Subscription";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding/welcome" element={<OnboardingWelcome />} />
          <Route path="/onboarding/personalization" element={<OnboardingPersonalization />} />
          <Route path="/onboarding/tour" element={<OnboardingTour />} />
          <Route path="/onboarding/sample" element={<OnboardingSample />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
