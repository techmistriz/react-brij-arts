import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import tbclfLogo from "@/assets/tbclf-logo-white.png";
import { useAuth } from "@/context/AuthContext";

const HeroSection = () => {
  const { isLoggedIn } = useAuth();
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden brij-gradient-grain">
      <div className="relative z-10 flex flex-col items-center justify-center text-center section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <img
            src={tbclfLogo}
            alt="THE BRIJ Cultural Leaders Fellowship"
            className="h-20 md:h-28 lg:h-36 mb-6 md:mb-8"
          />

          <p className="text-lg md:text-xl text-white/80 max-w-xl mb-12 md:mb-16 font-body leading-relaxed">
            A leadership programme for emerging cultural practitioners
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {!isLoggedIn && (

              <Link
              to="/apply"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 font-heading font-bold tracking-wide text-sm hover:bg-white hover:text-foreground transition-colors active:scale-[0.97]"
              >
              Apply Now
            </Link>
            )}
            <Link
              to="/about"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 font-heading font-bold tracking-wide text-sm hover:bg-white hover:text-foreground transition-colors active:scale-[0.97]"
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
