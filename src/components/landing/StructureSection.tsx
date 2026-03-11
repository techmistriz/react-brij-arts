import { motion } from "framer-motion";

const blocks = [
  {
    number: "01",
    title: "Learning Modules",
    description: "Structured sessions on cultural policy, institutional practice, audience development, programme design, and creative leadership.",
  },
  {
    number: "02",
    title: "Mentorship",
    description: "One-on-one guidance from established cultural leaders, institutional directors, and senior practitioners across disciplines.",
  },
  {
    number: "03",
    title: "Peer Cohort",
    description: "A carefully selected cohort of fifteen fellows — creating a network of interdisciplinary peers and long-term collaborators.",
  },
  {
    number: "04",
    title: "Institutional Exposure",
    description: "Direct engagement with cultural institutions, understanding how organisations operate, programme, and create public impact.",
  },
  {
    number: "05",
    title: "Leadership Project",
    description: "Fellows develop and present an original leadership project to a panel of cultural sector leaders and the wider community.",
  },
];

const StructureSection = () => {
  return (
    <section id="structure" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="label-text mb-6">Programme Structure</p>
          <h2 className="editorial-subheading max-w-2xl mb-16">
            How the fellowship works
          </h2>
        </motion.div>

        <div className="space-y-0">
          {blocks.map((block, i) => (
            <motion.div
              key={block.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-8 py-8 border-t border-border last:border-b"
            >
              <span className="text-muted-foreground font-medium text-sm">{block.number}</span>
              <h3 className="font-bold text-xl">{block.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{block.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
