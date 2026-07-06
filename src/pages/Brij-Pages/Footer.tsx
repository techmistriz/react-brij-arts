import { Link } from "react-router-dom";
import serendipityLogo from "@/assets/serendipity-arts-logo-full.png";
import brijLogo from "@/assets/brij-logo.png";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterProps {
  links?: FooterLink[];
  ecosystem?: FooterLink[];
  copyright?: string;
}

const defaultLinks: FooterLink[] = [
  { label: "About", href: "/academy/fellowship/about" },
  { label: "Apply", href: "/academy/fellowship/apply" },
  { label: "Publications", href: "/academy/fellowship/publications" },
  { label: "FAQ", href: "/academy/fellowship/faq" },
  { label: "Contact", href: "mailto:tbf@serendipityarts.org", external: true },
];

const defaultEcosystem: FooterLink[] = [
  { label: "THE BRIJ", href: "https://thebrij.world", external: true },
  {
    label: "Serendipity Arts",
    href: "https://serendipityarts.org",
    external: true,
  },
];

const defaultCopyright = "THE BRIJ Cultural Leaders Fellowship";

const Footer = ({
  links = defaultLinks,
  ecosystem = defaultEcosystem,
  copyright = defaultCopyright,
}: FooterProps) => {
  const renderLink = (l: FooterLink) => {
    const className =
      "text-sm text-muted-foreground hover:text-foreground transition-colors font-body";
    if (l.external) {
      return (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {l.label}
        </a>
      );
    }
    return (
      <Link key={l.label} to={l.href} className={className}>
        {l.label}
      </Link>
    );
  };

  return (
    <footer className="section-padding !py-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={brijLogo} alt="THE BRIJ" className="h-6" />
              <span className="text-brij-gray text-lg font-light select-none">
                |
              </span>
              <img
                src={serendipityLogo}
                alt="Serendipity Arts"
                className="h-8"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="label-text mb-2">Links</p>
            {links.map(renderLink)}
          </div>

          <div className="flex flex-col gap-3">
            <p className="label-text mb-2">Ecosystem</p>
            {ecosystem.map(renderLink)}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} {copyright}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
