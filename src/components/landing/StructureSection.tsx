import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const blocks = [
  {
    number: "01",
    title: "Structured Learning",
    description: "Weekly live sessions with the Course Director, six expert-led fireside conversations, and curated frameworks across cultural policy, institutional practice, and creative leadership.",
  },
  {
    number: "02",
    title: "Mentorship",
    description: "Every Fellow is matched with one senior mentor from the cultural sector for the full nine months. Monthly one-to-one sessions — self-scheduled, and driven by the Fellow.",
  },
  {
    number: "03",
    title: "Peer Cohort",
    description: "A carefully selected cohort of 10–15 Fellows — exceptional mid-career practitioners and professionals from across India — a network built through nine months of genuine shared work.",
  },
  {
    number: "04",
    title: "Programme Engagement",
    description: "Direct engagement with how cultural organisations operate — governance, financial stewardship, reputation management, crisis response, diplomacy, and team leadership.",
  },
  {
    number: "05",
    title: "The Question",
    description: "Fellows develop a Question Proposal ‘in Phase III’ : a written articulation of the intellectual inquiry they are pursuing and why it matters — a compass for the work ahead. The question belongs entirely to the Fellow.",
  },
];

const StructureSection = () => {
  return (
    <section id="structure" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-8 py-8 border-t border-border last:border-b"
            >
              <span className="text-brij-orange font-medium text-sm tabular-nums">{block.number}</span>
              <h3 className="font-bold text-xl font-heading">{block.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-body">{block.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <Link
            to="/structure"
            className="relative overflow-hidden inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 text-sm font-heading font-bold tracking-wide group hover:text-white transition-colors"
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain" />
            <span className="relative z-10 inline-flex items-center gap-2">
              View Full Programme Structure <ArrowRight size={16} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StructureSection;
