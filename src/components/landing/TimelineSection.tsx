import { motion } from "framer-motion";

const timeline = [
  { phase: "Applications Open", date: "Early 2026", description: "Submit your application through the online portal." },
  { phase: "Selection Process", date: "Spring 2026", description: "Review, shortlisting, and conversations with the selection panel." },
  { phase: "Opening Residential", date: "20–25 June 2026", description: "Six-day in-person residential in Goa. Fellowship begins." },
  { phase: "Serendipity Arts Festival", date: "December 2026", description: "Public presentation of Research Inquiries at the Festival in Goa." },
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
