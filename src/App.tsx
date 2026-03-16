import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Apply from "./pages/Apply";
import ApplyIndividual from "./pages/ApplyIndividual";
import ApplyInstitution from "./pages/ApplyInstitution";
import ApplyNominee from "./pages/ApplyNominee";
import ApplyTrack3 from "./pages/ApplyTrack3";
import Dashboard from "./pages/Dashboard";
import SubmissionConfirmation from "./pages/SubmissionConfirmation";
import Publications from "./pages/Publications";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/apply/individual" element={<ApplyIndividual />} />
          <Route path="/apply/institution" element={<ApplyInstitution />} />
          <Route path="/apply/nominee" element={<ApplyNominee />} />
          <Route path="/apply/track3" element={<ApplyTrack3 />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/submission-confirmation" element={<SubmissionConfirmation />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
