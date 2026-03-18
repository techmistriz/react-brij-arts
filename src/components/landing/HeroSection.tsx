import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-fellowship.jpg";
import tbclfLogo from "@/assets/white.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Fellowship experience" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
      </div>

      <div className="relative z-10 section-padding !pb-16 md:!pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <img
            src={tbclfLogo}
            alt="The Brij Cultural Leaders Fellowship"
            className="h-28 md:h-36 lg:h-44 mb-8"
          />
          <p className="body-large text-background/80 max-w-xl mb-12">
            A leadership programme for emerging cultural practitioners
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/apply" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-semibold tracking-wide text-sm hover:opacity-90 transition-opacity">
              Apply Now
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border border-background/30 text-background px-8 py-4 font-semibold tracking-wide text-sm hover:bg-background/10 transition-colors"
            >
              Explore the Fellowship
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
