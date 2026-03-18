import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import serendipityLogo from "@/assets/serendipity-arts-logo-full.png";
import brijLogo from "@/assets/brij-logo.png";


const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate()

  //  logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("storage")); // update everywhere
    navigate("/")
  };

  //  check auth
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkAuth();

    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-5 md:px-12 lg:px-24 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3 md:gap-4">
          <img src={brijLogo} alt="The Brij" className="h-5 md:h-7" />
          <span className="text-muted-foreground/40 text-lg font-light select-none">|</span>
          <img src={serendipityLogo} alt="Serendipity Arts" className="h-7 md:h-10" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/about" className="label-text hover:text-foreground transition-colors">About</Link>
          <a href="/#structure" className="label-text hover:text-foreground transition-colors">Structure</a>
          <Link to="/publications" className="label-text hover:text-foreground transition-colors">Publications</Link>
          <Link to="/faq" className="label-text hover:text-foreground transition-colors">FAQ</Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-foreground text-background px-6 py-2.5 text-sm font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/apply"
              className="bg-foreground text-background px-6 py-2.5 text-sm font-semibold"
            >
              Apply Now
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative z-50 p-1"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
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
                { to: "/#structure", label: "Structure", isHash: true },
                { to: "/publications", label: "Publications" },
                { to: "/faq", label: "FAQ" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  {item.isHash ? (
                    <a href={item.to} onClick={() => setMenuOpen(false)} className="text-sm font-medium tracking-wide text-foreground">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.to} onClick={() => setMenuOpen(false)} className="text-sm font-medium tracking-wide text-foreground">
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.25 }}
                className="pt-2"
              >
                {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="bg-foreground text-background px-6 py-3 text-center"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/apply"
                  onClick={() => setMenuOpen(false)}
                  className="bg-foreground text-background px-6 py-3 text-center"
                >
                  Apply Now
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


