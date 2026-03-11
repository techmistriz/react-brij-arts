import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import pubWacImg from "@/assets/pub-write-art-connect.jpg";
import pubPpImg from "@/assets/pub-projects-processes.jpg";

const sections = [
  {
    title: "Write | Art | Connect",
    subtitle: "Essays from the Arts Journalism Grant initiative exploring the intersections of writing and contemporary art practice across all editions.",
    image: pubWacImg,
    link: "https://serendipityarts.org/writing_type/write-art-connect/?yid=281",
    linkLabel: "Read all editions",
  },
  {
    title: "Projects / Processes",
    subtitle: "Documentation and critical reflection on projects presented at Serendipity Arts Festival editions.",
    image: pubPpImg,
    link: "https://serendipityarts.org/writing-initiative/projects-processes/projects-processes-2023/",
    linkLabel: "Read all editions",
  },
];

const essays = [
  {
    title: "Anti-Music and Alternative Sound Practices in India",
    description: "An essay exploring anti-music and alternative sound practices in India with Revant Ruhail Qaisar and Kamakhya R.",
    url: "https://serendipityarts.org/wp-content/uploads/2025/10/Anti-Music-and-Alternative-Sound-Practices-In-India-with-Revant-Ruhail-Qaisar-and-Kamakhya-R.pdf",
  },
  {
    title: "Remains To Be Seen",
    description: "A critical essay examining visibility, memory, and artistic practice in contemporary culture.",
    url: "https://serendipityarts.org/wp-content/uploads/2025/10/Remains-To-Be-Seen.pdf",
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

            {/* WAC & Projects/Processes */}
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mb-12 md:mb-16">
              {sections.map((s, i) => (
                <motion.a
                  key={s.title}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="border border-border overflow-hidden group flex flex-col"
                >
                  <div className="aspect-[3/2] overflow-hidden bg-secondary">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <h2 className="font-bold text-base md:text-lg mb-2">{s.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{s.subtitle}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      {s.linkLabel}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Essays from Arts Journalism */}
            <div className="mb-12 md:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 md:mb-8"
              >
                <h2 className="font-bold text-lg md:text-xl mb-2">Essays from Arts Journalism</h2>
                <p className="text-sm text-muted-foreground">Long-form essays commissioned through the Arts Journalism Grant.</p>
              </motion.div>
              <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                {essays.map((e, i) => (
                  <motion.div
                    key={e.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="border border-border p-5 md:p-6 flex flex-col"
                  >
                    <h3 className="font-bold text-base md:text-lg mb-2">{e.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{e.description}</p>
                    <a
                      href={e.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Publications;
