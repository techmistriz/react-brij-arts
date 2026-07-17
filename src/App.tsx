if (
  window.location.pathname === "/academy" ||
  window.location.pathname === "/academy/"
) {
  window.location.replace("/academy/fellowship/");
}

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
// import ScrollToHash from "./components/ScrollToHash";
import Login from "./pages/Login";
import StructureSection from "./components/landing/StructureSection";
import Structure from "./pages/Structure";
import Bursary from "./pages/Bursary";
import AnalyticsTracker from "./components/AnalyticsTracker";
import ApplicationsClosedModal from "./pages/PopupModal";
import CohortPage from "./pages/CohortPage";
import Brij from "./pages/Brij-Pages/Brij";
import BrijAbout from "./pages/Brij-Pages/BrijAbout";
import BrijCredits from "./pages/Brij-Pages/BrijCredits";
import FellowshipModal from "./components/FellowshipModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* <BrowserRouter> */}
        {/* <ScrollToHash /> */}

        {/* <FellowshipModal /> */}

        <AnalyticsTracker />

        <Routes>
          {/* <Route path="/" element={<Index />} /> */}
          <Route path="/academy/fellowship" element={<Index />} />
          <Route path="/academy/fellowship/about" element={<About />} />
          <Route path="/academy/fellowship/apply" element={<Apply />} />
          <Route path="/academy/fellowship/login" element={<Login />} />
          <Route
            path="/academy/fellowship/apply/individual"
            element={<ApplyIndividual />}
          />
          <Route
            path="/academy/fellowship/apply/institution"
            element={<ApplyInstitution />}
          />
          <Route
            path="/academy/fellowship/apply/nominee"
            element={<ApplyNominee />}
          />
          <Route
            path="/academy/fellowship/apply/track3"
            element={<ApplyTrack3 />}
          />
          <Route path="/academy/fellowship/dashboard" element={<Dashboard />} />
          <Route
            path="/academy/fellowship/submission-confirmation"
            element={<SubmissionConfirmation />}
          />
          <Route
            path="/academy/fellowship/publications"
            element={<Publications />}
          />
          <Route path="/academy/fellowship/faq" element={<Faq />} />
          <Route path="/academy/fellowship/bursary" element={<Bursary />} />
          <Route path="/academy/fellowship/structure" element={<Structure />} />
          <Route
            path="/academy/fellowship/cohort/2026-2027"
            element={<CohortPage />}
          />

          {/* Brij */}
          <Route path="/" element={<Brij />} />
          <Route path="/about" element={<BrijAbout />} />
          <Route path="/credits" element={<BrijCredits />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
