import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, CheckCircle2, Circle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

interface Result {
  track: string;
  id: string;
  name: string;
  status: string;
  date: string;
}

/* Ordered status steps with positive language */
const statusSteps = [
  { key: "submitted", label: "Application Received" },
  { key: "under_review", label: "Under Review" },
  { key: "decision", label: "Decision Communicated" },
];

const nominationSteps = [
  { key: "nomination_submitted", label: "Nomination Received" },
  { key: "nominee_invited", label: "Nominee Invited" },
  { key: "nominee_submitted", label: "Nominee Application Received" },
  { key: "under_review", label: "Under Review" },
  { key: "decision", label: "Decision Communicated" },
];

function getStepIndex(status: string, isNomination: boolean): number {
  if (status === "draft") return -1;
  if (status === "accepted" || status === "rejected") {
    return isNomination ? nominationSteps.length - 1 : statusSteps.length - 1;
  }
  const steps = isNomination ? nominationSteps : statusSteps;
  return steps.findIndex((s) => s.key === status);
}

function getDecisionLabel(status: string): string | null {
  if (status === "accepted") return "Congratulations — you have been selected for the Fellowship.";
  if (status === "rejected")
    return "Thank you for your application. After careful consideration, the committee has chosen to move forward with other candidates this year. We encourage you to apply again in the future.";
  return null;
}

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSearch = async () => {
    const q = query.trim();
    if (!q) return;
    setLoading(true);
    setSearched(true);
    const all: Result[] = [];

    // Track 1
    const { data: apps } = await supabase
      .from("applications")
      .select("application_id, first_name, last_name, status, created_at")
      .or(`email.ilike.%${q}%,application_id.ilike.%${q}%`);

    if (apps) {
      apps.forEach((a) =>
        all.push({
          track: "Track 1 — Individual",
          id: a.application_id,
          name: `${a.first_name} ${a.last_name}`,
          status: a.status,
          date: new Date(a.created_at).toLocaleDateString(),
        })
      );
    }

    // Track 2
    const { data: noms } = await supabase
      .from("nominations")
      .select("nomination_id, nominee_first_name, nominee_last_name, institution_name, status, created_at")
      .or(`nominee_email.ilike.%${q}%,contact_email.ilike.%${q}%,nomination_id.ilike.%${q}%`);

    if (noms) {
      noms.forEach((n) =>
        all.push({
          track: "Track 2 — Institutional",
          id: n.nomination_id,
          name: `${n.nominee_first_name} ${n.nominee_last_name} (${n.institution_name})`,
          status: n.status,
          date: new Date(n.created_at).toLocaleDateString(),
        })
      );
    }

    // Track 3
    const { data: t3 } = await supabase
      .from("track3_applications" as any)
      .select("application_id, first_name, last_name, status, created_at")
      .or(`email.ilike.%${q}%,application_id.ilike.%${q}%`);

    if (t3) {
      (t3 as any[]).forEach((a) =>
        all.push({
          track: "Track 3 — Nominated",
          id: a.application_id,
          name: `${a.first_name} ${a.last_name}`,
          status: a.status,
          date: new Date(a.created_at).toLocaleDateString(),
        })
      );
    }

    setResults(all);
    setLoading(false);
  };

  const renderTimeline = (result: Result) => {
    const isNomination = result.track.includes("Track 2");
    const steps = isNomination ? nominationSteps : statusSteps;
    const currentIdx = getStepIndex(result.status, isNomination);
    const decisionLabel = getDecisionLabel(result.status);

    return (
      <div className="border border-border p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <p className="text-xs text-muted-foreground mb-1">{result.track}</p>
            <p className="font-semibold text-lg">{result.name}</p>
            <p className="text-xs text-muted-foreground font-mono mt-1">{result.id}</p>
          </div>
          <p className="text-xs text-muted-foreground whitespace-nowrap">Submitted {result.date}</p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative ml-2">
          {steps.map((step, i) => {
            const isCompleted = i <= currentIdx;
            const isCurrent = i === currentIdx;
            const isLast = i === steps.length - 1;

            return (
              <div key={step.key} className="flex gap-4 relative">
                {/* Vertical line */}
                {!isLast && (
                  <div
                    className={`absolute left-[11px] top-[28px] w-0.5 h-[calc(100%-4px)] ${
                      i < currentIdx ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}

                {/* Icon */}
                <div className="relative z-10 mt-0.5 shrink-0">
                  {isCompleted ? (
                    <CheckCircle2 size={22} className="text-primary" />
                  ) : isCurrent ? (
                    <Clock size={22} className="text-primary animate-pulse" />
                  ) : (
                    <Circle size={22} className="text-muted-foreground/30" />
                  )}
                </div>

                {/* Label */}
                <div className={`pb-8 ${isLast ? "pb-0" : ""}`}>
                  <p
                    className={`text-sm font-medium ${
                      isCompleted ? "text-foreground" : "text-muted-foreground/50"
                    }`}
                  >
                    {step.label}
                  </p>
                  {/* Decision message on last step */}
                  {isLast && decisionLabel && (
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-lg">
                      {decisionLabel}
                    </p>
                  )}
                  {isCurrent && !isLast && (
                    <p className="text-xs text-muted-foreground mt-1">In progress</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {result.status === "draft" && (
          <div className="mt-4 bg-muted/50 border border-border p-4 text-sm text-muted-foreground">
            Your application is saved as a draft. Please return to complete and submit Stage 2.
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="label-text mb-2 text-primary">Application Tracker</p>
              <h1 className="editorial-subheading mb-3">Check Your Application Status</h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enter the email address you used when applying, or your application / nomination ID
                to look up the current status of your submission.
              </p>
            </div>

            <div className="flex gap-3">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Email address or Application ID (e.g. APP-2026-0001)"
                className="flex-1"
              />
              <button
                onClick={handleSearch}
                disabled={loading}
                className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Search size={14} />
                {loading ? "Searching…" : "Search"}
              </button>
            </div>

            {searched && (
              <div className="pt-4 space-y-6">
                {results.length === 0 ? (
                  <div className="text-center py-12 border border-border">
                    <p className="text-muted-foreground text-sm">
                      No applications found for "{query}". Please check the email or ID and try again.
                    </p>
                  </div>
                ) : (
                  results.map((r) => (
                    <motion.div
                      key={r.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {renderTimeline(r)}
                    </motion.div>
                  ))
                )}
              </div>
            )}

            <div className="pt-8 border-t border-border">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Return to Homepage <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
