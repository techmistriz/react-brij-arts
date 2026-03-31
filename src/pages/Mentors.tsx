import { motion } from "framer-motion";
import { User } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const mentors = [
  {
    name: "Mentor Name",
    title: "Cultural Director",
    organisation: "Cultural Institution",
    bio: "A leading voice in contemporary cultural practice with over two decades of experience in institutional leadership and public programme design.",
    image: null as string | null,
  },
  {
    name: "Mentor Name",
    title: "Senior Curator",
    organisation: "International Arts Foundation",
    bio: "Specialises in interdisciplinary curatorial practice, with a focus on South Asian contemporary art and cross-cultural dialogue.",
    image: null,
  },
  {
    name: "Mentor Name",
    title: "Programme Director",
    organisation: "Arts Council",
    bio: "Expert in cultural policy and programme development, working at the intersection of government, philanthropy, and independent practice.",
    image: null,
  },
  {
    name: "Mentor Name",
    title: "Writer & Researcher",
    organisation: "Independent",
    bio: "An award-winning cultural commentator and researcher whose work explores the politics of cultural production and institutional critique.",
    image: null,
  },
  {
    name: "Mentor Name",
    title: "Founder & Director",
    organisation: "Creative Studio",
    bio: "Leads a multidisciplinary creative practice that spans performing arts, visual culture, and public engagement initiatives.",
    image: null,
  },
  {
    name: "Mentor Name",
    title: "Head of Cultural Programmes",
    organisation: "International Foundation",
    bio: "Drives strategic cultural programming across regions, building partnerships between institutions, artists, and communities.",
    image: null,
  },
];

const Mentors = () => {
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
              className="mb-10 md:mb-16"
            >
              <p className="label-text mb-4 md:mb-6">Fellowship Mentors</p>
              <h1 className="editorial-subheading max-w-2xl mb-4 md:mb-6">
                Guided by established cultural leaders
              </h1>
              <p className="body-large text-muted-foreground max-w-2xl text-base md:text-xl">
                Fellows are mentored by experienced practitioners, institutional directors, 
                and cultural thinkers who bring deep expertise across disciplines and geographies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
              {mentors.map((mentor, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border border-border overflow-hidden group"
                >
                  {/* Image area */}
                  <div className="aspect-[4/3] bg-secondary overflow-hidden">
                    {mentor.image ? (
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User className="w-16 h-16 text-muted-foreground/30" />
                      </div>
                    )}
                  </div>
                  {/* Info */}
                  <div className="p-5 md:p-6">
                    <h3 className="font-bold text-lg mb-1">{mentor.name}</h3>
                    <p className="text-sm text-brij-orange font-medium mb-0.5">{mentor.title}</p>
                    <p className="text-xs text-muted-foreground mb-3">{mentor.organisation}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{mentor.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 md:mt-16 text-center"
            >
              <p className="text-sm text-muted-foreground">
                Mentor profiles will be updated as the fellowship cohort is confirmed.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mentors;
