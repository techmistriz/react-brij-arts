import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, submitContactForm } from "@/lib/api/contact";
import { useForm } from "react-hook-form";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Enter a valid email"),
  contact: z.string().min(10, "Enter a valid phone number"),
});

const individualFaq = [
  {
    title: "The Fellowship",
    items: [
      {
        q: "What is the Brij Cultural Leaders Fellowship?",
        a: "A nine-month leadership programme for mid-career cultural practitioners across South Asia, delivered by Serendipity Arts and led by Course Director Smriti Rajgarhia. The Fellowship brings together 12–15 practitioners for rigorous learning — across governance, financial stewardship, reputation management, crisis leadership, diplomacy, and team-building.",
      },
      {
        q: "Is this a course or a degree?",
        a: "Neither. You will not receive a formal academic qualification. You will receive nine months of structured, peer-led learning with practitioners at the same career stage — and mentors who have been where you are going. You will leave with a developed leadership proposal and a cohort you will work alongside for years.",
      },
      {
        q: "Who delivers the programme?",
        a: "Serendipity Arts, founded in 2015 and now one of South Asia's largest multidisciplinary arts organisations. Course Director Smriti Rajgarhia leads the programme. The curriculum is designed with input from practitioners, thinkers, and institution builders across India and internationally.",
      },
    ],
  },
  {
    title: "Who Can Apply",
    items: [
      {
        q: "Am I eligible?",
        a: "The Fellowship is for practitioners mid-career in culture — typically 8–20 years into the work. You should be currently active in your practice or organisation. There is no requirement for a specific academic qualification. What matters is the quality of your thinking and the seriousness of your commitment.",
      },
      {
        q: "What disciplines are eligible?",
        a: "Visual arts, music, theatre, dance, craft, film and moving image, writing and literature, curatorial practice, cultural management and producing, and cross-disciplinary practice. If your work sits at the boundary of these, apply anyway and tell us why.",
      },
      {
        q: "Which countries are eligible?",
        a: "For the inaugural cohort, practitioners based in South Asia — India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan, and the Maldives.",
      },
      {
        q: "Do I need to be employed by an organisation?",
        a: "No. Independent practitioners and freelancers are fully eligible and actively encouraged to apply.",
      },
      {
        q: "Is there an age limit?",
        a: "No. Eligibility is based on career stage, not age.",
      },
    ],
  },
  {
    title: "The Research Inquiry",
    items: [
      {
        q: "What is The Question?",
        a: "The live inquiry at the centre of your practice — something you are genuinely circling, that does not yet have clear language. It is the most important part of your application. It does not need to be resolved or fully formed. We are looking for its authenticity and aliveness.",
      },
      {
        q: "What is the jury looking for?",
        a: "Five things: the quality and maturity of your practice; your capacity for reflection and honest self-assessment; the authenticity of your Question; whether this is the right nine months for you; and what you will bring to the cohort.",
      },
    ],
  },
  {
    title: "Programme Structure",
    items: [
      {
        q: "How much time does it require?",
        a: "A maximum of six hours per week of structured engagement, plus two compulsory in-person moments: the opening residential (six days, June 2026) and the Serendipity Arts Festival (three days, December 2026). The programme is designed for people who cannot step away from their work.",
      },
      {
        q: "What does the programme cover?",
        a: "Three phases across nine months. Phase I (June–July): self and context. Phase II (August–October): the ecosystem and structures. Phase III (November–March): leadership and futures. Running through all phases: governance, financial stewardship, reputation management, crisis response, diplomacy, and team leadership.",
      },
      {
        q: "What is the mentor relationship?",
        a: "Every Fellow is matched with a senior mentor from the cultural sector. Matching happens at the end of the residential. One-to-one sessions are monthly and self-scheduled. The relationship is confidential.",
      },
      {
        q: "What do Fellows produce?",
        a: "A leadership proposal — a developed piece of thinking about the work you want to do, the question that has shaped your nine months, and how you intend to act on it. It is a working document: honest, specific, and yours.",
      },
    ],
  },
  {
    title: "Fees & Bursaries",
    items: [
      {
        q: "What does the Fellowship cost?",
        a: "The Fellowship fee is ₹5,00,000. This covers the full nine-month programme, both in-person residential moments, accommodation, all online sessions, mentor one-to-ones, and programme materials. It does not cover travel.",
      },
      {
        q: "I cannot afford the fee. Can I still apply?",
        a: "Yes. Applying for a bursary has no bearing on your assessment — the jury never sees bursary requests. Ten bursaries are available, ranging from 25% to full fee coverage. Full bursary recipients also receive a travel supplement.",
      },
      {
        q: "When is the fee due?",
        a: "The fee is due on confirmation of your place before the programme start date of 20 June 2026.",
      },
    ],
  },
  {
    title: "Commitment & Practical",
    items: [
      {
        q: "Do I need to come to Goa?",
        a: "Yes, for two moments. The opening residential (20–25 June 2026) and the Serendipity Arts Festival (December 2026). Accommodation is covered. Travel is the Fellow's responsibility unless covered by bursary.",
      },
      {
        q: "Can I apply if English is not my first language?",
        a: "Yes. The programme is conducted in English, but we are not selecting for literary fluency. Write clearly and honestly.",
      },
      {
        q: "Will there be an interview?",
        a: "Shortlisted candidates may be invited for a conversation with the selection panel — a chance for us to understand your thinking more fully.",
      },
      {
        q: "I have more questions.",
        a: "Write to us at tbf@serendipityarts.org — we will respond within five working days.",
      },
    ],
  },
];

const institutionFaq = [
  {
    title: "Why Nominate a Fellow",
    items: [
      {
        q: "What does a nominated Fellow bring back to the institution?",
        a: "A Fellow returns as a sharper, better-connected cultural leader — with developed frameworks for governance, financial stewardship, strategic communication, and team leadership. The institution gains a practitioner who has spent nine months thinking deeply about leadership alongside peers from across South Asia.",
      },
      {
        q: "Why should our institution invest in this?",
        a: "The Fellowship provides leadership development that the cultural sector lacks. By nominating a practitioner, your institution invests directly in the capacity of your team — and in the wider ecosystem of cultural leadership across South Asia.",
      },
    ],
  },
  {
    title: "What Institutions Pay",
    items: [
      {
        q: "What does the institution cover?",
        a: "The Fellowship fee of ₹5,00,000 (invoiced on confirmation), the Fellow's travel to both in-person moments in Goa (June and December 2026). Accommodation during both moments is provided by the programme.",
      },
      {
        q: "What if our nominee is not selected?",
        a: "The institution is not charged. The fee is invoiced only on confirmation of the Fellow's place.",
      },
      {
        q: "What if the Fellow needs to withdraw?",
        a: "Fellows who withdraw more than eight weeks before the programme start date will not be charged. Within eight weeks, the institution may be liable for costs already committed. Full terms are set out in the Nominating Partner Agreement.",
      },
    ],
  },
  {
    title: "Partnership Pathways",
    items: [
      {
        q: "Who can nominate?",
        a: "Any cultural institution, organisation, foundation, or cross-sector body that has entered into a Nominating Partner Agreement with the Fellowship. Contact us to begin the process.",
      },
      {
        q: "Can we nominate more than one person?",
        a: "You may submit more than one nomination, but for the inaugural cohort a maximum of one per institution will be accepted into the cohort.",
      },
    ],
  },
  {
    title: "The Nomination Process",
    items: [
      {
        q: "What is the institution responsible for?",
        a: "Paying the Fellowship fee on invoice, covering the Fellow's travel to both in-person moments, and releasing the Fellow for up to six hours per week of structured engagement. The institution does not direct the Fellow's learning.",
      },
      {
        q: "Does nomination guarantee selection?",
        a: "No. Nomination opens the door — it does not guarantee a place. All nominees are assessed by the jury on the same criteria as every other applicant.",
      },
      {
        q: "How do we begin?",
        a: "Contact us at tbf@serendipityarts.org to discuss the Nominating Partner Agreement and begin the process.",
      },
    ],
  },
];

const FaqSection = ({
  categories,
  startDelay = 0,
}: {
  categories: typeof individualFaq;
  startDelay?: number;
}) => (
  <div className="space-y-14">
    {categories.map((cat, ci) => (
      <motion.div
        key={cat.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: startDelay + ci * 0.06 }}
      >
        <h3 className="font-bold text-lg mb-5 pb-3 border-b border-border">
          {cat.title}
        </h3>
        <Accordion type="single" collapsible className="space-y-0">
          {cat.items.map((item, ii) => (
            <AccordionItem
              key={ii}
              value={`${ci}-${ii}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="text-left text-sm font-medium py-4 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    ))}
  </div>
);

const Faq = () => {
 const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

    const onSubmit = async (data: ContactFormData) => {
    console.log("Form data", data);
    try {
      await submitContactForm(data);
      alert("Form submitted successfully!");
      reset();
    } catch (error: any) {
      alert(error.message || "Failed to submit");
    }
  };

    const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        const yOffset = -180; // space from top (adjust if needed)
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
}, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="label-text mb-4">Questions & Answers</p>
            <h1 className="editorial-subheading mb-6">
              Frequently Asked Questions
            </h1>
          </motion.div>

          {/* Individual Applicants FAQ */}
          <div className="mb-20 md:mb-28">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-10"
            >
              <h2 className="editorial-subheading text-xl md:text-2xl pb-4 border-b-2 border-foreground">
                FAQ — Individual Applicants
              </h2>
            </motion.div>
            <FaqSection categories={individualFaq} startDelay={0.15} />
          </div>

          {/* Institutions FAQ */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="editorial-subheading text-xl md:text-2xl pb-4 border-b-2 border-foreground">
                FAQ — Institutions & Nominating Partners
              </h2>
            </motion.div>
            <FaqSection categories={institutionFaq} startDelay={0} />
          </div>
        </div>


              <motion.div
          id="contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full bg-[#f5f5f5] py-12 md:py-16 border-t border-border"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
            <h2 className="text-lg md:text-xl font-bold mb-6">Get in Touch</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Inputs */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Name */}
                <div className="w-full">
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#f5a442]"
                    placeholder="Enter name..."
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 text-left">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="w-full">
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#f5a442]"
                    placeholder="Enter email..."
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 text-left">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* contact */}
                <div className="w-full">
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    {...register("contact")}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#f5a442]"
                    placeholder="Enter contact number..."
                  />
                  {errors.contact && (
                    <p className="text-red-500 text-xs mt-1 text-left">
                      {errors.contact.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto mt-4 bg-foreground text-background px-8 py-3 text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Contact Us"}
              </button>
            </form>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
