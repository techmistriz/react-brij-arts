import { motion } from "framer-motion";
import ambassadeLogo from "@/assets/ambassade-france-logo-new.png";
import franceLogo from "@/assets/france-logo.png";

const PartnersSection = () => {

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-text mb-6">Partners</p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 font-body leading-relaxed">
            The Brij Cultural Leaders Fellowship is delivered by Serendipity Arts 
            as part of the wider Brij ecosystem, in partnership with Institut Français India.
          </p>
            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
            <a href="https://in.ambafrance.org" target="_blank" rel="noopener noreferrer">
              <img
                src={franceLogo}
                alt="France"
                className="h-10 md:h-14 opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
            <a href="https://www.ifindia.in" target="_blank" rel="noopener noreferrer">
              <img
                src={ambassadeLogo}
                alt="Ambassade de France en Inde"
                className="h-36 md:h-44 opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
