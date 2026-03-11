import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="label-text mb-6">About the Fellowship</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="editorial-subheading mb-8">
              Building the next generation of cultural leaders
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="body-large text-muted-foreground">
              The Brij Cultural Leaders Fellowship is a nine-month programme for mid-career
              cultural practitioners across South Asia — the first of its kind in the region.
              It is built on a single conviction: that the most valuable thing a Fellow develops
              is not a deliverable, but a question.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide hover:gap-3 transition-all"
            >
              Learn more about the Fellowship <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
