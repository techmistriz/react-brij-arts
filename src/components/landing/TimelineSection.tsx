import { motion } from "framer-motion";
import { useState } from "react";

const phases = [
  {
    number: "01",
    title: "Applications Open",
    date: "April",
    description: "Opens with a six-day residential in Goa — the moment the cohort comes together for the first time. Community building, personal reflection, strengths work, storytelling, and network mapping.",
  },
  {
    number: "02",
    title: "Selection Process",
    date: "May",
    description: "Six expert-led fireside conversations expanding each Fellow's lens to the wider cultural field. Fellows shape every session from their own position, submitting questions in advance and driving the dialogue.",
  },
  {
    number: "03",
    title: "Phase I",
    date: "Self & Context",
    description: "Personal reflection, self-awareness, and the beginning of your inquiry. Opens with a six-day residential in Goa, where Fellows meet, map their strengths and networks, and draft their Question for the first time.",
  },
  {
    number: "04",
    title: "Phase II",
    date: "Ecosystem & Region",
    description: "A critical engagement with the field of arts and culture across South Asia. Six expert-led fireside conversations explore equity, sustainability, entrepreneurship, diplomacy, and the forces shaping our cultural ecosystems.",
  }, 
  {
    number: "05",
    title: "Phase III",
    date: "Leadership & Futures",
    description: "Leadership, future thinking, and the public articulation of each Fellow's inquiry, including three days at the Serendipity Arts Festival in Goa.",
  },
];

const TimelineSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="timeline" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-text mb-6">Programme Phases</p>
          <h2 className="editorial-subheading mb-16">Nine months. One question.</h2>
        </motion.div>

        <div className="space-y-0">
          {phases.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t border-border last:border-b cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start md:items-center gap-6 md:gap-12 py-6 md:py-8">
                <span className="text-brij-orange font-medium text-sm tabular-nums shrink-0">{item.number}</span>
                <h3 className="font-bold text-lg md:text-xl font-heading flex-1">{item.title}</h3>
                <span className="text-brij-orange text-sm shrink-0">{item.date}</span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  hoveredIndex === i ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-muted-foreground leading-relaxed font-body pl-10 md:pl-[4.5rem] pr-6">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
