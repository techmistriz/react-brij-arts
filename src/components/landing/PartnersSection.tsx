import { motion } from "framer-motion";
import ifiLogo from "@/assets/ifi-logo-new.png";
import ambassadeLogo from "@/assets/ambassade-france-logo-new.png";

const PartnersSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="label-text mb-6">Partners</p>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto mb-16">
            The Brij Cultural Leaders Fellowship is delivered by Serendipity Arts 
            as part of the wider Brij ecosystem, in partnership with Institut Français India.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
            <a href="https://www.ifindia.in" target="_blank" rel="noopener noreferrer">
              <img
                src={ifiLogo}
                alt="Institut Français India"
                className="h-16 md:h-24 opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
            <a href="https://in.ambafrance.org" target="_blank" rel="noopener noreferrer">
              <img
                src={ambassadeLogo}
                alt="Ambassade de France en Inde"
                className="h-16 md:h-24 opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
