import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Bursary = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-16 md:mb-24"
            >
              <p className="label-text mb-6">Financial Support</p>
              <h1 className="editorial-subheading max-w-3xl">
                Bursaries
              </h1>
            </motion.div>

            <div className="space-y-20 md:space-y-28">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
              <div className="grid md:grid-cols-2 gap-8 md:gap-24">
                  <div>
                    <p className="label-text mb-3 text-brij-orange">Overview</p>
                    <h2 className="text-xl md:text-2xl font-bold font-heading">
                      Who is eligible
                    </h2>
                  </div>
                  <div className="space-y-5">
                    <p className="text-muted-foreground leading-relaxed">
                      Bursaries are available to individual applicants only (Route 1) and are funded by Serendipity Arts Foundation. Eight bursaries are available for the inaugural cohort.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Every individual applicant is invited to submit a bursary application alongside their Fellowship application, responding to a set of financial need questions. The bursary section of the application is seen only by the Course Director and Programme Manager — never by the jury.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      All applications are assessed by the jury on merit alone, with no knowledge of whether an applicant has applied for a bursary or at what level.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* How to Apply */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-24">
                  <div>
                    <p className="label-text mb-3 text-brij-orange">Application</p>
                    <h2 className="text-xl md:text-2xl font-bold font-heading">
                      How to apply for a bursary
                    </h2>
                  </div>
                  <div className="space-y-5">
                    <p className="text-muted-foreground leading-relaxed">
                      In Section H of the individual application form, simply check the box labelled "I would like to apply for a bursary" and attach any supporting documentation.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Your bursary request will be reviewed independently by the programme team after the jury has completed its evaluation of all applications. The bursary level awarded will be communicated to you via email.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Bursary Levels */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-24">
                  <div>
                    <p className="label-text mb-3 text-brij-orange">Levels</p>
                    <h2 className="text-xl md:text-2xl font-bold font-heading">
                      Three bursary tiers
                    </h2>
                  </div>
                  <div className="space-y-5">
                    <p className="text-muted-foreground leading-relaxed">
                      Bursary decisions are made by the independent jury after selection decisions have been confirmed, using the financial need responses. Bursaries are awarded at one of three levels:
                    </p>
                    <div className="border border-border">
                      <div className="grid grid-cols-4 gap-4 p-4 border-b border-border text-sm font-semibold">
                        <span>Bursary Level</span>
                        <span>Amount Covered</span>
                        <span>Fee Payable</span>
                        <span>Places</span>
                      </div>
                      {[
                        { level: "100%", covered: "₹5,00,000", payable: "₹0", places: "2" },
                        { level: "75%", covered: "₹3,75,000", payable: "₹1,25,000", places: "3" },
                        { level: "50%", covered: "₹2,50,000", payable: "₹2,50,000", places: "3" },
                      ].map((row) => (
                        <div key={row.level} className="grid grid-cols-4 gap-4 p-4 border-b border-border last:border-b-0 text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">{row.level}</span>
                          <span>{row.covered}</span>
                          <span>{row.payable}</span>
                          <span>{row.places}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Full bursary recipients also receive a travel supplement to cover return travel to both in-person moments in Goa.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* How it Works */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-24">
                  <div>
                    <p className="label-text mb-3 text-brij-orange">Process</p>
                    <h2 className="text-xl md:text-2xl font-bold font-heading">
                      How bursary decisions are made
                    </h2>
                  </div>
                  <div className="space-y-5">
                    <p className="text-muted-foreground leading-relaxed">
                      Bursary decisions are made entirely independently of selection decisions. Whether or not a Fellow receives a bursary — and at what level — has no bearing on whether they are selected.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Bursaries are awarded after selection — all Fellows are selected on merit first. The bursary section of the application is seen only by the Course Director and Programme Manager, never by the jury.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Important Notes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-24">
                  <div>
                    <p className="label-text mb-3 text-brij-orange">Important Notes</p>
                    <h2 className="text-xl md:text-2xl font-bold font-heading">
                      Conditions & policies
                    </h2>
                  </div>
                  <div className="space-y-5">
                    <ul className="space-y-4 text-muted-foreground leading-relaxed">
                      <li className="flex items-start gap-3">
                        <span className="text-brij-orange mt-0.5">•</span>
                        <span>A Fellow who accepts a bursary and subsequently withdraws from the programme without exceptional cause may be asked to return a portion of the bursary. This will be set out in the Fellow Agreement.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-brij-orange mt-0.5">•</span>
                        <span>If a bursary recipient's financial circumstances change materially before the programme begins, they are expected to declare this to the Course Director. The bursary will not be revised downward, but a waiver must be agreed.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-brij-orange mt-0.5">•</span>
                        <span>Institutional nominees (Route 2) are not eligible for bursaries. The institution has covered the fee in full.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="border-t border-border pt-12"
              >
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">Ready to apply?</p>
                  <Link
                    to="/apply/individual"
                    className="relative overflow-hidden inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 text-sm font-heading font-bold tracking-wide group hover:text-white transition-colors"
                  >
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain" />
                    <span className="relative z-10 inline-flex items-center gap-2">
                      Begin Individual Application <ArrowRight size={16} />
                    </span>
                  </Link>
                  <p className="text-xs text-muted-foreground mt-4">
                    Questions? <a href="mailto:tbf@serendipityarts.org" className="underline hover:text-foreground transition-colors">tbf@serendipityarts.org</a>
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

export default Bursary;
