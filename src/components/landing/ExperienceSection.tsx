import { motion } from "framer-motion";
import mentorshipImg from "@/assets/mentorship-new.jpg";
import structuredLearningImg from "@/assets/structured-learning.jpg";
import institutionalExposureImg from "@/assets/institutional-exposure.jpg";
import peerLearningImg from "@/assets/peer-learning.jpg";

const experiences = [
  { title: "Mentorship", image: mentorshipImg, description: "One senior mentor per Fellow — matched individually, for monthly one-to-one sessions across the full nine months" },
  { title: "Structured Learning", image: structuredLearningImg, description: "Expert-led fireside conversations, weekly live sessions, and curated frameworks across all three phases" },
  { title: "Institutional Exposure", image: institutionalExposureImg, description: "Direct engagement with how cultural organisations operate — governance, programme design, and public impact" },
  { title: "Peer Learning", image: peerLearningImg, description: "A cohort of exceptional mid-career practitioners — a network built through nine months of genuine shared work" },
];

const ExperienceSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-text mb-6">The Cohort Experience</p>
          <h2 className="editorial-subheading max-w-2xl mb-16">
            What fellows experience
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden aspect-[16/9] cursor-default border border-border"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-105"
                style={{
                  animation: `kenburns-${i % 2 === 0 ? 'in' : 'out'} 20s ease-in-out infinite alternate`,
                }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-colors duration-500 group-hover:from-black/80" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="text-white font-bold text-lg md:text-xl mb-1 font-heading">{exp.title}</h3>
                <p className="text-white/70 text-sm font-body max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 overflow-hidden">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes kenburns-in {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.08) translate(-1%, -1%); }
        }
        @keyframes kenburns-out {
          0% { transform: scale(1.08) translate(-1%, -1%); }
          100% { transform: scale(1) translate(0, 0); }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
