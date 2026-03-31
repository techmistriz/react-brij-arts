import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const phases = [
  {
    label: "Phase I",
    title: "Self & Context",
    date: "June–July 2026",
    description: "The foundational phase focuses on personal reflection, self-awareness, research orientation, and goal setting. The Fellowship opens with the six-day in-person residential on 20 June 2026 — the moment the cohort comes together for the first time. Fellows arrive having completed a short pre-residential preparation pack sent two weeks before. Phase I then continues online through July.",
    themes: [
      "Completed the pre-residential preparation and arrived at the residential with a draft Personal Vision Statement, initial Strengths & Resources Map, and psychometric assessment done",
      "Built a genuine peer community and established shared norms for learning and collaboration",
      "Completed a Network and Ecosystem Mapping exercise and begun to understand their position in the cultural field",
      "Established personalised learning goals to guide the rest of the Fellowship",
      "Been introduced to the question-led approach and begun formulating an initial research question",
      "Submitted their Phase I Reflection",
    ],
  },
  {
    label: "Phase II",
    title: "Ecosystem & Region",
    date: "August–October 2026",
    description: "Phase II expands the Fellow's lens to engage critically with the field of arts and culture. All three months are delivered virtually. Each month is anchored by two thematic speaker firesides — short talks followed by open, facilitated conversations. Fellows prepare questions in advance, shaping each session from their own position.",
    themes: [
      "Culture Theory 101 — key frameworks, thinkers, and contemporary discourse",
      "Cultural Equity — access, representation, and power structures in arts ecosystems",
      "Regenerative Practices — environmental and social sustainability in arts and institutions",
      "Cultural Entrepreneurship — innovation, sustainability, and value creation in culture",
      "Cultural Diplomacy — soft power, collaboration, and cross-border engagement",
      "Crisis & Reputation Management — navigating controversy, ethics, and responsibility",
    ],
  },
  {
    label: "Phase III",
    title: "Leadership & Futures",
    date: "November 2026–March 2027",
    description: "The final phase is dedicated to leadership, the Festival experience, and the public articulation of each Fellow's Question. Fellows arrive in Phase III with a clear sense of their question — Phase III is about finding the confidence, rigour, and language to share it with the world. The phase closes with a Question Proposal: a developed, written articulation of the question Fellows are pursuing and why it matters.",
    themes: [
      "Leadership foundations — values-based, adaptive, and distributed leadership in creative contexts",
      "Leading creative teams — high-performing teams, psychometric insights, and leadership typologies",
      "Futures thinking — technology, innovation, and the cultural sector of tomorrow",
      "Legal and governance frameworks — IP, arts law, institutional compliance",
      "The Question — from question to abstract to written proposal",
    ],
  },
];

const CollapsibleThemes = ({ themes, label }: { themes: string[]; label: string }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={`themes-${label}`} className="border-b border-border">
        <AccordionTrigger className="text-left text-sm font-bold py-3 hover:no-underline font-heading hover:bg-gradient-to-r hover:from-brij-red hover:via-brij-orange hover:to-brij-pink hover:bg-clip-text hover:text-transparent transition-all">
          Key Themes
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <ul className="space-y-2">
            {themes.map((theme, j) => (
              <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="text-brij-orange mt-0.5 shrink-0">•</span>
                <span>{theme}</span>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const Structure = () => {
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
              <p className="label-text mb-6">Programme Structure</p>
              <h1 className="editorial-subheading max-w-3xl">
                Three phases across nine months
              </h1>
            </motion.div>

            <div className="space-y-20 md:space-y-28">
              {phases.map((phase) => (
                <motion.div
                  key={phase.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid md:grid-cols-2 gap-8 md:gap-24">
                    <div>
                      <p className="label-text mb-3 text-brij-orange">{phase.label}</p>
                      <h2 className="text-xl md:text-2xl font-bold font-heading mb-2">
                        {phase.title}
                      </h2>
                      <p className="text-sm text-brij-orange font-medium">{phase.date}</p>
                    </div>
                    <div className="space-y-5">
                      <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                      <CollapsibleThemes themes={phase.themes} label={phase.label} />
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

export default Structure;
