import { Link } from "react-router-dom";
import fellowshipLogo from "@/assets/fellowship-logo.png";

const Footer = () => {
  return (
    <footer className="section-padding !py-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img src={fellowshipLogo} alt="The Brij Cultural Leaders Fellowship" className="h-10 mb-4" />
            <p className="text-sm text-muted-foreground">Delivered by Serendipity Arts</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="label-text mb-2">Links</p>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/apply" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Apply</Link>
            <Link to="/mentors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mentors</Link>
            <Link to="/publications" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Publications</Link>
            <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
            <a href="mailto:tbf@serendipityarts.org" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="label-text mb-2">Ecosystem</p>
            <a href="https://thebrij.world" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">The Brij</a>
            <a href="https://serendipityarts.org" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Serendipity Arts</a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Brij Cultural Leaders Fellowship. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
