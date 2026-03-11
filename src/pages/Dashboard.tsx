import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, CheckCircle, FileText, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const statusSteps = [
  { label: "Application Submitted", status: "complete", date: "March 2026" },
  { label: "Under Review", status: "current", date: "In progress" },
  { label: "Shortlisted", status: "upcoming", date: "" },
  { label: "Final Decision", status: "upcoming", date: "" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="label-text mb-4">Applicant Dashboard</p>
            <h1 className="editorial-subheading mb-12">Your Application</h1>
          </motion.div>

          {/* Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-border p-8 md:p-10 mb-8"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="font-bold text-xl mb-1">Brij Cultural Leaders Fellowship</h2>
                <p className="text-sm text-muted-foreground">2026 Cohort — Open Call Application</p>
              </div>
              <span className="label-text bg-primary/10 text-primary px-4 py-1.5 flex items-center gap-2">
                <Clock className="w-3 h-3" />
                Under Review
              </span>
            </div>

            {/* Status Timeline */}
            <div className="space-y-0 mb-8">
              {statusSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-3 h-3 rounded-full border-2 ${
                        step.status === "complete"
                          ? "bg-primary border-primary"
                          : step.status === "current"
                          ? "bg-background border-primary"
                          : "bg-background border-border"
                      }`}
                    />
                    {i < statusSteps.length - 1 && (
                      <div className={`w-px h-8 ${step.status === "complete" ? "bg-primary" : "bg-border"}`} />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className={`text-sm font-medium ${step.status === "upcoming" ? "text-muted-foreground" : ""}`}>
                      {step.label}
                    </p>
                    {step.date && (
                      <p className="text-xs text-muted-foreground mt-0.5">{step.date}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Selection is at the discretion of Serendipity Arts' review committee. 
                All applications are reviewed on merit, alignment with programme goals, and cohort 
                composition. You will be notified of the outcome via email.
              </p>
            </div>
          </motion.div>

          {/* Application Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6 mb-8"
          >
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-bold">Application Details</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Pathway</span>
                  <span className="text-foreground">Open Call</span>
                </li>
                <li className="flex justify-between">
                  <span>Cohort</span>
                  <span className="text-foreground">2026</span>
                </li>
                <li className="flex justify-between">
                  <span>Submitted</span>
                  <span className="text-foreground">March 2026</span>
                </li>
              </ul>
            </div>

            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-bold">Submission Checklist</h3>
              </div>
              <ul className="space-y-2 text-sm">
                {["Applicant Details", "Professional Background", "Participation Type", "Programme Information", "Eligibility Confirmed"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-primary/20 border border-primary rounded-full flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/publications"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border px-5 py-3"
            >
              Browse Serendipity Publications
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border px-5 py-3"
            >
              Return to Fellowship
              <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
