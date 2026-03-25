import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

const ApplyCtaSection = () => {

  const { isLoggedIn } = useAuth();

  return (
    <section className="section-padding bg-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="editorial-subheading text-background mb-6">
            Applications for the Brij Cultural Leaders Fellowship are now open.
          </h2>
          <p className="text-background/50 text-lg mb-10 max-w-xl mx-auto">
            Apply through our open call to join the next cohort of cultural leaders.
          </p>
          {!isLoggedIn && (

          <Link
            to="/apply"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4 font-bold tracking-wide text-sm uppercase hover:opacity-90 transition-opacity"
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
