import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

import { ChevronDown } from "lucide-react";
import { Linkedin } from "lucide-react";

import abu from "../assets/cohortImg/abu-sufiyan-khan.jpg";
import anshu from "../assets/cohortImg/anshul-gandhi.jpg";
import anuj from "../assets/cohortImg/anuj-mahotra.jpg";
import chhavi from "../assets/cohortImg/chhavi-jain.jpg";
import dipti from "../assets/cohortImg/dipti-rao.jpg";
import kush from "../assets/cohortImg/kush-dhebar.jpg";
import lekha from "../assets/cohortImg/lekha-naidu.jpg";
import maharshee from "../assets/cohortImg/maharshee-dev-mahanta.jpg";
import pallavi from "../assets/cohortImg/pallavi-narayan.jpg";
import pooja from "../assets/cohortImg/pooja-yadav.jpg";
import prachi from "../assets/cohortImg/prachi-dalal.jpg";
import rajatri from "../assets/cohortImg/rajatri-biswas.jpg";
import ritik from "../assets/cohortImg/ritik-rawat.jpg";
import rubina from "../assets/cohortImg/rubina-singh.jpg";
import shanmukha from "../assets/cohortImg/shanmukha-priya-mohan.jpg";
import umang from "../assets/cohortImg/umang-sinha.jpg";
import vidushi from "../assets/cohortImg/vidushi-bhatia.jpg";

const cohortData = [
  {
    name: "ABU SUFIYAN KHAN",
    linkedin: "https://www.linkedin.com/in/delhi6wala/",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "Abu Sufiyan Khan is a cultural entrepreneur, heritage curator, and storyteller. He is the founder of Tales of City, a pioneering heritage storytelling and cultural tourism platform based in Delhi, and Purani Dilli Walo Ki Baatein, a community platform preserving the living memory of Old Delhi. He also produces the Old Delhi Podcast and serves as Director of Saaj Punjab, a premium cultural festival. A former Googler and engineer by training, he has led over 1,000 cultural experiences across India, turning history, urban memory, and community knowledge into sustainable enterprises. He co-curated the City as a Museum festival by KNMA in Delhi, and is the curator of Jahaanuma, a bespoke cultural gathering format that convenes historians, artists, and thinkers in heritage spaces. His work sits at the intersection of heritage, storytelling, and the creative economy. Tales of City is part of the Culture Catalyst Cohort, a joint initiative of the Punjab Cultural Project, Atal Incubation Centre at ISB, and Network of Indian Cultural Enterprise.",
    image: abu,
  },
  {
    name: "ANSHUL GANDHI",
    linkedin: "https://www.linkedin.com/in/anshul-gandhi-8223106a/",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "I spend my days working in event technology and my free time wandering through cities, museums, markets, and old neighbourhoods. I'm drawn to the small details that give places their character and am interested in how people connect with culture, ideas, and one another through shared experiences.",
    image: anshu,
  },
  {
    name: "ANUJ MAHOTRA",
    linkedin: "https://www.linkedin.com/in/anuj-mahotra-5919a0203/",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "Anuj Mahotra works with cultural heritage, archives, and community-based documentation practices across South Asia. His work focuses on preserving material culture, oral histories, performance traditions and indigenous knowledge systems through research, digitisation, and collaborative archival initiatives. He has led and coordinated large-scale documentation projects involving manuscripts, textiles, photographs, and audiovisual collections, while working closely with artists, practitioners, researchers, and cultural institutions. His practice is grounded in building accessible and sustainable heritage initiatives that keep cultural memory connected to the communities that continue to shape and carry it forward.",
    image: anuj,
  },
  {
    name: "Chhavi Jain",
    linkedin: "https://in.linkedin.com/in/chhavijain111",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "Chhavi Jain is an independent curator and writer. Her practice spans the Indigenous, contemporary, and diasporic contexts of art and culture. She seeks to amplify marginalized voices, and create equitable and inclusive avenues within the arts. Jain has consulted with prominent art institutions, galleries, and production companies across India and the United States. She has dual Master's degrees, in Global Arts and Cultures, Rhode Island School of Design and English Literature, Delhi University. Her writings have been in various publications and covered by eminent media houses such as, India Today, The Week, The Pioneer Daily, Hakara journal, and The Patriot. Jain is recipient of the Graduate Commons Grant and SPUR Fund for her thesis research at RISD, and an AICAD teaching fellowship 2024 nominee. She provides consultation services to art organizations, collectors, artists, and young professionals in the field.",
    image: chhavi,
  },
  {
    name: "Dipti Rao",
    linkedin: "https://www.linkedin.com/in/dipti-rao-20543324/",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "Dipti Rao works in the arts and across the arts. She has been involved with several different aspects of arts administration, from operations to building systems, a touch of curation and a whole lot of programme management. She currently leads the team at the Prestige Centre for Performing Arts in Bengaluru, India.",
    image: dipti,
  },
  {
    name: "Kush Dhebar",
    linkedin: "https://www.linkedin.com/in/kush-dhebar-phd-63604b112/",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "Kush is a PhD in Archaeology from Deccan College, PGRI, Pune with close to 13 years of work experience spanning across K-12 Education, Development Sector, Government Sector and Entrepreneurship. He is the Founder and Director of Vratya Foundation through which he writes comics on Indian Culture to foster Cultural Intelligence among India's Youth. As a pilot, he converted his PhD into two comics, one on Vijayanagara and the other on Mallavidya (Grappling). He is also engaged as a Consultant with the Department of Archaeology and Museums, Haryana and he writes comics, children's illustrated books, documentaries and does other conventional archaeology work like site exploration, documentation and excavation. Presently, Kush is also a member of the Art Medium Circle, an Art Collective under the aegis of LAND and Devi Art Foundation with whom he is working on Comics Pedagogy and other art education research projects.",
    image: kush,
  },
  {
    name: "Lekha Naidu",
    linkedin: "https://www.linkedin.com/in/lekha-naidu-148805129",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "Lekha Naidu is a theatre practitioner, cultural programmer, and facilitator based in Bangalore, whose practice is rooted in the questions that arise when performance, community, and cultural infrastructure meet. She has built programming across theatre, cinema, children's work, and vernacular cultural forms, most significantly during six years at the Bangalore International Centre, where she originated and sustained several long-running public programmes. Her work in theatre pedagogy spans over a decade of teaching at the college level and creating performance-based learning experiences for children and young people. Her work has also included a consultancy with India's Ministry of Culture High-Powered Committee, reviewing the governance of national cultural institutions. An actor on stage and screen, she currently works independently across programming, facilitation, and community engagement.",
    image: lekha,
  },
  {
    name: "Maharshee Dev Mahanta",
    linkedin: "https://www.linkedin.com/in/maharsheedm",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "Maharshee Dev Mahanta is a researcher and art market specialist based in New Delhi. Originally from Assam, he holds a background in law with a specialization in Intellectual Property Rights. He currently heads the Pricing and Market Research department at one of India's largest art collections, where he established the division to support research-driven approaches to valuation, collection strategy, and market analysis. Over the last 5 years, his work has evolved from provenance and archival research to the intersection of scholarship, valuation, and market intelligence, where he studies market trends, artist trajectories, collecting trends, and the construction of value within the Indian art ecosystem. Through his work, Mahanta contributes to broader conversations around historical credibility, market transparency, and the evolving frameworks through which contemporary and modern Indian art is researched, collected, and understood.",
    image: maharshee,
  },
  {
    name: "Dr Pallavi Narayan",
    linkedin: "https://www.linkedin.com/in/narayanpallavi/",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "Dr Pallavi Narayan is an author, editor, and cultural researcher whose work explores memory, institutions, and contemporary cultural life in the Global South, with particular focus on South and Southeast Asia. Her practice moves across fiction, criticism, archival inquiry, and interdisciplinary research, with a particular interest in museums, private collections, and narrative forms shaped by place and sound. She has been Director of the Ahmedabad Writing Programme, Ahmedabad University, and worked in academia and book publishing in India and Singapore. She has authored Pamuk's Istanbul: The Self and the City (Routledge 2022) and edited Singapore at Home: Life Across Lines. Her fellowships include South Asia Speaks, [Untitled]: The Art/Writer's Workshop at Kochi-Muziris Biennale, Indian Ocean Writers' Residency, Jalan Besar Fellowship, CHCI-Mellon Global Humanities Institutes in Chile and Taiwan, Frankfurt Fellowship and others.",
    image: pallavi,
  },
  {
    name: "Pooja Yadav",
    // linkedin: "https://linkedin.com",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "Pooja is an Artist Curator with the Serendipity Arts Festival, and works with the travel, logistics and boarding teams for visiting artists and productions.",
    image: pooja,
  },
  {
    name: "Prachi Dalal",
    linkedin: "https://www.linkedin.com/in/prachi-dalal-3273b9222",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "Prachi Dalal works at the intersection of education, arts, and cultural practice, shaped by over two decades across museums, schools, and community spaces in India and abroad. Trained as a Kathak dancer and deeply engaged with intangible heritage, her work explores how art, craft, and lived environments can become pathways to understanding ourselves, others and the world around us. Her journey has moved between museum education in the U.S., curating performance platforms, and teaching in diverse school contexts in the U.S. and India, where she has sought to create learning experiences that are inquiry-driven, interdisciplinary, and rooted in lived realities. As Creative Head of Kalāvanam (KFI), she is currently shaping an evolving space that invites a pause—where creativity, ecological sensitivity, and reflection come together. Her practice continues to ask how learning might move toward more attentive, connected, and meaningful ways of living.",
    image: prachi,
  },
  {
    name: "Rajatri Biswas",
    linkedin: "https://www.linkedin.com/in/rajatri-biswas-b2a74217/",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "Rajatri Biswas fell in love with the stage and somehow turned it into a career. Over a decade, she has produced the Jaipur Literature Festival and other performing arts festivals across India and internationally with Teamwork Arts, project-managed the Nita Mukesh Ambani Cultural Centre from founding team to opening nights of international musicals, and worked across curation, production, sponsorship, and producing. In her career, she has had wonderful opportunities to take Indian culture to the world and it has always been applauded. Her personal favourite: representing NMACC and programming at India House, Paris during the 2024 Olympics. Today, at CRISIL Urban Advisory, she is making the case that arts, culture, and heritage belong in city budgets and masterplans. Drama, music, and dance remain, very much, a personal policy.",
    image: rajatri,
  },
  {
    name: "Ritik Rawat",
    // linkedin: "https://linkedin.com",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "Ritik is a graduate in Philosophy from Hansraj College, University of Delhi. With a strong interest in marketing, he bridges the technical and creative dimensions of the field. As a Digital Marketer at Serendipity Arts, Ritik works at the intersection of storytelling and technology to shape engaging digital experiences and outreach for the institution.",
    image: ritik,
  },
  {
    name: "Rubina Singh",
    linkedin: "https://www.linkedin.com/in/rubinasingh02",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "Rubina Singh is a New Delhi-based textile artivist, social designer, and human rights practitioner whose work sits at the crossing of feminist making, rights-based advocacy, and participatory design. Trained in Law and Design, she draws on the subversive histories of embroidery, including her inherited love of Phulkari, to explore fabric as a language of repair, witness, and collective memory. She seeded Rafunaama, a South Asian platform nurturing textile artivists nurturing solidarities and shared practice across borders. Alongside this, she has spent over 15 years in the human rights field and currently leads network weaving initiatives at Ignite Philanthropy, working across the Global Majority to end violence against children.",
    image: rubina,
  },
  {
    name: "Shanmukha Priya Mohan",
    // linkedin: "https://linkedin.com",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "Shanmukha Priya Mohan is a cultural practitioner working across India and the UK, designing programmes and platforms that support artists and practitioners to build sustainable, connected, and visible practices over time. Trained in architecture and public art, she brings a spatial and participatory approach to programme design, developing learning platforms, fellowship structures, and community initiatives that centre peer exchange and public access. Her work is rooted in questions of decolonisation, accessibility, and the sustenance of creative practice, with a growing inquiry into what a fair, community-rooted cultural ecosystem looks like on its own terms, and how institutions and everyday spaces can work together to make art a genuine part of everyday life.",
    image: shanmukha,
  },
  {
    name: "Umang Sinha",
    linkedin: "https://www.linkedin.com/in/umang-sinha-012ba7176/",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "Umang Sinha is a Consultant in the Museums Division, Ministry of Culture, Government of India. Prior to this, she worked with UNESCO New Delhi and taught History to undergraduates at the Royal Thimphu College, Bhutan. She holds an MPhil in Modern South Asian Studies from Cambridge, where she was a Commonwealth and Cambridge Trust Scholar, and a BA and MA in History from Miranda House, University of Delhi. Her experience working with and digitising popular art collections, including bazaar and calendar art, during her MPhil and earlier, shaped her interest in making material accessible through digitisation and institution building. At the BRIJ Fellowship, she is interested in what it takes to make museums financially self-sustaining and contextually resonant, and in their potential as third spaces that anchor community life, leisure, and urban belonging for the people they serve.",
    image: umang,
  },
  {
    name: "Vidushi Bhatia",
    // linkedin: "https://linkedin.com",
    role: "The BRIJ Cultural Leaders Fellow 2026",
    description:
      "Vidushi Bhatia is a cultural producer and arts manager who believes exhibitions should be more than just things to look at — they should be spaces to play, participate, and produce. She is interested in building ecosystems where art becomes a site of collective encounter — participatory, process-driven, and rooted in community — and in exploring how cultural institutions can foster deeper forms of engagement. Over the last seven years, she has worked across programming, operations, and strategy, building the frameworks that arts organisations depend on. Previously, she was part of the founding programming team at the Nita Mukesh Ambani Cultural Centre, where she worked across exhibitions and public programmes. She is currently Associate Director at Jaipur Centre for Art, where she leads exhibitions and programmes within the historic City Palace.",
    image: vidushi,
  },
];

const CohortPage = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleReadMore = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="max-w-7xl mx-auto px- py-10 ">
      <Navbar />
      {/* Header */}
      <div className="mt-20 ">
        <h1 className="text-3xl md:text-4xl font-bold">Cohort 2026–2027</h1>
        <p className="text-[#333] mt-2 max-w-2xl">
          Meet the inaugural Brij Fellows, convening over nine months of
          residentials, research and exchange.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-20 pb-10">
        {cohortData.map((person, index) => {
          const row = Math.floor(index / 3);

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 120,
                scale: 0.98,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 18,
                delay: row * 0.08,
              }}
              className="bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 relative mb-2">
                <h3 className="text-[20px] font-bold mb-4 uppercase">
                  {person.name}
                </h3>

                <p
                  className={`text-[#333] text-sm font-medium leading-[22px] transition-all duration-300 ${
                    expandedCards.includes(index) ? "" : "line-clamp-5"
                  }`}
                >
                  {person.description}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => toggleReadMore(index)}
                    style={{
                      fontFamily: '"Akhand", "Barlow Condensed", sans-serif',
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase  text-black cursor-pointer"
                  >
                    {expandedCards.includes(index) ? "READ LESS" : "READ MORE"}

                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        expandedCards.includes(index) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${person.name} LinkedIn`}
                    >
                      <Linkedin
                        size={16}
                        className="text-muted-foreground hover:text-black transition-colors cursor-pointer"
                      />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default CohortPage;
