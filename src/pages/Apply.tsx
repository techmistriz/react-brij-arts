import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Apply = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero Banner */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="label-text mb-4">Open Call</p>
            <h1 className="editorial-subheading mb-6">
              Apply to the Brij Cultural Leaders Fellowship
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-2">
              Nine months. South Asia.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Inaugural cohort 2026–27.
            </p>
          </motion.div>
        </section>

        {/* Two Tracks */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-20 md:pb-28">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="label-text mb-8"
          >
            Choose Your Pathway
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Track 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Link
                to="/apply/individual"
                className="group block border border-border p-8 md:p-10 hover:border-foreground transition-colors h-full"
              >
                <p className="label-text mb-3 text-primary">Track 1</p>
                <h2 className="text-xl md:text-2xl font-bold mb-4 font-heading">
                  Individual Applicant
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  For practitioners applying independently. Bursaries are
                  available and have no bearing on how your application is
                  assessed.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide group-hover:gap-3 transition-all">
                  Begin Application <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>

            {/* Track 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Link
                to="/apply/institution"
                className="group block border border-border p-8 md:p-10 hover:border-foreground transition-colors h-full"
              >
                <p className="label-text mb-3 text-primary">Track 2</p>
                <h2 className="text-xl md:text-2xl font-bold mb-4 font-heading">
                  Institutional Nomination
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  For cultural organisations, foundations, and institutions that
                  wish to invest in the development of a practitioner within
                  their team.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide group-hover:gap-3 transition-all">
                  Begin Nomination <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Quick Eligibility */}
        <section className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-bold text-lg mb-6 font-heading">
                  Are you eligible?
                </h2>
                <ul className="space-y-3 text-sm">
                  {[
                    "8–20 years working in arts and culture",
                    "Based in South Asia",
                    "Available for both Goa in-person moments",
                    "Working in any cultural discipline",
                    "Independent or institutional practice — both welcome",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-primary mt-0.5">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-6">
                  Unsure?{" "}
                  <Link
                    to="/faq"
                    className="underline hover:text-foreground transition-colors"
                  >
                    Read the full eligibility criteria
                  </Link>{" "}
                  or contact{" "}
                  <a
                    href="mailto:tbf@serendipityarts.org"
                    className="underline hover:text-foreground transition-colors"
                  >
                    tbf@serendipityarts.org
                  </a>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="font-bold text-lg mb-6 font-heading">
                  Bursaries
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Ten bursaries are available for the inaugural cohort, ranging
                    from 25% to full fee coverage. Full bursary recipients also
                    receive a travel supplement.
                  </p>
                  <p>
                    Applying for a bursary has no bearing on how your application
                    is assessed. The jury never sees bursary requests.
                  </p>
                  <p className="text-xs pt-2">
                    Bursaries are available for Track 1 individual applicants
                    only.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;
