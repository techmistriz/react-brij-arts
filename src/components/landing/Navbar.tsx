import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import serendipityLogo from "@/assets/serendipity-arts-logo-full.png";
import brijLogo from "@/assets/brij-logo.png";
import { useAuth } from "@/context/AuthContext";
import { logoutUser } from "@/lib/api/logout";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  //  logout
  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      logout(); // handles everything (token + user + state)
      navigate("/");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-5 md:px-12 lg:px-24 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3 md:gap-4">
          <img src={brijLogo} alt="THE BRIJ" className="h-5 md:h-7" />
          <span className="text-brij-gray text-lg font-light select-none">
            |
          </span>
          <img
            src={serendipityLogo}
            alt="Serendipity Arts"
            className="h-7 md:h-10"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/about"
            className="text-sm font-heading font-bold uppercase tracking-[0.12em] hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all"
          >
            About
          </Link>
          <Link
            to="/structure"
            className="text-sm font-heading font-bold uppercase tracking-[0.12em] hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all"
          >
            Structure
          </Link>
          <Link
            to="/bursary"
            className="text-sm font-heading font-bold uppercase tracking-[0.12em] hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all"
          >
            Bursary
          </Link>
          <Link
            to="/publications"
            className="text-sm font-heading font-bold uppercase tracking-[0.12em] hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all"
          >
            Publications
          </Link>
          <Link
            to="/faq"
            className="text-sm font-heading font-bold uppercase tracking-[0.12em] hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all"
          >
            FAQ
          </Link>
  <div className="flex items-center gap-3">
          {!isLoggedIn && (
            <Link
              to="/login"
              className="relative overflow-hidden rounded-md px-6 py-2.5 text-sm font-heading font-bold tracking-wide bg-foreground text-background hover:text-white transition-colors duration-300 group active:scale-[0.97]"
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain"></span>
              <span className="relative z-10">Login</span>
            </Link>
          )}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="relative overflow-hidden rounded-md px-6 py-2.5 text-sm font-heading font-bold tracking-wide bg-foreground text-background hover:text-white transition-colors duration-300 group active:scale-[0.97]"
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain"></span>
              <span className="relative z-10">Logout</span>
            </button>
          ) : (
            <Link
              to="/apply"
              className="relative overflow-hidden rounded-md px-6 py-2.5 text-sm font-heading font-bold tracking-wide bg-foreground text-background hover:text-white transition-colors duration-300 group active:scale-[0.97]"
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain"></span>
              <span className="relative z-10">Apply Now</span>
            </Link>
          )}

         

          {/* <Link to="/apply" className="relative overflow-hidden rounded-md px-6 py-2.5 text-sm font-heading font-bold tracking-wide bg-foreground text-background hover:text-white transition-colors duration-300 group active:scale-[0.97]">

            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain"></span>
            <span className="relative z-10">Apply Now</span>
          </Link> */}
        </div>
 </div>
        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative z-50 p-1"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="px-5 py-6 flex flex-col gap-5">
              {[
                { to: "/about", label: "About" },
                { to: "/structure", label: "Structure" },
                { to: "/bursary", label: "Bursary" },
                { to: "/publications", label: "Publications" },
                { to: "/faq", label: "FAQ" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-heading font-bold uppercase tracking-[0.15em] text-foreground hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all active:bg-gradient-to-r active:from-brij-red active:via-brij-orange active:to-brij-pink active:bg-clip-text active:text-transparent"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.25 }}
                className="pt-2"
              >
                
                {!isLoggedIn && (
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="relative overflow-hidden block rounded-md px-6 py-3.5 text-sm font-heading font-bold tracking-wide text-center bg-foreground text-background hover:text-white transition-colors duration-300 group active:scale-[0.97]"
                  >
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain"></span>
                    <span className="relative z-10">Login</span>
                  </Link>
                )}
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="relative overflow-hidden  block rounded-md px-6 py-3.5 text-sm font-heading font-bold tracking-wide text-center bg-foreground text-background hover:text-white transition-colors duration-300 group active:scale-[0.97]"
                  >
                   <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain"></span>
                    <span className="relative z-10">Logout</span>
                  </button>
                ) : (
                  <Link
                    to="/apply"
                    onClick={() => setMenuOpen(false)}
                    className="relative overflow-hidden mt-4  block rounded-md px-6 py-3.5 text-sm font-heading font-bold tracking-wide text-center bg-foreground text-background hover:text-white transition-colors duration-300 group active:scale-[0.97]"
                  >
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain"></span>
                    <span className="relative z-10">Apply Now</span>
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
