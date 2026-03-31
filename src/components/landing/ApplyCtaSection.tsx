import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

const ApplyCtaSection = () => {
  const {isLoggedIn}= useAuth()
  return (
    <section className="section-padding brij-gradient-grain">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="editorial-subheading text-white mb-6">
            Applications for the Brij Cultural Leaders Fellowship are now open.
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto font-body">
            Apply through our open call to join the next cohort of cultural leaders.
          </p>
          {!isLoggedIn && (

          <Link
            to="/apply"
            className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 font-heading font-bold tracking-wide text-sm hover:bg-white hover:text-foreground transition-colors active:scale-[0.97]"
          >
            Start Application
          </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ApplyCtaSection;
