import { motion } from "framer-motion";

const profiles = [
  "Artists moving into leadership roles",
  "Curators & Programme Managers",
  "Cultural Producers",
  "Researchers & Writers",
  "Professionals transitioning into the arts sector",
  "Independent Practitioners",
];

const WhoShouldApply = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-text mb-6">Who Should Apply</p>
            <h2 className="editorial-subheading mb-6">
              For mid-career practitioners moving toward cultural leadership
            </h2>
            <p className="body-large text-muted-foreground">
              The fellowship is designed for those ready to take on leadership roles within 
              the cultural ecosystem — where working with artists, institutions, and public 
              audiences requires a different kind of leadership practice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <ul className="space-y-5">
              {profiles.map((profile, i) => (
                <li key={i} className="flex items-center gap-4 py-3 border-b border-border">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-base font-normal font-body text-foreground">{profile}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldApply;
