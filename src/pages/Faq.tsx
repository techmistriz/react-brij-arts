import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm, ContactFormData } from "@/lib/api/contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Enter a valid email"),
  contact: z.string().min(10, "Enter a valid phone number"),
});

const categories = [
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
      {
        q: "Why is it called the Brij Cultural Leaders Fellowship?",
        a: "The Brij is a 1.4 million square foot centre for arts and culture under development in Delhi — the permanent home of this Fellowship. It represents the conviction that South Asia needs cultural infrastructure built for the long term, by people who understand what they are building.",
      },
    ],
  },
  {
    title: "Eligibility",
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
        a: "For the inaugural cohort, practitioners based in South Asia — India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan, and the Maldives. We hope to expand geographically in future cohorts.",
      },
      {
        q: "Do I need to be employed by an organisation?",
        a: "No. Independent practitioners and freelancers are fully eligible and actively encouraged to apply. The bursary structure has been built with independent practitioners in mind.",
      },
      {
        q: "Is there an age limit?",
        a: "No. Eligibility is based on career stage, not age.",
      },
      {
        q: "Can I apply if I am based outside South Asia?",
        a: "For the inaugural cohort, applicants must be resident in South Asia at the time of application. We will review this for future cohorts.",
      },
    ],
  },
  {
    title: "The Application",
    items: [
      {
        q: "How do I apply?",
        a: "There are two tracks — Individual (Track 1) and Institutional Nomination (Track 2). Each has its own application form. All tracks go through the same selection process and are assessed by the same jury on the same criteria.",
      },
      {
        q: "What is the difference between the tracks?",
        a: "Track 1 is for practitioners applying independently with bursaries available. Track 2 is for practitioners nominated and funded by a Nominating Partner institution. Both tracks receive the same programme experience.",
      },
      {
        q: "If I am nominated, does that mean I am selected?",
        a: "No. Nomination opens the door — it does not guarantee a place. All nominees are assessed by the jury on the same criteria as every other applicant.",
      },
      {
        q: "What is The Question?",
        a: "The live inquiry at the centre of your practice — something you are genuinely circling, that does not yet have clear language. It is the most important part of your application. It does not need to be resolved or fully formed. We are looking for its authenticity and aliveness.",
      },
      {
        q: "What is the jury looking for?",
        a: "Five things: the quality and maturity of your practice; your capacity for reflection and honest self-assessment; the authenticity of your Question; whether this is the right nine months for you; and what you will bring to the cohort.",
      },
      {
        q: "Can I apply if English is not my first language?",
        a: "Yes. The programme is conducted in English, but we are not selecting for literary fluency. Write clearly and honestly. A translator may help prepare your application, but the thinking must be your own.",
      },
      {
        q: "Will there be an interview?",
        a: "Shortlisted candidates may be invited for a conversation with the selection panel — a chance for us to understand your thinking more fully, and for you to ask questions about the programme.",
      },
    ],
  },
  {
    title: "Fees, Bursaries & Scholarships",
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
        q: "My institution is paying. What does that cover?",
        a: "Track 2 institutions pay the ₹5,00,000 fee and cover the Fellow's travel to both in-person moments. Accommodation is provided by the programme.",
      },
      {
        q: "When is the fee due?",
        a: "For Track 1, the fee is due on confirmation of your place before the programme start date of 20 June 2026. For Track 2, the institution is invoiced on confirmation.",
      },
    ],
  },
  {
    title: "The Programme",
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
    title: "For Nominating Institutions",
    items: [
      {
        q: "Who can nominate?",
        a: "Any cultural institution, organisation, foundation, or cross-sector body that has entered into a Nominating Partner Agreement with the Fellowship. Contact us to begin the process.",
      },
      {
        q: "Can we nominate more than one person?",
        a: "You may submit more than one nomination, but for the inaugural cohort a maximum of one per institution will be accepted into the cohort.",
      },
      {
        q: "What is the institution responsible for?",
        a: "Paying the Fellowship fee of ₹5,00,000 on invoice, covering the Fellow's travel to both in-person moments, and releasing the Fellow for up to six hours per week. The institution does not direct the Fellow's learning.",
      },
      {
        q: "What if our nominee is not selected?",
        a: "The institution is not charged. The fee is invoiced only on confirmation.",
      },
    ],
  },
  {
    title: "Practical Questions",
    items: [
      {
        q: "Do I need to come to Goa?",
        a: "Yes, for two moments. The opening residential (20–25 June 2026) and the Serendipity Arts Festival (December 2026). Accommodation is covered by the programme. Travel is the Fellow's responsibility unless covered by track or bursary.",
      },
      {
        q: "Can I defer to a future cohort?",
        a: "Deferral requests are considered case by case. We cannot guarantee a place in a future cohort. Apply when the timing is genuinely right.",
      },
      {
        q: "Will the Fellowship run again?",
        a: "Yes. The Brij Cultural Leaders Fellowship is intended as an ongoing programme. The inaugural cohort is the beginning.",
      },
      {
        q: "I have more questions.",
        a: "Write to us at tbf@serendipityarts.org — we will respond within five working days.",
      },
    ],
  },
];

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
            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
              Everything you need to know about the Brij Cultural Leaders
              Fellowship — eligibility, application process, fees, and programme
              structure.
            </p>
          </motion.div>

          <div className="space-y-14">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
              >
                <h2 className="font-bold text-lg mb-5 pb-3 border-b border-border">
                  {cat.title}
                </h2>
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

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Still have questions?
            </p>
            <a
              href="mailto:tbf@serendipityarts.org"
              className="inline-block bg-foreground text-background px-8 py-3 text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </motion.div> */}
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
