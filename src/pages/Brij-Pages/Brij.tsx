import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
// import BrijNav from "@/components/landing/BrijNav";
// import Footer from "@/components/landing/Footer";
import brijLogo from "@/assets/brij-logo.png";

import brijWhyExistVideo from "@/assets/brij-why-exist.mp4";
import brijAimCraft from "@/assets/brij-we-aim.jpg";
import brijGradientFellowship from "@/assets/brij-gradient-fellowship.jpg";
import brijGradientIncubator from "@/assets/brij-gradient-incubator.jpg";
import brijGradientSAF from "@/assets/brij-gradient-saf.jpg";
import brijGradientSAFFestival from "@/assets/brij-gradient-saf-festival.jpg";
// import slice01 from "@/assets/brij-more/slice-01.jpg.asset.json";
// import slice02 from "@/assets/brij-more/slice-02.jpg.asset.json";
// import slice03 from "@/assets/brij-more/slice-03.jpg.asset.json";
// import slice04 from "@/assets/brij-more/slice-04.jpg.asset.json";
// import slice05 from "@/assets/brij-more/slice-05.jpg.asset.json";
// import slice06 from "@/assets/brij-more/slice-06.jpg.asset.json";
import slice01 from "@/assets/images/brij-more-slice-01.jpg";
import slice02 from "@/assets/images/brij-more-slice-02.jpg";
import slice03 from "@/assets/images/brij-more-slice-03.jpg";
import slice04 from "@/assets/images/brij-more-slice-04.jpg";
import slice05 from "@/assets/images/brij-more-slice-05.jpg";
import slice06 from "@/assets/images/brij-more-slice-06.jpg";
import { aims, elements } from "@/data/brijData";
import BrijNav from "./BrijNav";
import Footer from "./Footer";

const BrijModelViewer = lazy(
  () => import("@/pages/Brij-Pages/BrijModelViewer"),
);

/* Heavy grain SVG used on Brij gradient surfaces */
const grainBg =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.9' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 2.2 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='1'/></svg>\")";

/* Programme gradients (matching thebrij.world) */
/* Fellowship: orange top → pink bottom (radial warm wash) */
const fellowshipGradient =
  "radial-gradient(120% 100% at 80% 10%, hsl(28 95% 60%) 0%, hsl(20 95% 60%) 35%, hsl(345 90% 70%) 75%, hsl(320 80% 78%) 100%)";
/* Incubator: warm orange wash, lighter pink corner */
const incubatorGradient =
  "radial-gradient(120% 100% at 75% 15%, hsl(32 96% 62%) 0%, hsl(22 96% 58%) 50%, hsl(15 92% 60%) 80%, hsl(330 75% 78%) 100%)";
const founderGradient = fellowshipGradient;

/* ─── animation ─── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

/* ─── page ─── */
const Brij = () => {
  const [activeProgramme, setActiveProgramme] = useState<number | null>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <BrijNav />

      {/* ── Hero (3D model) ── */}
      <section className="relative h-[88vh] md:h-screen overflow-hidden bg-background pt-16 md:pt-20">
        {/* 3D model fills the hero */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-full bg-background" />}>
            <BrijModelViewer
              className="w-full h-full bg-background"
              margin={1.0}
              transparent
            />
          </Suspense>
        </div>

        {/* Mobile scroll-passthrough: top area lets users scroll the page;
            only the model and the negative space below it accept touch interaction. */}
        <div
          className="md:hidden absolute top-0 left-0 right-0 h-[35%] z-[5]"
          style={{ touchAction: "pan-y" }}
          aria-hidden
        />

        {/* THE BRIJ logo — top left */}
        <motion.img
          src={brijLogo}
          alt="THE BRIJ"
          className="absolute top-24 md:top-28 lg:top-32 left-6 md:left-12 lg:left-16 z-10 h-10 md:h-16 lg:h-20 w-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Headline — bottom right */}
        <motion.h1
          className="absolute bottom-16 md:bottom-20 right-6 md:right-12 lg:right-20 z-10 text-right font-heading font-bold text-foreground uppercase leading-[0.8] text-[32px] md:text-[64px] lg:text-[80px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          A Creative
          <br />
          Ecosystem
          <br />
          For
          <br />
          Everyone
        </motion.h1>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span
            className="font-body uppercase text-[11px] md:text-[12px] text-foreground/60"
            style={{ letterSpacing: "0.14em" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-foreground/60"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Fellowship & Incubator — Programmes ── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-background border-b border-foreground/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeUp}
            className="font-heading font-bold text-foreground uppercase text-[36px] md:text-[47px] leading-tight mb-14"
          >
            Where THE BRIJ Lives Today
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {[
              {
                title: "The Brij Cultural Leaders Fellowship",
                desc: "A nine-month leadership development programme for mid-career cultural practitioners across South Asia — the first of its kind in the region. Delivered by Serendipity Arts.",
                to: "/academy/fellowship",
                cta: "View Programme",
                bg: brijGradientSAFFestival,
                bgPosition: "center",
              },
              {
                title: "THE BRIJ Incubator",
                desc: "A home for early-stage founders working at the intersection of arts, crafts and technology — including the Kickstart residential bootcamp in Goa.",
                to: "https://thebrij.world/incubator/",
                external: true,
                cta: "View Programme",
                bg: brijGradientIncubator,
                bgPosition: "center",
              },
              {
                title: "Serendipity Arts",
                desc: "A space for arts and cultural development that promotes new creative strategies, artistic interventions and cultural partnerships across South Asia.",
                to: "https://serendipityarts.org",
                external: true,
                cta: "Become A Part Of The Arts World",
                bg: brijGradientSAF,
                bgPosition: "center",
              },
              {
                title: "Serendipity Arts Festival",
                desc: "South Asia's largest multidisciplinary arts festival — an annual gathering in Goa bringing together visual arts, theatre, dance, music, craft and culinary arts.",
                to: "https://serendipityartsfestival.com",
                external: true,
                cta: "Experience The Festival",
                bg: brijGradientFellowship,
                bgPosition: "right center",
                bgSize: "auto 160%",
              },
            ].map((card, i) => {
              const cardClass =
                "group relative flex flex-col justify-between p-8 md:p-10 h-full min-h-[380px] md:min-h-[460px] overflow-hidden";
              const cardStyle = {
                backgroundImage: `url(${card.bg})`,
                backgroundSize: card.bgSize ?? "cover",
                backgroundPosition: card.bgPosition,
                backgroundRepeat: "no-repeat" as const,
              };
              const inner = (
                <>
                  <div className="relative">
                    <div className="flex items-start justify-end mb-6">
                      <ArrowUpRight className="w-6 h-6 text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <h3 className="font-heading font-bold uppercase text-white text-[24px] md:text-[32px] leading-[1.05] mb-5">
                      {card.title}
                    </h3>
                    <p className="font-body text-white/90 text-[16px] md:text-[18px] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <span className="relative inline-flex items-center gap-1.5 mt-8 self-start font-body font-medium uppercase bg-white text-foreground text-[11px] md:text-[12px] tracking-[0.14em] border border-white px-3 py-1.5 transition-colors">
                    {card.cta}
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </>
              );
              return (
                <motion.div
                  key={card.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                >
                  {card.external ? (
                    <a
                      href={card.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClass}
                      style={cardStyle}
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link to={card.to} className={cardClass} style={cardStyle}>
                      {inner}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why We Exist ── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-background border-b border-foreground/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div {...fadeUp} className="order-2 md:order-1">
            <video
              src={brijWhyExistVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block"
            />
            <p className="mt-3 font-body text-foreground/60 text-[13px] md:text-[14px] italic leading-snug">
              Conceptual Sketch of THE BRIJ by Architect Gavin Robotham
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="order-1 md:order-2">
            <h2 className="font-heading font-bold text-foreground uppercase text-[36px] md:text-[47px] leading-tight mb-10">
              Why We Exist
            </h2>
            <p className="font-body text-foreground text-[18px] md:text-[23px] leading-relaxed mb-8">
              Equitable societies evolve from the success of creative
              communities. We are a New Delhi–based upcoming arts institution
              dedicated to transdisciplinarity, education and intergenerational
              exchange.
            </p>
            <p className="font-body text-foreground/70 text-[16px] md:text-[18px] leading-relaxed">
              We are building a creative ecosystem made of local and regional
              artists, performers, students, families, the global arts community
              and the public at large. We welcome all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section
        id="vision"
        className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-background relative overflow-hidden border-b border-foreground/10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative">
          <motion.div {...fadeUp}>
            <h2 className="font-heading font-bold text-foreground uppercase text-[36px] md:text-[47px] leading-tight mb-6">
              Vision
            </h2>
            <p className="font-body text-foreground text-[18px] md:text-[23px] leading-relaxed">
              To generate an arts and culture ecosystem that inspires positive
              social change in the world.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            <h2 className="font-heading font-bold text-foreground uppercase text-[36px] md:text-[47px] leading-tight mb-6">
              Mission
            </h2>
            <p className="font-body text-foreground text-[18px] md:text-[23px] leading-relaxed">
              To incubate, elevate and nurture transformative cultural
              encounters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── We Aim To (image left, text right) ── */}
      <section
        id="aim"
        className="bg-background border-t border-foreground/10 border-b"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="order-2 md:order-1 relative bg-background w-full md:max-w-[700px] md:ml-auto md:mr-0 aspect-[847/564] overflow-hidden border border-foreground/15">
            <img
              src={brijAimCraft}
              alt="THE BRIJ aims sketch"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2 flex items-center bg-background">
            <div className="max-w-xl">
              <motion.h2
                {...fadeUp}
                className="font-heading font-bold text-foreground uppercase text-[36px] md:text-[47px] leading-tight mb-8"
              >
                We Aim To
              </motion.h2>
              <ul className="space-y-5">
                {aims.map((aim, i) => (
                  <motion.li
                    key={aim}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                    className="text-foreground font-body font-medium text-[18px] md:text-[23px] leading-[1.35]"
                  >
                    {aim}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Elements of THE BRIJ ── */}
      <section
        id="about"
        className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-background border-b border-foreground/10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <h2 className="font-heading font-bold text-foreground uppercase text-[36px] md:text-[47px] leading-tight">
              Elements of THE BRIJ
            </h2>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {elements.map((el, i) => {
              const imageRight = i % 2 === 0;
              const ctaMap: Record<
                string,
                {
                  label: string;
                  to: string;
                  external?: boolean;
                  gradient: string;
                }[]
              > = {
                "Education & Research": [
                  {
                    label: "THE BRIJ Cultural Leaders Fellowship",
                    to: "/academy/fellowship",
                    gradient: brijGradientFellowship,
                  },
                ],
                "Multidisciplinary Experiences": [
                  {
                    label: "Serendipity Arts",
                    to: "https://serendipityarts.org",
                    external: true,
                    gradient: brijGradientSAF,
                  },
                  {
                    label: "Serendipity Arts Festival",
                    to: "https://serendipityartsfestival.com",
                    external: true,
                    gradient: brijGradientSAFFestival,
                  },
                ],
                "Innovation & Incubation": [
                  {
                    label: "THE BRIJ Incubator",
                    to: "https://thebrij.world/incubator/",
                    external: true,
                    gradient: brijGradientIncubator,
                  },
                ],
              };
              const ctas = ctaMap[el.title] ?? [];
              return (
                <motion.div
                  key={el.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
                >
                  {!imageRight && (
                    <div className="aspect-[847/564] overflow-hidden order-2 md:order-1 w-full max-w-[847px] mx-auto border border-foreground/15">
                      <img
                        src={el.image}
                        alt={el.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div
                    className={`order-1 ${imageRight ? "md:order-1" : "md:order-2"}`}
                  >
                    <h3 className="font-heading font-bold text-primary uppercase text-[36px] md:text-[47px] leading-tight mb-6">
                      {el.title}
                    </h3>
                    <p className="font-body text-foreground text-[18px] md:text-[23px] leading-relaxed">
                      {el.description}
                    </p>
                    {ctas.length > 0 && (
                      <div className="mt-8 flex flex-wrap gap-3">
                        {ctas.map((c) => {
                          const baseClass =
                            "group/cta relative inline-flex items-center gap-1.5 font-body font-medium uppercase text-foreground text-[11px] md:text-[12px] tracking-[0.14em] border border-foreground/70 px-3 py-1.5 overflow-hidden transition-colors hover:text-white hover:border-transparent";
                          const inner = (
                            <>
                              <span
                                className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"
                                style={{
                                  backgroundImage: `url(${c.gradient})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                }}
                              />
                              <span className="relative">{c.label}</span>
                              <ArrowUpRight className="relative w-4 h-4" />
                            </>
                          );
                          return c.external ? (
                            <a
                              key={c.label}
                              href={c.to}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={baseClass}
                            >
                              {inner}
                            </a>
                          ) : (
                            <Link key={c.label} to={c.to} className={baseClass}>
                              {inner}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  {imageRight && (
                    <div className="aspect-[847/564] overflow-hidden order-2 w-full max-w-[847px] mx-auto border border-foreground/15">
                      <img
                        src={el.image}
                        alt={el.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── More from Serendipity Arts ── */}
      <SerendipitySection />

      <Footer
        links={[
          { label: "About Us", href: "/about" },
          {
            label: "Incubator",
            href: "https://thebrij.world/incubator/",
            external: true,
          },
          { label: "Fellowship", href: "/academy/fellowship" },
          { label: "Our Team", href: "/credits" },
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

/* ─── Serendipity Arts cards with category filter ─── */
type SACategory =
  | "All"
  | "Exhibition"
  | "Festival"
  | "Residency"
  | "Grant"
  | "Publication"
  | "Open Call";

interface SACard {
  category: Exclude<SACategory, "All">;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  cta: string;
  href: string;
  gradient: string;
}

const saCards: SACard[] = [
  {
    category: "Exhibition",
    eyebrow: "Venice · 9 May – 22 Nov 2026",
    title: "La Biennale di Venezia 2026 — India Pavilion",
    paragraphs: [
      "The National Pavilion of India presents Geographies of Distance: remembering home at La Biennale di Venezia 2026 (Arsenale) — exploring how, for those shaped by change or distance, home becomes a portable condition: part memory, part ritual, part personal mythology.",
      "Presented by the Ministry of Culture in partnership with NMACC and Serendipity Arts, curated by Dr. Amin Jaffer in response to the Biennale's theme In Minor Keys.",
    ],
    cta: "Explore Venice Biennale",
    href: "https://serendipityarts.org/la-biennale-di-venezia-2026/",
    gradient: slice01,
  },
  {
    category: "Festival",
    eyebrow: "London · 5–7 June 2026",
    title: "Serendipity Arts London",
    paragraphs: [
      "As part of the Great Exhibition Road Festival, Serendipity Arts presents two interventions across South Kensington and Science Museum Lates — bringing Indian artistic practice into the heart of London.",
      "Giants on the Move, a puppet street parade by Dadi Pudumjee, takes over Exhibition Road. नैनन की ठगी (Eyes Shall Deceive), a 30-minute 16mm film by Sneha Khanwalkar and Sudarshan Shetty, premieres at the Science Museum.",
    ],
    cta: "Explore Serendipity Arts London",
    href: "https://serendipityarts.org/serendipity-arts-london/",
    gradient: slice02,
  },
  {
    category: "Exhibition",
    eyebrow: "New Delhi · India Art Fair 2026",
    title: "Serendipity Arts at India Art Fair 2026",
    paragraphs: [
      "Serendipity Arts brings two projects to India Art Fair 2026: Breathe by Teja Gavankar and The Charpai Project X Goji.",
      "Breathe is a thatched structure with a single rocking bench that expands and contracts with the visitor's weight — a collective lung framing rest as collaboration. The Charpai Project reimagines an everyday object as a site of gathering and craft.",
    ],
    cta: "Explore India Art Fair",
    href: "https://serendipityarts.org/beyond_the_festival/india-art-fair-2026/",
    gradient: slice03,
  },
  {
    category: "Residency",
    eyebrow: "New Delhi · 9th Edition",
    title: "Serendipity Arts Residency 2026",
    paragraphs: [
      "A three-month immersive residency in New Delhi for emerging practitioners across craft, visual arts, installation, sound, and interdisciplinary practices.",
      "Six Artists-in-Residence receive time, space and curatorial support to develop new work. Open Call: 3 Feb 2026 · Deadline: 11 March 2026.",
    ],
    cta: "Explore The Residency",
    href: "https://serendipityarts.org/workshop/serendipity-arts-residency-2026/",
    gradient: slice04,
  },
  {
    category: "Grant",
    eyebrow: "Grant · 2026–27",
    title: "Performing Arts Grant 2026–27: Theatre",
    paragraphs: [
      "The Performing Arts Grant supports practitioners in India ready to think boldly, take creative risks and imagine ambitious new possibilities. Each year alternates between theatre and dance.",
      "This cycle invites theatre practitioners to experiment with form, challenge convention and push the boundaries of contemporary practice — offering financial and strategic support to solo and duo artists.",
    ],
    cta: "Explore The Grant",
    href: "https://serendipityarts.org/grant/performing-arts-grant-2026-27-theatre",
    gradient: slice05,
  },
  {
    category: "Grant",
    eyebrow: "Grant · 2026",
    title: "Arts Journalism Grant 2026",
    paragraphs: [
      "The Arts Journalism Grant supports writers, critics and journalists committed to advancing rigorous, imaginative writing on the arts in India.",
      "Recipients receive editorial mentorship and a platform to publish long-form essays that deepen public engagement with contemporary cultural practice.",
    ],
    cta: "Explore The Grant",
    href: "https://serendipityarts.org/grant/arts-journalism-grant-2026",
    gradient: slice01,
  },
  {
    category: "Grant",
    eyebrow: "Grant · 2026–27",
    title: "Independent Music Production Grant 2026–27",
    paragraphs: [
      "The Independent Music Production Grant supports independent musicians and producers in India to develop new work — from songwriting and composition to recording and release.",
      "Selected practitioners receive financial support, mentorship and access to industry networks to bring ambitious music projects to life.",
    ],
    cta: "Explore The Grant",
    href: "https://serendipityarts.org/grant/independent-music-production-grant-2026-27",
    gradient: slice02,
  },
  {
    category: "Grant",
    eyebrow: "Grant · 2026",
    title: "Food Matters Grant 2026",
    paragraphs: [
      "The Food Matters Grant supports practitioners working at the intersection of food, culture and the arts — exploring the social, ecological and historical dimensions of what and how we eat.",
      "The grant enables research, fieldwork and the development of new projects that reframe food as a vital site of cultural inquiry.",
    ],
    cta: "Explore The Grant",
    href: "https://serendipityarts.org/grant/food-matters-grant-2026",
    gradient: slice03,
  },
  {
    category: "Grant",
    eyebrow: "Grant · 2026",
    title: "Folk Arts Grant 2026",
    paragraphs: [
      "The Folk Arts Grant supports practitioners and communities sustaining folk and traditional art forms across India — backing both continuity and contemporary reinterpretation.",
      "Recipients receive resources to document, develop and present folk practices in ways that strengthen lineage while opening new audiences.",
    ],
    cta: "Explore The Grant",
    href: "https://serendipityarts.org/grant/folk-arts-grant-2026",
    gradient: slice04,
  },
  {
    category: "Publication",
    eyebrow: "Writing Initiative",
    title: "Write | Art | Connect",
    paragraphs: [
      "Essays from the Arts Journalism Grant initiative exploring the intersections of writing and contemporary art practice across all editions.",
      "A publication series that documents critical reflection, creative writing and arts journalism emerging from Serendipity Arts' programming.",
    ],
    cta: "Read All Editions",
    href: "https://serendipityarts.org/writing_type/write-art-connect/?yid=281",
    gradient: slice05,
  },
  {
    category: "Publication",
    eyebrow: "Writing Initiative",
    title: "Projects / Processes",
    paragraphs: [
      "Projects / Processes documents the making of works presented at Serendipity Arts Festival — tracing artistic intent, collaboration and process across disciplines.",
      "The 2024 edition gathers critical essays and curatorial reflections on projects from the festival, offering an in-depth look at how ideas move from concept to presentation.",
    ],
    cta: "Read All Editions",
    href: "https://serendipityarts.org/writing-initiative/projects-processes/projects-processes-2024/",
    gradient: slice06,
  },
];

const SA_FILTERS: SACategory[] = [
  "All",
  "Exhibition",
  "Festival",
  "Residency",
  "Grant",
  "Publication",
  "Open Call",
];

const SerendipitySection = () => {
  const [filter, setFilter] = useState<SACategory>("All");
  const visible =
    filter === "All" ? saCards : saCards.filter((c) => c.category === filter);

  return (
    <section className="bg-background px-6 md:px-12 lg:px-20 py-20 md:py-28 border-b border-foreground/10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="font-heading font-bold text-foreground uppercase text-[36px] md:text-[47px] leading-tight mb-8 md:mb-10"
        >
          More From Serendipity Arts
        </motion.h2>

        <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12">
          {SA_FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`group/filter relative overflow-hidden font-body font-medium uppercase text-[11px] md:text-[12px] tracking-[0.14em] px-3 py-1.5 border transition-colors ${
                  active
                    ? "text-white border-transparent"
                    : "bg-transparent text-foreground border-foreground/30 hover:text-white hover:border-transparent"
                }`}
              >
                <span
                  className={`absolute inset-0 transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0 group-hover/filter:opacity-100"}`}
                  style={{
                    backgroundImage: `url(${slice01})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <span className="relative">{f}</span>
              </button>
            );
          })}
        </div>

        <div className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-foreground/20">
          {visible.map((card, i) => (
            <motion.div
              key={card.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="relative shrink-0 snap-start w-[80%] sm:w-[340px] md:w-[360px] px-6 md:px-7 py-8 md:py-9 text-white overflow-hidden min-h-[380px] flex flex-col"
              style={{
                backgroundImage: `url(${card.gradient})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: grainBg }}
              />
              <div className="relative flex-1">
                <p className="font-heading font-bold uppercase text-white/80 text-[11px] md:text-[12px] tracking-[0.18em] mb-3">
                  {card.eyebrow}
                </p>
                <h3 className="font-heading font-bold text-white uppercase text-[20px] md:text-[22px] leading-[1.1] mb-4">
                  {card.title}
                </h3>
                <div className="space-y-2.5 font-body text-white text-[13px] md:text-[14px] leading-relaxed">
                  {card.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-1.5 mt-6 self-start font-body font-medium uppercase bg-white text-foreground text-[11px] md:text-[12px] tracking-[0.14em] border border-white transition-colors px-3 py-1.5"
              >
                {card.cta} <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brij;
