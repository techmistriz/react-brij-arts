import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xs border-b border-border">
      <div className="flex items-center justify-between px-5 md:px-12 lg:px-24 py-3 md:py-4">
        <Link
          to="https://thebrij.world/"
          className="flex items-center gap-3 md:gap-4"
        >
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
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://thebrij.world/"
            className="text-[13px] font-body font-medium capitalize tracking-[0.12em] hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all"
          >
            Home
          </a>
          <Link
            to="/academy/fellowship/about"
            className="text-[13px] font-body font-medium capitalize tracking-[0.12em] hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all"
          >
            About
          </Link>
          <Link
            to="/academy/fellowship/structure"
            className="text-[13px] font-body font-medium capitalize tracking-[0.12em] hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all"
          >
            Structure
          </Link>
          <Link
            to="/academy/fellowship/bursary"
            className="text-[13px] font-body font-medium capitalize tracking-[0.12em] hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all"
          >
            Bursary
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 text-xs font-body font-medium capitalize tracking-[0.12em] hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all">
              Cohort
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 top-full mt-2 min-w-[180px] bg-white shadow-lg border border-gray-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link
                to="/academy/fellowship/cohort/2026-2027"
                className="block px-4 py-3 text-[13px] font-medium capitalize tracking-[0.12em] hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all"
                style={{
                  fontFamily: '"Neue Haas Grotesk", Barlow,sans-serif',
                }}
              >
                2026-2027
              </Link>
            </div>
          </div>
          <Link
            to="/academy/fellowship/publications"
            className="text-[13px] font-body font-medium capitalize tracking-[0.12em] hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all"
          >
            Publications
          </Link>
          <Link
            to="/academy/fellowship/faq"
            className="text-[13px] font-body font-medium capitalize tracking-[0.12em] hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all"
          >
            FAQs
          </Link>
          <div className="flex items-center gap-3">
            {!isLoggedIn && (
              <Link
                to="/academy/fellowship/login"
                className="relative overflow-hidden rounded-md px-6 py-2.5 text-[13px] font-body font-medium capitalize tracking-wide bg-foreground text-background hover:text-white transition-colors duration-300 group active:scale-[0.97]"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain"></span>
                <span className="relative z-10">Login</span>
              </Link>
            )}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="relative overflow-hidden rounded-md px-6 py-2.5 text-[13px] font-body font-medium capitalize tracking-wide bg-foreground text-background hover:text-white transition-colors duration-300 group active:scale-[0.97]"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain"></span>
                <span className="relative z-10">Logout</span>
              </button>
            ) : (
              <Link
                to="/academy/fellowship/apply"
                className="relative overflow-hidden rounded-md px-6 py-2.5 text-[13px] font-body font-medium capitalize tracking-wide bg-foreground text-background hover:text-white transition-colors duration-300 group active:scale-[0.97]"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain"></span>
                <span className="relative z-10">Apply Now</span>
              </Link>
            )}

            {/* <Link to="/apply" className="relative overflow-hidden rounded-md px-6 py-2.5 text-xs font-body font-bold tracking-wide bg-foreground text-background hover:text-white transition-colors duration-300 group active:scale-[0.97]">

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
                {
                  href: "https://thebrij.world/",
                  label: "Home",
                  external: true,
                },
                { to: "/academy/fellowship/about", label: "About" },
                { to: "/academy/fellowship/structure", label: "Structure" },
                { to: "/academy/fellowship/bursary", label: "Bursary" },
                { to: "/academy/fellowship/cohort/2026-2027", label: "Cohort" },
                {
                  to: "/academy/fellowship/publications",
                  label: "Publications",
                },
                { to: "/academy/fellowship/faq", label: "FAQ" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  {item.external ? (
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-xs font-body font-bold uppercase tracking-[0.15em] text-foreground hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="text-xs font-body font-bold uppercase tracking-[0.15em] text-foreground hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all"
                    >
                      {item.label}
                    </Link>
                  )}
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
                    to="/academy/fellowship/login"
                    onClick={() => setMenuOpen(false)}
                    className="relative overflow-hidden block rounded-md px-6 py-3.5 text-xs font-body font-bold tracking-wide text-center bg-foreground text-background hover:text-white transition-colors duration-300 group active:scale-[0.97]"
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
                    className="relative overflow-hidden  block rounded-md px-6 py-3.5 text-xs font-body font-bold tracking-wide text-center bg-foreground text-background hover:text-white transition-colors duration-300 group active:scale-[0.97]"
                  >
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain"></span>
                    <span className="relative z-10">Logout</span>
                  </button>
                ) : (
                  <Link
                    to="/academy/fellowship/apply"
                    onClick={() => setMenuOpen(false)}
                    className="relative overflow-hidden mt-4  block rounded-md px-6 py-3.5 text-xs font-body font-bold tracking-wide text-center bg-foreground text-background hover:text-white transition-colors duration-300 group active:scale-[0.97]"
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
