import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-text mb-6">About the Fellowship</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="editorial-subheading mb-8">
              Nine months. One question. A generation of cultural leaders.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
              THE BRIJ Cultural Leaders Fellowship is a nine-month leadership development programme for mid-career cultural practitioners and cross-sector professionals across India — delivered by Serendipity Arts.
            </p>
            <Link
              to="/about"
              className="relative overflow-hidden inline-flex items-center gap-2 text-sm font-heading font-bold tracking-wide px-6 py-3 bg-foreground text-background hover:text-white transition-colors duration-300 group active:scale-[0.97] rounded-md"
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain"></span>
              <span className="relative z-10 inline-flex items-center gap-2">Learn more about the Fellowship <ArrowRight size={16} /></span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
