import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const sections = [
  {
    label: "Overview",
    title: "The Brij Cultural Leaders Fellowship",
    content: [
      "The Brij Cultural Leaders Fellowship is a nine-month programme for mid-career cultural practitioners and cross-sector professionals across South Asia — the first of its kind in the region.",
      "It is built on a single conviction: that the most valuable thing a Fellow develops is not a deliverable, but a question. A genuine inquiry rooted in their own practice and context — one that continues to shape their work long after the Fellowship concludes.",
      "Each participant leaves with what we call 'The Question': a foundation for sustained, independent thinking.",
    ],
  },
  {
    label: "Course Philosophy",
    title: "How the Fellowship thinks",
    content: [
      "The Fellowship is not a taught course. Fellows arrive with questions rather than answers. Through guided reflection, peer exchange, mentorship, and two in-person moments in Goa, each Fellow develops a live inquiry rooted in their own practice.",
      "The programme is designed for practitioners who cannot step away from their work. It comes to them — structured around a maximum of six hours per week of engagement, with depth built through sustained dialogue rather than volume.",
    ],
  },
  {
    label: "The Three Pillars",
    title: "What the Fellowship is built on",
    content: [
      "Mentorship — Every Fellow is matched with a senior mentor from the cultural sector. The relationship is confidential, monthly, and self-scheduled. Mentors are selected for their experience and their capacity to listen as well as to advise.",
      "Peer Learning — The cohort of 12–15 practitioners forms the core of the experience. Fellows learn from each other's contexts, challenges, and questions across disciplines and geographies.",
      "Institutional Exposure — Direct engagement with how cultural organisations operate, including governance, financial stewardship, reputation management, crisis response, diplomacy, and team leadership.",
    ],
  },
  {
    label: "Why Serendipity Arts",
    title: "A decade of building cultural infrastructure",
    content: [
      "For over a decade, Serendipity Arts has worked at the intersection of artistic practice, research, and cross-cultural dialogue across South Asia. Through festivals, grants, residencies, and institutional collaborations, the organisation has developed a deep understanding of the cultural sector's needs.",
      "The Fellowship is Serendipity Arts' response to a clear gap: the absence of sustained leadership development within the cultural sector. It is not a grant programme and not a residency. It is a structured environment for reflective leadership development.",
    ],
  },
  {
    label: "What Will I Learn",
    title: "Skills and frameworks",
    content: [
      "Governance and institutional design. Financial stewardship and fundraising. Reputation management and public communication. Crisis leadership and decision-making under pressure. Cultural diplomacy and cross-sector partnership. Team-building and organisational culture.",
      "Everything in the programme has been learned the hard way, over more than a decade of building one of South Asia's most ambitious cultural platforms. We are passing it on.",
    ],
  },
  {
    label: "Programme Phases",
    title: "Three phases across nine months",
    content: [
      "Phase I (June–July) — Self and context. Who you are as a leader, where you work, and what you are carrying into the room.",
      "Phase II (August–October) — The ecosystem. The region, the structures you operate within and sometimes against. Looking outward.",
      "Phase III (November–March) — Leadership and futures. Where you are going, and what you will build. This culminates in a public presentation at the Serendipity Arts Festival in Goa.",
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
              {sections.map((section) => (
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
