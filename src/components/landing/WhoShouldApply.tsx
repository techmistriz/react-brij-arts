import { motion } from "framer-motion";

const profiles = [
  "Curators, Programme Managers & Cultural Strategists",
  "Cultural and Creative Producers",
  "Researchers, Writers & Critical Thinkers",
  "Designers, Architects & Spatial Practitioners",
  "Technologists, Media Practitioners & Digital Creators",
  "Academics and Educators working across disciplines",
  "Professionals transitioning into the arts and creative sectors",
  "Independent Practitioners across disciplines",
];

const WhoShouldApply = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label-text mb-6">Who Should Apply</p>
            <h2 className="editorial-subheading mb-6">
              For mid-career practitioners moving toward cultural leadership
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              The fellowship is designed for those ready to take on leadership roles within 
              the cultural ecosystem — where working with artists, institutions, and public 
              audiences requires a different kind of leadership practice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="space-y-0">
              {profiles.map((profile, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-4 py-4 border-b border-border"
                >
                  <span className="w-2.5 h-2.5 bg-brij-orange rounded-full flex-shrink-0" />
                  <span className="text-base font-body text-foreground">{profile}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldApply;
