import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import aboutSlider from "@/assets/about-slider-2.jpg";
import aboutCraft from "@/assets/about-craft.jpg";
import aboutOtherland from "@/assets/about-otherland.jpg";
import aboutStudio from "@/assets/about-studio.jpg";
import aboutFestival from "@/assets/about-festival.jpg";
import aboutFireside from "@/assets/about-fireside.jpg";

const sections = [
  {
    label: "What We Are Building",
    title: "The first programme of its kind in the region",
    image: aboutSlider,
    imagePosition: "right" as const,
    content: [
      "The Brij Cultural Leaders Fellowship is a nine-month leadership development programme for mid-career cultural practitioners and cross-sector professionals across South Asia — the first programme of its kind in the region. It is delivered by Serendipity Arts Foundation.",
      "The Fellowship is built around a single conviction: the most important thing a leader can develop is not a product, but a question. A genuine intellectual inquiry rooted in their own practice, context, and curiosity. Fellows spend nine months developing that question — through structured learning, expert dialogue, peer exchange, and deep reflection. They leave with a Question Proposal: a written articulation of the inquiry they are pursuing and why it matters — a compass for the work ahead.",
    ],
  },
  {
    label: "Why Serendipity Arts?",
    title: "A decade of building cultural infrastructure",
    image: aboutCraft,
    imagePosition: "left" as const,
    content: [
      "Serendipity Arts Foundation exists at the intersection of arts, education, and institution-building. Its flagship Serendipity Arts Festival — held annually in Goa — is one of South Asia's most significant cultural gatherings, bringing together practitioners, thinkers, and audiences across disciplines and geographies.",
      "The Fellowship is delivered by SAF and culminates at the Festival — where Fellows present their work publicly at the Work in Progress Symposium. The Festival is not a backdrop. It is part of the curriculum.",
    ],
  },
  {
    label: "The Three Pillars",
    title: "Perspectives, Practice, Participation",
    image: aboutOtherland,
    imagePosition: "right" as const,
    content: [
      "Perspectives — Curated framing notes, talks, and conversations that introduce key ideas and provoke reflection. Reading is always optional enrichment — never assessed.",
      "Practice — Guided exercises, journalling prompts, and research tools to develop self-awareness, clarify vision, map networks, and deepen the Question.",
      "Participation — Live sessions, fireside conversations, peer learning circles, and collaborative activities that build dialogue, community, and shared knowledge.",
    ],
  },
  {
    label: "What Fellows Receive",
    title: "Everything a Fellow needs",
    image: aboutStudio,
    imagePosition: "left" as const,
    content: [
      "A six-day residential in Goa to open the Fellowship — accommodation, meals, and all programme costs included. A senior mentor from the cultural sector, matched individually, for monthly one-to-one sessions across the full nine months.",
      "A psychometric assessment completed before arrival, used to deepen self-awareness and inform mentor matching. Six expert-led fireside conversations with practitioners, thinkers, and leaders from across the cultural sector. Weekly live sessions with the Course Director.",
      "Three days at the Serendipity Arts Festival, Goa — full Festival accreditation, accommodation, and meals included. Curated reading materials and a peer cohort of exceptional mid-career practitioners from across South Asia.",
    ],
  },
  {
    label: "Programme Phases",
    title: "Three phases across nine months",
    image: aboutFestival,
    imagePosition: "right" as const,
    content: [
      "Phase I: Self & Context (June–July) — Opens with the six-day residential in Goa. Community building, personal reflection, strengths work, storytelling, and network mapping. Fellows arrive having completed a short pre-residential preparation pack. This is the foundation on which everything else is built.",
      "Phase II: Ecosystem & Region (August–October) — Six expert-led fireside conversations expanding each Fellow's lens to the wider cultural field. Key themes include cultural theory, cultural equity, regenerative practices, cultural entrepreneurship, cultural diplomacy, and crisis management.",
      "Phase III: Leadership & Futures (November–March) — Leadership, future thinking, and the public articulation of each Fellow's inquiry — including three days at the Serendipity Arts Festival. The programme closes with the submission of the final Question Proposal (1,500–2,500 words).",
    ],
  },
  {
    label: "Programme at a Glance",
    title: "Key details",
    image: aboutFireside,
    imagePosition: "left" as const,
    content: [
      "Duration: Nine months — 20 June 2026 to end of March 2027. Format: Online learning with two compulsory in-person moments in Goa. Online commitment: Maximum 6 hours per week of structured engagement.",
      "Cohort size: Approximately 10–15 Fellows. Opening: Six-day residential in Goa beginning 20 June 2026. Festival moment: Three days at the Serendipity Arts Festival, December 2026. Final deliverable: Question Proposal — 1,500–2,500 words.",
    ],
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-16 md:mb-24"
            >
              <p className="label-text mb-6">About</p>
              <h1 className="editorial-subheading max-w-3xl">
                The Brij Cultural Leaders Fellowship
              </h1>
            </motion.div>

            <div className="space-y-24 md:space-y-32">
              {sections.map((section, idx) => (
                <motion.div
                  key={section.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-start ${section.imagePosition === "left" ? "" : ""}`}>
                    {/* Image — alternating sides */}
                    <div className={`${section.imagePosition === "right" ? "md:order-2" : "md:order-1"}`}>
                      <div className="relative overflow-hidden aspect-[4/3] border border-border">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className={`${section.imagePosition === "right" ? "md:order-1" : "md:order-2"}`}>
                      <p className="label-text mb-3 text-brij-orange">{section.label}</p>
                      <h2 className="text-xl md:text-2xl font-bold font-heading mb-6 md:mb-8" style={{ writingMode: "initial" }}>
                        {section.title}
                      </h2>
                      <div className="space-y-5">
                        {section.content.map((para, pi) => (
                          <p key={pi} className="text-muted-foreground leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
