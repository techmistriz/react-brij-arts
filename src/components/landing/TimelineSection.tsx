import { motion } from "framer-motion";

const timeline = [
  { phase: "Applications Open", date: "March 2026", description: "Submit your application through the online portal." },
  { phase: "Selection Process", date: "April — May 2026", description: "Review, shortlisting, and interviews with the selection committee." },
  { phase: "Fellowship Begins", date: "July 2026", description: "Orientation and onboarding with your cohort." },
  { phase: "Programme Duration", date: "July — December 2026", description: "Six months of intensive learning, mentorship, and engagement." },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="section-padding bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="label-text !text-background/40 mb-6">Programme Timeline</p>
          <h2 className="editorial-subheading mb-16">Key dates</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-background/20 pt-6"
            >
              <p className="text-primary font-semibold text-sm mb-2">{item.date}</p>
              <h3 className="font-bold text-xl mb-3">{item.phase}</h3>
              <p className="text-background/60 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
