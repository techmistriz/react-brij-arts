import { motion } from "framer-motion";
import mentorshipImg from "@/assets/mentorship.jpg";
import lecturesImg from "@/assets/lectures.jpg";
import workshopsImg from "@/assets/workshops.jpg";
import collaborativeImg from "@/assets/collaborative.jpg";

const experiences = [
  { title: "Mentorship", image: mentorshipImg, description: "Guided by established cultural leaders and institutional directors" },
  { title: "Structured Learning", image: lecturesImg, description: "Modules on cultural policy, programme design, and leadership practice" },
  { title: "Institutional Exposure", image: workshopsImg, description: "Direct engagement with how cultural organisations operate" },
  { title: "Peer Learning", image: collaborativeImg, description: "Knowledge exchange within a cohort of interdisciplinary fellows" },
];

const ExperienceSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden aspect-[16/9] cursor-default"
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
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent transition-colors duration-500 group-hover:from-foreground/85" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="text-background font-bold text-lg md:text-xl mb-1">{exp.title}</h3>
                <p className="text-background/70 text-sm">{exp.description}</p>
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
