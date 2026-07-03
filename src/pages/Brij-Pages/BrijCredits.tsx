import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import patronGradient from "@/assets/brij-patron-gradient.jpg";
import {
  architectureExperts,
  buildingConsultants,
  otherConsultants,
  boardMembers,
  advisors,
  founderData,
} from "@/data/brijData";
import BrijNav from "./BrijNav";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const PeopleGrid = ({
  people,
  columns = 3,
  showBio = false,
  variant = "people",
}: {
  people: { name: string; image: string; bio?: string }[];
  columns?: number;
  showBio?: boolean;
  variant?: "people" | "logo";
}) => {
  const colClass =
    columns === 5
      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
      : columns === 4
        ? "grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
        : "grid-cols-1 md:grid-cols-3";
  const isLogo = variant === "logo";
  return (
    <div
      className={`grid ${colClass} ${isLogo ? "gap-x-8 gap-y-10 items-start" : "gap-8"}`}
    >
      {people.map((person, i) => (
        <motion.div
          key={person.name}
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: i * 0.04 }}
          className={isLogo ? "flex flex-col items-center text-center" : ""}
        >
          {isLogo ? (
            <div className="w-full max-w-[140px] h-20 md:h-24 mb-4 flex items-center justify-center">
              <img
                src={person.image}
                alt={person.name}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="aspect-square overflow-hidden mb-4">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />
            </div>
          )}
          <p className="font-body text-foreground text-[15px] font-medium leading-snug">
            {person.name}
          </p>
          {showBio && person.bio && (
            <p className="font-body text-[13px] text-foreground/70 mt-2 leading-relaxed">
              {person.bio}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

const BrijCredits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Team — THE BRIJ | Consultants & Advisors";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "The architects, consultants, and advisory partners building THE BRIJ — a creative ecosystem in New Delhi.",
      );
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <BrijNav />

      {/* Header */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            {...fadeUp}
            className="font-heading font-bold text-foreground uppercase text-[36px] md:text-[56px] lg:text-[72px] leading-[0.95] mb-6"
          >
            Our Team
          </motion.h1>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="bg-background px-6 md:px-12 lg:px-20 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeUp}
            className="font-heading font-bold text-primary uppercase text-[28px] md:text-[36px] leading-tight mb-8 md:mb-10"
          >
            Founder
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] items-stretch">
            <motion.div {...fadeUp} className="relative">
              <img
                src={founderData.image}
                alt={founderData.name}
                className="w-full h-full object-cover object-top min-h-[280px] max-h-[420px] md:min-h-[240px] md:max-h-[420px]"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="relative px-8 md:px-12 lg:px-16 py-14 md:py-16 text-white overflow-hidden"
              style={{
                backgroundImage: `url(${patronGradient})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative">
                <h2 className="font-heading font-bold text-white uppercase text-[36px] md:text-[47px] leading-tight mb-6">
                  {founderData.name}
                </h2>
                {founderData.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-body text-white text-[16px] md:text-[18px] leading-relaxed mb-3"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeUp}
            className="font-heading font-bold text-primary uppercase text-[28px] md:text-[36px] leading-tight mb-14"
          >
            Board Members
          </motion.h2>
          <PeopleGrid people={boardMembers} columns={5} showBio />
        </div>
      </section>

      {/* Our Advisors */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeUp}
            className="font-heading font-bold text-primary uppercase text-[28px] md:text-[36px] leading-tight mb-14"
          >
            Our Advisors
          </motion.h2>
          <PeopleGrid people={advisors} columns={5} />
        </div>
      </section>

      {/* Architecture */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeUp}
            className="font-heading font-bold text-primary uppercase text-[28px] md:text-[36px] leading-tight mb-14"
          >
            Architecture
          </motion.h2>
          <PeopleGrid people={architectureExperts} columns={5} />
        </div>
      </section>

      {/* Building Consultants */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeUp}
            className="font-heading font-bold text-primary uppercase text-[28px] md:text-[36px] leading-tight mb-14"
          >
            Building Consultants
          </motion.h2>
          <PeopleGrid people={buildingConsultants} columns={4} variant="logo" />
        </div>
      </section>

      {/* Other Consultants */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {otherConsultants.map((c, i) => (
              <motion.div
                key={c.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              >
                <h3 className="font-heading font-bold text-primary uppercase text-[20px] md:text-[24px] leading-tight mb-6">
                  {c.category}
                </h3>
                <div className="w-full max-w-[160px] h-24 mb-4 flex items-center justify-start">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="font-body text-foreground text-[15px] font-medium">
                  {c.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer
        links={[
          { label: "About Us", href: "/brij/about" },
          {
            label: "Incubator",
            href: "https://thebrij.world/incubator/",
            external: true,
          },
          { label: "Fellowship", href: "/academy/fellowship" },
          { label: "Our Team", href: "/brij/credits" },
        ]}
        ecosystem={[
          {
            label: "THE BRIJ Incubator",
            href: "https://thebrij.world/incubator/",
            external: true,
          },
          { label: "THE BRIJ Fellowship", href: "/academy/fellowship" },
          {
            label: "Serendipity Arts",
            href: "https://serendipityarts.org",
            external: true,
          },
          {
            label: "Serendipity Arts Festival",
            href: "https://serendipityartsfestival.com",
            external: true,
          },
        ]}
        copyright="THE BRIJ"
      />
    </div>
  );
};

export default BrijCredits;
