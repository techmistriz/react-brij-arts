import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import pubWacImg from "@/assets/pub-wac-cover.jpg";
import pubPpImg from "@/assets/pub-projects-processes-new.jpg";

const sections = [
  {
    title: "Projects / Processes",
    subtitle: "Documentation and critical reflection on projects presented at Serendipity Arts Festival editions.",
    image: pubPpImg,
    link: "https://serendipityarts.org/writing-initiative/projects-processes/projects-processes-2023/",
    linkLabel: "Read all editions",
  },
  {
    title: "Write | Art | Connect",
    subtitle: "Essays from the Arts Journalism Grant initiative exploring the intersections of writing and contemporary art practice across all editions.",
    image: pubWacImg,
    link: "https://serendipityarts.org/writing_type/write-art-connect/?yid=281",
    linkLabel: "Read all editions",
  },
];

const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 md:pt-28">
        <div className="px-5 md:px-12 lg:px-24 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-12 md:mb-20"
            >
              <p className="label-text mb-4 md:mb-6">Serendipity Publications</p>
              <h1 className="editorial-subheading max-w-3xl mb-4 md:mb-6">
                Reading & research for cultural practitioners
              </h1>
              <p className="body-large text-muted-foreground max-w-2xl text-base md:text-xl">
                Additional reading material from Serendipity Arts' writing initiatives —
                available for fellows and applicants to explore.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              {sections.map((s, i) => (
                <motion.a
                  key={s.title}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="border border-border overflow-hidden group flex flex-col relative"
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain z-10" />
                  <div className="aspect-[3/2] overflow-hidden bg-secondary relative z-0">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 md:p-6 flex flex-col flex-1 relative z-20">
                    <h2 className="font-bold text-base md:text-lg mb-2 group-hover:text-white transition-colors">{s.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1 group-hover:text-white/70 transition-colors">{s.subtitle}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      {s.linkLabel}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Publications;
