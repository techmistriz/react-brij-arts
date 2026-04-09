import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const routes = [
  {
    label: "Route 1",
    title: "Individual Applicant",
    description:
      "Mid-career practitioners applying on their own initiative, self-funded or with bursary support. This is the primary route into the Fellowship.",
    cta: "Begin Application",
    to: "/apply/individual",
  },
  {
    label: "Route 2",
    title: "Institutional Nomination",
    description:
      "Cultural organisations, foundations, and institutions that wish to invest in the development of a practitioner within their team. The institution funds participation in full.",
    cta: "Begin Nomination",
    to: "/apply/institution",
  },
  {
    label: "Route 3",
    title: "Nominated Application",
    description:
      "For nominees put forward by their institution. Complete this form independently — your institution does not see your answers before submission.",
    cta: "Begin Application",
    to: "/apply/track3",
  },
];

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
              Apply to THE BRIJ Cultural Leaders Fellowship
            </h1>
            <p className="text-muted-foreground max-w-3xl leading-relaxed">
              The Fellowship draws from two entry routes. The difference is in how Fellows enter and how participation is funded. Once selected, all Fellows share the same curriculum, mentors, and cohort experience.
            </p>
          </motion.div>
        </section>

        {/* Application Routes with CTAs */}
        <section className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Route 1 — Individual */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to="/apply/individual"
                  className="group block border border-border p-8 md:p-10 hover:border-brij-orange transition-colors h-full relative overflow-hidden"
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain" />
                  <span className="relative z-10">
                   <p className="label-text mb-3 text-brij-orange group-hover:text-white transition-colors">Route 1</p>
                   <h3 className="text-xl md:text-2xl font-bold font-heading mb-4 group-hover:text-white transition-colors">Individual Application</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Individual applicants are cultural practitioners applying on their own initiative, without institutional nomination. They fund their participation themselves — in full or with bursary support.
                  </p>
                  <div className="space-y-2 text-sm border-t border-border pt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fellowship fee</span>
                      <span className="font-medium">₹5,00,000 — paid by Fellow</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bursary eligible</span>
                      <span className="font-medium text-foreground">Yes — 8 bursaries available</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Places</span>
                      <span className="font-medium">8 Fellows</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brij-orange group-hover:text-white group-hover:gap-3 transition-all">
                    Begin Application <ArrowRight size={16} />
                  </span>
                  </span>
                </Link>
              </motion.div>

              {/* Route 2 — Institutional */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link
                  to="/apply/institution"
                  className="group block border border-border p-8 md:p-10 hover:border-brij-orange transition-colors h-full relative overflow-hidden"
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain" />
                  <span className="relative z-10">
                  <p className="label-text mb-3 text-brij-orange group-hover:text-white transition-colors">Route 2</p>
                  <h3 className="text-xl md:text-2xl font-bold font-heading mb-4 group-hover:text-white transition-colors">Institutional Nomination</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Institutional nominations are for mid-career professionals nominated by a cultural institution or cross-sector body. The institution funds the Fellow's participation in full, including travel.
                  </p>
                  <div className="space-y-2 text-sm border-t border-border pt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fellowship fee</span>
                      <span className="font-medium">₹5,00,000 — paid by institution</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bursary eligible</span>
                      <span className="font-medium">No</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Places</span>
                      <span className="font-medium">5 Fellows</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brij-orange group-hover:text-white group-hover:gap-3 transition-all">
                    Begin Nomination <ArrowRight size={16} />
                  </span>
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Nominated Application (Route 3) note */}
            {/* <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <Link
                to="/apply/track3"
                className="group block border border-border p-6 md:p-8 hover:border-brij-orange transition-colors relative overflow-hidden"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain" />
                <span className="relative z-10 block">
                <p className="label-text mb-2 text-brij-orange group-hover:text-white transition-colors">Already Nominated?</p>
                <h3 className="text-lg font-bold font-heading mb-2 group-hover:text-white transition-colors">Complete Your Nominated Application</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  For nominees put forward by their institution. Complete this form independently — your institution does not see your answers before submission.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brij-orange group-hover:text-white group-hover:gap-3 transition-all">
                  Begin Application <ArrowRight size={16} />
                </span>
                </span>
              </Link>
            </motion.div> */}
          </div>
        </section>

        {/* Eligibility & Bursaries */}
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
                    "7+ years of sustained, active practice in any discipline",
                    "Indian Nationals only, based in India",
                    "Available for both compulsory in-person moments in Goa",
                    "Working in the arts, culture, law, medicine, technology, business, policy, education, journalism, community development, or any adjacent field",
                    "A genuine connection to the cultural sector",
                    "Independent or institutional practice — both welcome",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-brij-orange mt-0.5">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <p className="text-xs text-muted-foreground">
                    Unsure?{" "}
                    <Link
                      to="/faq"
                      className="underline hover:text-foreground transition-colors"
                    >
                      Read the full eligibility criteria
                    </Link>{" "}
                    or contact{" "}
                    <a
                      href="mailto:tbclf@serendipityarts.org"
                      className="underline hover:text-foreground transition-colors"
                    >
                      tbclf@serendipityarts.org
                    </a>
                  </p>
                  <a
                    href="/BrijCLF_ProgrammeBible.pdf"
                    download
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold tracking-wide px-4 py-2 border border-border hover:border-foreground transition-colors"
                  >
                    <Download size={14} />
                    Download Prospectus
                  </a>
                </div>
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
                    Bursaries are available to individual applicants only and are funded by
                    Serendipity Arts. Eight bursaries are available for the
                    inaugural cohort.
                  </p>
                  <p>
                   Every individual applicant is invited to submit a bursary application alongside their Fellowship application. The bursary section is seen only by the Bursary Committee – never by the jury. All applications are assessed on merit alone. 
                  </p>
                  <div className="border border-border p-4 mt-4">
                    <p className="font-medium text-foreground mb-3">Bursary Levels</p>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>100% bursary (₹5,00,000 covered)</span>
                        <span className="font-medium">2 places</span>
                      </div>
                      <div className="flex justify-between">
                        <span>75% bursary (₹3,75,000 covered)</span>
                        <span className="font-medium">3 places</span>
                      </div>
                      <div className="flex justify-between">
                        <span>50% bursary (₹2,50,000 covered)</span>
                        <span className="font-medium">3 places</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs pt-2">
                    Bursary decisions are made by the jury after selection decisions are confirmed
                    and are entirely independent of whether a Fellow is selected.
                  </p>
                  <Link
                    to="/bursary"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brij-orange hover:text-brij-red transition-colors mt-2"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
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
