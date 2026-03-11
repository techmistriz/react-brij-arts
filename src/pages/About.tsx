import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const sections = [
  {
    label: "Introduction",
    title: "The Brij Cultural Leaders Fellowship",
    content: [
      "The Brij Cultural Leaders Fellowship is a nine-month programme for mid-career cultural practitioners and cross-sector professionals across South Asia — the first of its kind in the region.",
      "It is built on a single conviction: that the most valuable thing a Fellow develops is not a deliverable, but a question. A genuine inquiry rooted in their own practice and context — one that continues to shape their work long after the Fellowship concludes.",
      "Each participant leaves with what we call 'The Question': a foundation for sustained, independent thinking.",
    ],
  },
  {
    label: "Purpose",
    title: "Why the Fellowship exists",
    content: [
      "The Fellowship emerged from a recognition that the cultural sector in South Asia lacks the leadership infrastructure that other industries take for granted. While artists, curators, producers and cultural practitioners across the region are building remarkable work, there are very few spaces where they can step back to examine the leadership responsibilities that come with it.",
      "The Fellowship exists to address that gap directly, providing practitioners with the critical frameworks, professional networks, and reflective space necessary to lead with both rigour and vision.",
    ],
  },
  {
    label: "Approach",
    title: "The Fellowship approach",
    content: [
      "The Brij Cultural Leaders Fellowship is not a taught course. Fellows arrive with questions rather than answers. Through guided reflection, peer exchange, mentorship, and two in-person moments in Goa, each Fellow develops a live inquiry rooted in their own practice.",
      "This culminates in a public presentation at the Serendipity Arts Festival in Goa.",
    ],
  },
  {
    label: "The Brij",
    title: "The Brij connection",
    content: [
      "Serendipity Arts is currently building THE BRIJ — a 1.4 million square foot centre for arts and culture in New Delhi. The scale of this project raises a central question: what kind of leadership will the next generation of cultural institutions require?",
      "The Fellowship is one response to that question — a space where that leadership begins to take shape.",
    ],
  },
  {
    label: "Serendipity Arts",
    title: "Why Serendipity Arts",
    content: [
      "For over a decade, Serendipity Arts has worked at the intersection of artistic practice, research, and cross-cultural dialogue across South Asia. Through festivals, grants, residencies, and institutional collaborations, the organisation has developed a deep understanding of the cultural sector's needs.",
      "The Fellowship is Serendipity Arts' response to a clear gap: the absence of sustained leadership development within the cultural sector. It is not a grant programme and not a residency. It is a structured environment for reflective leadership development.",
    ],
  },
  {
    label: "Culmination",
    title: "Public presentation",
    content: [
      "The Fellowship culminates at the Serendipity Arts Festival in Goa, where Fellows present their Research Inquiries to an audience of artists, institutions, and cultural practitioners.",
    ],
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-16 md:mb-24"
            >
              <p className="label-text mb-6">About</p>
              <h1 className="editorial-subheading max-w-3xl">
                Building the next generation of cultural leaders
              </h1>
            </motion.div>

            <div className="space-y-20 md:space-y-28">
              {sections.map((section, i) => (
                <motion.div
                  key={section.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid md:grid-cols-2 gap-8 md:gap-24">
                    <div>
                      <p className="label-text mb-3 text-primary">{section.label}</p>
                      <h2 className="text-xl md:text-2xl font-bold font-heading">
                        {section.title}
                      </h2>
                    </div>
                    <div className="space-y-5">
                      {section.content.map((para, pi) => (
                        <p key={pi} className="text-muted-foreground leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
