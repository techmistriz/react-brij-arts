import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { WordCountTextarea, countWords } from "@/components/WordCountTextarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { useDropdowns } from "@/hooks/useDropdowns";
import { getNominee, NomineeData } from "@/lib/api/nominee";
import { submitApplication2 } from "@/lib/api/register";

/* ─── Stage 1 schema ─── */
const stage1Schema = z.object({
  user_type: z.string(),
  first_name: z.string().min(1, "Required"),
  last_name: z.string().min(1, "Required"),
  pronouns: z.string().optional(),
  country_id: z.string().min(1, "Required"),
  city: z.string().min(1, "Required"),
  role_title: z.string().min(1, "Required"),
  organisation: z.string().min(1, "Required"),
  discipline_id: z.string().optional(),
  years_working_in_cultural_sector: z.string().min(1, "Required"),
  email: z.string().email("Please enter a valid email"),
  contact: z.string().min(5, "Required"),
  mailing_address: z.string().min(1, "Required"),
  is_attend_residential_in_goa: z
    .boolean()
    .refine((v) => v, "You must confirm availability"),
  is_attend_saf_in_goa: z
    .boolean()
    .refine((v) => v, "You must confirm availability"),
  practice_cultural_context: z
    .string()
    .min(1, "Required")
    .refine((v) => countWords(v) <= 150, "Maximum 150 words"),
  current_practice_question: z
    .string()
    .min(1, "Required")
    .refine((v) => countWords(v) <= 200, "Maximum 200 words"),
});

/* ─── Stage 2 schema ─── */
const stage2Schema = z.object({
  recent_work_turning_point: z
    .string()
    .min(1, "Required")
    .refine((v) => countWords(v) <= 200, "Maximum 200 words"),
  fellowship_expectations: z
    .string()
    .min(1, "Required")
    .refine((v) => countWords(v) <= 150, "Maximum 150 words"),
  practice_documentation: z.string().min(1, "Please provide a link or upload"),
  documentation_summary: z
    .string()
    .min(1, "Required")
    .refine((v) => countWords(v) <= 25, "Maximum 25 words"),
  agreed_fellowship_commitment: z
    .boolean()
    .refine((v) => v, "You must confirm"),
});

type Stage1Data = z.infer<typeof stage1Schema>;
type Stage2Data = z.infer<typeof stage2Schema>;

const pronounOptions = ["He/Him", "She/Her", "They/Them", "Prefer not to say"];
const disciplines = [
  "Visual Arts",
  "Performing Arts",
  "Music",
  "Craft",
  "Film & Moving Image",
  "Writing & Literature",
  "Curatorial Practice",
  "Cultural Management & Producing",
  "Cross-disciplinary",
  "Other",
];
const yearsOptions = ["5–8 years", "8–12 years", "12+ years"];

const ApplyTrack3 = () => {
  const navigate = useNavigate();
  const [stage, setStage] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [savedId, setSavedId] = useState<string | null>(null);
  const [savedAppId, setSavedAppId] = useState<string | null>(null);
  const [stage1Data, setStage1Data] = useState<Stage1Data | null>(null);

  const { countries } = useDropdowns();

  const toBinary = (v: boolean) => (v ? 1 : 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nomineeId = searchParams.get("id");

  const s1 = useForm<Stage1Data>({
    resolver: zodResolver(stage1Schema),
    defaultValues: {
      user_type: "institutional",
      first_name: "",
      last_name: "",
      pronouns: "",
      country_id: "",
      city: "",
      role_title: "",
      organisation: "",
      discipline_id: "",
      years_working_in_cultural_sector: "",
      email: "",
      contact: "",
      mailing_address: "",
      is_attend_residential_in_goa: false,
      is_attend_saf_in_goa: false,
      practice_cultural_context: "",
      current_practice_question: "",
    },
  });

  const s2 = useForm<Stage2Data>({
    resolver: zodResolver(stage2Schema),
    defaultValues: {
      recent_work_turning_point: "",
      fellowship_expectations: "",
      practice_documentation: "",
      documentation_summary: "",
      agreed_fellowship_commitment: false,
    },
  });

  useEffect(() => {
    if (!nomineeId) return;

    const fetchNomineeData = async () => {
      try {
      const nominee = await getNominee(nomineeId);
        console.log("Full API response:", nominee);

        s1.reset({
          ...s1.getValues(),
          first_name: nominee.first_name || "",
          last_name: nominee.last_name || "",
          email: nominee.email || "",
          role_title: nominee.role_title || "",
        });
      } catch (err) {
        console.error("Failed to fetch nominee data", err);
      }
    };

    fetchNomineeData();
  }, [nomineeId, s1]);

  /* Save Stage 1 → draft row */
  const onStage1Submit = async (data: Stage1Data) => {
    setStage1Data(data); // store data
    setStage(2);
    window.scrollTo(0, 0);

    toast({ title: "Continue to Stage 2" });
  };

  /* Submit Stage 2 */
 const onStage2Submit = async (data: Stage2Data) => {
  if (!stage1Data || !nomineeId) {
    toast({
      title: "Invalid nominee data",
      variant: "destructive",
    });
    return;
  }

  setIsSubmitting(true);

  try {
    const payload = {
      // Stage 1
      user_type: stage1Data.user_type,
      first_name: stage1Data.first_name,
      last_name: stage1Data.last_name,
      pronouns: stage1Data.pronouns,
      country_id: stage1Data.country_id,
      city: stage1Data.city,
      role_title: stage1Data.role_title,
      organisation: stage1Data.organisation,
      discipline_id: stage1Data.discipline_id,
      years_working_in_cultural_sector:
        stage1Data.years_working_in_cultural_sector,
      email: stage1Data.email,
      contact: stage1Data.contact,
      mailing_address: stage1Data.mailing_address,

     is_attend_residential_in_goa: toBinary(
    stage1Data.is_attend_residential_in_goa
  ),
  is_attend_saf_in_goa: toBinary(
    stage1Data.is_attend_saf_in_goa
  ),

      practice_cultural_context:
        stage1Data.practice_cultural_context,
      current_practice_question:
        stage1Data.current_practice_question,

      // Stage 2
      recent_work_turning_point:
        data.recent_work_turning_point,
      fellowship_expectations:
        data.fellowship_expectations,
      practice_documentation:
        data.practice_documentation,
      documentation_summary:
        data.documentation_summary,
      agreed_fellowship_commitment: toBinary(
    data.agreed_fellowship_commitment
  ),
    };

    console.log("FINAL PAYLOAD:", payload);

    await submitApplication2(nomineeId, payload); // ✅ FIXED

    toast({ title: "Application submitted successfully" });
    navigate("/submission-confirmation");

  } catch (err: any) {
    console.error(err);
    toast({
      title: "Submission failed",
      description: err.message,
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const fieldError = (form: any, name: string) =>
    form.formState.errors[name] ? (
      <p className="text-destructive text-xs mt-1">
        {form.formState.errors[name]?.message as string}
      </p>
    ) : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            {/* ─── Left Column ─── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28 lg:self-start space-y-8"
            >
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={14} /> All Tracks
              </Link>

              <div>
                <p className="label-text mb-3 text-primary">Track 3</p>
                <h1 className="editorial-subheading mb-4">
                  Nominated Application
                </h1>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You have been nominated by your institution to apply for the
                  Brij Cultural Leaders Fellowship. Complete this form
                  independently — your institution does not see your answers
                  before submission. Being nominated is not the same as being
                  selected; your application is assessed by the jury on the same
                  criteria as all other applicants.
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <li>• Six-day residential, Goa — 20–25 June 2026</li>
                  <li>• Serendipity Arts Festival, Goa — December 2026</li>
                </ul>
              </div>

              {/* Stage indicator */}
              <div className="flex gap-3">
                <div
                  className={`flex-1 h-1.5 rounded ${stage >= 1 ? "bg-primary" : "bg-muted"}`}
                />
                <div
                  className={`flex-1 h-1.5 rounded ${stage >= 2 ? "bg-primary" : "bg-muted"}`}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Stage {stage} of 2
              </p>

              <div className="border border-border p-5">
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
                  Time Commitment
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Fellowship requires a maximum of 6 hours per week of
                  structured engagement across nine months, plus two compulsory
                  in-person moments in Goa.
                </p>
              </div>

              <div className="border border-border p-5">
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
                  Important Note
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Track 3 Fellows are not eligible for bursaries. Your
                  institution has covered the Fellowship fee in full. Your
                  institution's separate form must also be received before your
                  application is considered complete.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Note:</strong> Selection is at the discretion of the
                  review committee. Submitting an application does not guarantee
                  a place.
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  Questions?{" "}
                  <a
                    href="mailto:tbf@serendipityarts.org"
                    className="underline hover:text-foreground transition-colors"
                  >
                    tbf@serendipityarts.org
                  </a>
                </p>
              </div>
            </motion.div>

            {/* ─── Right Column — Forms ─── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {stage === 1 ? (
                /* ════════ STAGE 1 ════════ */
                <form
                  onSubmit={s1.handleSubmit(onStage1Submit)}
                  className="space-y-12"
                >
                  {/* Section A — About You */}
                  <div>
                    <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                      Section A — About You
                    </h2>
                    <div className="space-y-5">
                      <input
                        type="hidden"
                        {...s1.register("user_type")}
                        value="individual"
                      />
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <Label>First Name *</Label>
                          <Input
                            {...s1.register("first_name")}
                            className="mt-1.5"
                          />
                          {fieldError(s1, "first_name")}
                        </div>
                        <div>
                          <Label>Last Name *</Label>
                          <Input
                            {...s1.register("last_name")}
                            className="mt-1.5"
                          />
                          {fieldError(s1, "last_name")}
                        </div>
                      </div>
                      <div>
                        <Label>Pronouns (optional)</Label>
                        <Select
                          onValueChange={(v) => s1.setValue("pronouns", v)}
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select pronouns" />
                          </SelectTrigger>
                          <SelectContent>
                            {pronounOptions.map((p) => (
                              <SelectItem key={p} value={p}>
                                {p}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                       <div>
                        <Label>Country of Residence *</Label>
                        <Select
                          onValueChange={(v) => s1.setValue("country_id", v)}
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country.id} value={String(country.id)}>
                                {country.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {fieldError(s1, "country_id")}
                      </div>
                      
                      <div>
                        <Label>City / Town *</Label>
                        <Input {...s1.register("city")} className="mt-1.5" />
                        {fieldError(s1, "city")}
                      </div>
                      <div>
                        <Label>Current Role or Title *</Label>
                        <Input
                          {...s1.register("role_title")}
                          className="mt-1.5"
                        />
                        {fieldError(s1, "role_title")}
                      </div>
                      <div>
                        <Label>Organisation or Institution *</Label>
                        <Input
                          {...s1.register("organisation")}
                          className="mt-1.5"
                        />
                        {fieldError(s1, "organisation")}
                      </div>
                      <div>
                        <Label>Primary Discipline</Label>
                        <Select
                          onValueChange={(v) => s1.setValue("discipline_id", v)}
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select discipline" />
                          </SelectTrigger>
                          <SelectContent>
                            {disciplines.map((d) => (
                              <SelectItem key={d} value={d}>
                                {d}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Years Working in the Cultural Sector *</Label>
                        <Select
                          onValueChange={(v) =>
                            s1.setValue("years_working_in_cultural_sector", v)
                          }
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            {yearsOptions.map((y) => (
                              <SelectItem key={y} value={y}>
                                {y}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {fieldError(s1, "years_working_in_cultural_sector")}
                      </div>
                      <div>
                        <Label>Email Address *</Label>
                        <p className="text-xs text-muted-foreground mt-0.5 mb-1">
                          Correspondence will go to the personal email provided.
                        </p>
                        <Input
                          type="email"
                          {...s1.register("email")}
                          className="mt-1.5"
                        />
                        {fieldError(s1, "email")}
                      </div>
                      <div>
                        <Label>Phone Number *</Label>
                        <Input
                          type="tel"
                          {...s1.register("contact")}
                          className="mt-1.5"
                          placeholder="+91"
                        />
                        {fieldError(s1, "contact")}
                      </div>
                      <div>
                        <Label>Mailing Address for Certificate *</Label>
                        <WordCountTextarea
                          {...s1.register("mailing_address")}
                          rows={3}
                          placeholder="Full address including city and post code"
                          maxWords={100}
                          className="mt-1.5"
                        />
                        {fieldError(s1, "mailing_address")}
                      </div>
                    </div>
                  </div>

                  {/* Section B — Availability */}
                  <div>
                    <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                      Section B — Availability Confirmation
                    </h2>
                    <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                      Both confirmations are mandatory. If you cannot confirm
                      both, you cannot proceed.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="residential"
                          checked={s1.watch("is_attend_residential_in_goa")}
                          onCheckedChange={(v) =>
                            s1.setValue("is_attend_residential_in_goa", !!v, {
                              shouldValidate: true,
                            })
                          }
                          className="mt-0.5"
                        />
                        <label
                          htmlFor="residential"
                          className="text-sm cursor-pointer"
                        >
                          I can attend the in-person residential in Goa, 20–25
                          June 2026 *
                        </label>
                      </div>
                      {fieldError(s1, "is_attend_residential_in_goa")}
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="festival"
                          checked={s1.watch("is_attend_saf_in_goa")}
                          onCheckedChange={(v) =>
                            s1.setValue("is_attend_saf_in_goa", !!v, {
                              shouldValidate: true,
                            })
                          }
                          className="mt-0.5"
                        />
                        <label
                          htmlFor="festival"
                          className="text-sm cursor-pointer"
                        >
                          I can attend the Serendipity Arts Festival, Goa,
                          December 2026 *
                        </label>
                      </div>
                      {fieldError(s1, "is_attend_saf_in_goa")}
                    </div>
                  </div>

                  {/* Section C — Your Practice */}
                  <div>
                    <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                      Section C — Your Practice
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <Label>
                          Describe your practice and the cultural context you
                          work in. *
                        </Label>
                        <WordCountTextarea
                          {...s1.register("practice_cultural_context")}
                          rows={6}
                          placeholder="Describe your practice..."
                          maxWords={150}
                          className="mt-1.5"
                        />
                        {fieldError(s1, "practice_cultural_context")}
                      </div>
                      <div>
                        <Label>
                          What question is your practice currently circling —
                          something you don't yet have clear language for? *
                        </Label>
                        <WordCountTextarea
                          {...s1.register("current_practice_question")}
                          rows={6}
                          placeholder="Write your question here..."
                          maxWords={200}
                          className="mt-1.5"
                        />
                        {fieldError(s1, "current_practice_question")}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {isSubmitting ? "Saving…" : "Save & Continue to Stage 2"}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              ) : (
                /* ════════ STAGE 2 ════════ */
                <form
                  onSubmit={s2.handleSubmit(onStage2Submit)}
                  className="space-y-12"
                >
                  {/* Section D — Your Thinking */}
                  <div>
                    <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                      Section D — Your Thinking
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <Label>
                          Describe a decision or turning point in your work in
                          the last three years that changed how you think. *
                        </Label>
                        <WordCountTextarea
                          {...s2.register("recent_work_turning_point")}
                          rows={6}
                          maxWords={200}
                          className="mt-1.5"
                        />
                        {fieldError(s2, "recent_work_turning_point")}
                      </div>
                      <div>
                        <Label>
                          What makes this a pivotal nine months for you? What do
                          you hope the Fellowship will make possible? *
                        </Label>
                        <WordCountTextarea
                          {...s2.register("fellowship_expectations")}
                          rows={6}
                          maxWords={150}
                          className="mt-1.5"
                        />
                        {fieldError(s2, "fellowship_expectations")}
                      </div>
                    </div>
                  </div>

                  {/* Section E — Work Sample */}
                  <div>
                    <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                      Section E — Work Sample
                    </h2>
                    <div className="space-y-5">
                      <div>
                        {/* <Label>
                          Share one piece of documentation of your practice. This can be a link, a PDF,
                          an image set, a recording, or a written piece — whatever best represents the
                          quality of your thinking or making. *
                        </Label> */}
                        <Label>
                          Share one piece of documentation of your practice.
                          This can be a google drive link or url. *
                        </Label>
                        <Input
                          {...s2.register("practice_documentation")}
                          placeholder="Google Drive link or URL "
                          className="mt-1.5"
                        />
                        {fieldError(s2, "practice_documentation")}
                      </div>
                      <div>
                        <Label>
                          In one sentence, tell us what you've shared and why
                          you chose it. *
                        </Label>
                        <WordCountTextarea
                          {...s2.register("documentation_summary")}
                          rows={2}
                          maxWords={25}
                          className="mt-1.5"
                        />
                        {fieldError(s2, "documentation_summary")}
                      </div>
                    </div>
                  </div>

                  {/* Section F — Time Commitment */}
                  <div>
                    <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                      Section F — Time Commitment
                    </h2>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="timeCommit"
                        checked={s2.watch("agreed_fellowship_commitment")}
                        onCheckedChange={(v) =>
                          s2.setValue("agreed_fellowship_commitment", !!v, {
                            shouldValidate: true,
                          })
                        }
                        className="mt-0.5"
                      />
                      <label
                        htmlFor="timeCommit"
                        className="text-sm cursor-pointer leading-relaxed"
                      >
                        The Fellowship requires a maximum of 6 hours per week of
                        structured engagement across nine months, and two
                        compulsory in-person moments in Goa. I have read and
                        understood this commitment. *
                      </label>
                    </div>
                    {fieldError(s2, "agreed_fellowship_commitment")}
                  </div>

                  {/* Disclaimers */}
                  <div className="bg-muted/50 border border-border p-5 text-xs text-muted-foreground space-y-2">
                    <p className="font-semibold text-foreground text-sm mb-3">
                      Disclaimers
                    </p>
                    <p>
                      1. If you are selected, you will be asked to submit your
                      government-issued ID for hotel bookings and flights.
                    </p>
                    <p>
                      2. You will be under a confidentiality clause regarding
                      fellow and jury deliberations.
                    </p>
                    <p>
                      3. Your completion of the Fellowship will depend on
                      attendance and submission of all required materials.
                    </p>
                    <p>
                      4. Track 3 Fellows are not eligible for bursaries. Your
                      institution has covered the Fellowship fee in full.
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setStage(1);
                        window.scrollTo(0, 0);
                      }}
                      className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold tracking-wide hover:bg-muted transition-colors"
                    >
                      <ArrowLeft size={16} /> Back to Stage 1
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting…" : "Submit Application"}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyTrack3;
