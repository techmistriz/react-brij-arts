import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WordCountTextarea, countWords } from "@/components/WordCountTextarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  phone: z.string().min(5, "Required").max(20),
  country: z.string().min(1, "Required"),
  city: z.string().min(1, "Required").max(100),
  professionalCategory: z.string().min(1, "Required"),
  jobTitle: z.string().min(1, "Required").max(200),
  yearsExperience: z.string().min(1, "Required"),
  biography: z.string().min(1, "Required").max(5000).refine(v => countWords(v) <= 150, "Maximum 150 words"),
  collaborationStyle: z.string().min(1, "Required").max(5000).refine(v => countWords(v) <= 150, "Maximum 150 words"),
  culturalLeadership: z.string().min(1, "Required").max(5000).refine(v => countWords(v) <= 150, "Maximum 150 words"),
  researchInquiry: z.string().min(1, "Required").max(5000).refine(v => countWords(v) <= 150, "Maximum 150 words"),
});

type FormData = z.infer<typeof schema>;

const countries = [
  "India", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal", "Bhutan", "Maldives",
];

const professionalCategories = [
  "Artists",
  "Producers",
  "Curators",
  "Writers",
  "Programmers",
  "Cultural Managers",
  "Arts Educators",
  "Cross-sector: Law",
  "Cross-sector: Medicine",
  "Cross-sector: Technology",
  "Cross-sector: Business",
  "Cross-sector: Policy",
  "Cross-sector: Education",
  "Cross-sector: Journalism",
  "Cross-sector: Community Development",
];

const yearsOptions = [
  "3–5 years",
  "5–10 years",
  "10–15 years",
  "15–20 years",
  "20+ years",
];

interface NominationData {
  nomineeFirstName: string;
  nomineeLastName: string;
  nomineeEmail: string;
  institutionName: string;
  contactName: string;
  nominationId: string;
  dbId: string;
}

const ApplyNominee = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [nominationData, setNominationData] = useState<NominationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const token = searchParams.get("token");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!token) {
      setError("Invalid or missing application link. Please contact the programme team.");
      setLoading(false);
      return;
    }

    const fetchNomination = async () => {
      const { data, error: fetchError } = await supabase
        .from('nominations')
        .select('*')
        .eq('nominee_token', token)
        .single();

      if (fetchError || !data) {
        setError("This application link is invalid or has expired. Please contact the programme team.");
        setLoading(false);
        return;
      }

      if (data.status === 'nominee_submitted') {
        setError("This application has already been submitted. If you believe this is an error, please contact the programme team.");
        setLoading(false);
        return;
      }

      setNominationData({
        nomineeFirstName: data.nominee_first_name,
        nomineeLastName: data.nominee_last_name,
        nomineeEmail: data.nominee_email,
        institutionName: data.institution_name,
        contactName: data.contact_name,
        nominationId: data.nomination_id,
        dbId: data.id,
      });
      setLoading(false);
    };

    fetchNomination();
  }, [token]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      phone: "", country: "", city: "",
      professionalCategory: "", jobTitle: "", yearsExperience: "",
      biography: "", collaborationStyle: "", culturalLeadership: "", researchInquiry: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    if (!nominationData) return;
    setIsSubmitting(true);
    try {
      const { error: updateError } = await supabase
        .from('nominations')
        .update({
          nominee_phone: data.phone,
          nominee_country: data.country,
          nominee_city: data.city,
          nominee_professional_category: data.professionalCategory,
          nominee_job_title: data.jobTitle,
          nominee_years_experience: data.yearsExperience,
          nominee_biography: data.biography,
          nominee_collaboration_style: data.collaborationStyle,
          nominee_cultural_leadership: data.culturalLeadership,
          nominee_research_inquiry: data.researchInquiry,
          nominee_submitted_at: new Date().toISOString(),
          status: 'nominee_submitted',
        })
        .eq('id', nominationData.dbId);

      if (updateError) throw updateError;

      toast({ title: "Application submitted successfully" });
      navigate("/submission-confirmation");
    } catch (err: any) {
      console.error("Submission error:", err);
      toast({
        title: "Submission failed",
        description: err.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldError = (name: keyof FormData) =>
    errors[name] ? (
      <p className="text-destructive text-xs mt-1">{errors[name]?.message as string}</p>
    ) : null;

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 flex items-center justify-center">
          <p className="text-muted-foreground">Loading your application...</p>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 flex items-center justify-center">
          <div className="max-w-md text-center px-6">
            <h1 className="text-xl font-bold mb-4">Application Unavailable</h1>
            <p className="text-muted-foreground text-sm mb-6">{error}</p>
            <a
              href="mailto:tbclf@serendipityarts.org"
              className="text-sm underline hover:text-foreground transition-colors"
            >
              Contact tbclf@serendipityarts.org
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            {/* Left Column — Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28 lg:self-start space-y-8"
            >
              <div>
                <p className="label-text mb-3 text-brij-orange">Route 2 — Nominee</p>
                <h1 className="editorial-subheading mb-4">Complete Your Application</h1>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You have been nominated by{" "}
                  <span className="text-foreground font-medium">
                    {nominationData?.institutionName}
                  </span>{" "}
                  for THE BRIJ Cultural Leaders Fellowship.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  Please complete the application below. Your responses are confidential —
                  your nominating institution does not see your answers. All nominees are
                  assessed by the same jury and on the same criteria as individual applicants.
                </p>
              </div>

              <div className="border border-border p-5">
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
                  Pre-filled Information
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Some fields have been pre-filled from your nomination and are locked.
                  If any information is incorrect, please contact{" "}
                  <a href="mailto:tbclf@serendipityarts.org" className="underline hover:text-foreground transition-colors">
                    tbclf@serendipityarts.org
                  </a>.
                </p>
              </div>

              <div className="border border-border p-5">
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
                  Compulsory In-Person Moments
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Six-day residential, Goa — 20–25 June 2026</li>
                  <li>• Serendipity Arts Festival, Goa — December 2026</li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-xs text-muted-foreground">
                  Nomination ID: <span className="font-mono">{nominationData?.nominationId}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Questions?{" "}
                  <a href="mailto:tbclf@serendipityarts.org" className="underline hover:text-foreground transition-colors">
                    tbclf@serendipityarts.org
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Right Column — Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                {/* Prefilled Section */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    1. Nominee Details
                    <span className="text-xs font-normal text-muted-foreground ml-3">(pre-filled, locked)</span>
                  </h2>
                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <Label>First Name</Label>
                        <Input value={nominationData?.nomineeFirstName} className="mt-1.5 bg-muted" readOnly />
                      </div>
                      <div>
                        <Label>Last Name</Label>
                        <Input value={nominationData?.nomineeLastName} className="mt-1.5 bg-muted" readOnly />
                      </div>
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input value={nominationData?.nomineeEmail} className="mt-1.5 bg-muted" readOnly />
                    </div>
                    <div>
                      <Label>Institution</Label>
                      <Input value={nominationData?.institutionName} className="mt-1.5 bg-muted" readOnly />
                    </div>
                    <div>
                      <Label>Institution Contact</Label>
                      <Input value={nominationData?.contactName} className="mt-1.5 bg-muted" readOnly />
                    </div>
                  </div>
                </div>

                {/* Section 2 — Additional Personal Info */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    2. Personal Information
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <Label>Phone Number *</Label>
                      <Input type="tel" {...register("phone")} className="mt-1.5" />
                      {fieldError("phone")}
                    </div>
                    <div>
                      <Label>Country of Residence *</Label>
                      <Select onValueChange={(v) => setValue("country", v)}>
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((c) => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldError("country")}
                    </div>
                    <div>
                      <Label>City *</Label>
                      <Input {...register("city")} className="mt-1.5" />
                      {fieldError("city")}
                    </div>
                  </div>
                </div>

                {/* Section 3 — Professional Background */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    3. Professional Background
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <Label>Professional Category *</Label>
                      <Select onValueChange={(v) => setValue("professionalCategory", v)}>
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {professionalCategories.map((c) => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldError("professionalCategory")}
                    </div>
                    <div>
                      <Label>Current Role / Title *</Label>
                      <Input {...register("jobTitle")} className="mt-1.5" />
                      {fieldError("jobTitle")}
                    </div>
                    <div>
                      <Label>Years of Professional Experience *</Label>
                      <Select onValueChange={(v) => setValue("yearsExperience", v)}>
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          {yearsOptions.map((y) => (
                            <SelectItem key={y} value={y}>{y}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldError("yearsExperience")}
                    </div>
                  </div>
                </div>

                {/* Section 4 — Professional Biography */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    4. Professional Biography
                  </h2>
                  <div>
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                      Written in the third person, summarise your background, professional or
                      educational experience, areas of expertise, and key accomplishments. Please
                      note that this biography may be used in programme publications or external
                      announcements if you are selected as a Fellow.
                    </p>
                    <WordCountTextarea {...register("biography")} rows={6} placeholder="Write your biography here..." maxWords={150} />
                    {fieldError("biography")}
                  </div>
                </div>

                {/* Section 5 — Collaboration Style */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    5. Collaboration and Working Style
                  </h2>
                  <div>
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                      Describe your collaboration style. How do you typically work within a team,
                      and how do you approach disagreement or conflict when it arises in professional
                      contexts?
                    </p>
                    <WordCountTextarea {...register("collaborationStyle")} rows={6} placeholder="Describe your collaboration style..." maxWords={150} />
                    {fieldError("collaborationStyle")}
                  </div>
                </div>

                {/* Section 6 — Cultural Leadership Perspective */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    6. Cultural Leadership Perspective
                  </h2>
                  <div>
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                      Please share your views on cultural leadership more broadly. How do you see
                      yourself contributing to the field, and why does this work matter to you at
                      this moment in your practice?
                    </p>
                    <WordCountTextarea {...register("culturalLeadership")} rows={6} placeholder="Share your perspective..." maxWords={150} />
                    {fieldError("culturalLeadership")}
                  </div>
                </div>

                {/* Section 7 — Research Inquiry */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    7. The Research Inquiry
                  </h2>
                  <div>
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                      What is the live inquiry at the centre of your practice — the question you
                      are genuinely circling, that does not yet have clear language? It does not
                      need to be resolved or fully formed. We are looking for its authenticity and
                      aliveness. This is what the Fellowship calls "The Question" — a foundation
                      for sustained, independent thinking that will shape your work throughout the
                      programme and beyond.
                    </p>
                    <WordCountTextarea {...register("researchInquiry")} rows={6} placeholder="Describe your inquiry..." maxWords={150} />
                    {fieldError("researchInquiry")}
                  </div>
                </div>

                {/* Submit */}
                <div className="border-t border-border pt-8">
                  <p className="text-xs text-muted-foreground mb-6">
                    By submitting this application, you agree to the Fellowship terms. Your
                    responses are confidential and assessed independently of your
                    institution's nomination.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative overflow-hidden w-full sm:w-auto bg-foreground text-background px-10 py-4 font-heading font-bold tracking-wide text-sm uppercase transition-colors disabled:opacity-50 group hover:text-white"
                  >
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain"></span>
                    <span className="relative z-10">{isSubmitting ? "Submitting..." : "Submit Application"}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyNominee;
