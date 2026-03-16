import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { WordCountTextarea } from "@/components/WordCountTextarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const countWords = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

const schema = z.object({
  // Section A — About the Institution
  institutionName: z.string().min(1, "Required").max(200),
  institutionType: z.string().min(1, "Required"),
  institutionCity: z.string().min(1, "Required").max(100),
  institutionCountry: z.string().min(1, "Required").max(100),
  institutionWebsite: z.string().max(255).optional().or(z.literal("")),

  // Section B — Authorised Signatory
  signatoryName: z.string().min(1, "Required").max(200),
  signatoryRole: z.string().min(1, "Required").max(200),
  signatoryEmail: z.string().email("Please enter a valid email").max(255),
  signatoryPhone: z.string().min(5, "Required").max(20),

  // Section C — About the Nominee
  nomineeFullName: z.string().min(1, "Required").max(200),
  nomineeRole: z.string().min(1, "Required").max(200),
  whyNominating: z.string().min(1, "Required").refine(
    (v) => countWords(v) <= 250,
    "Maximum 250 words"
  ),
  expectedChange: z.string().min(1, "Required").refine(
    (v) => countWords(v) <= 150,
    "Maximum 150 words"
  ),

  // Section D — Release & Availability
  residentialConfirm: z.boolean().refine((v) => v, "You must confirm this"),
  festivalConfirm: z.boolean().refine((v) => v, "You must confirm this"),
  timeCommitmentConfirm: z.boolean().refine((v) => v, "You must confirm this"),

  // Section E — Financial Commitment
  feeConfirm: z.boolean().refine((v) => v, "You must confirm this"),
  poNumber: z.string().max(100).optional().or(z.literal("")),

  // Section F — Nominating Partner Agreement
  agreementConfirm: z.boolean().refine((v) => v, "You must confirm this"),
  signatureText: z.string().min(1, "Required").max(200),
});

type FormData = z.infer<typeof schema>;

const institutionTypes = [
  "Cultural Institution",
  "NGO or Foundation",
  "Government Body",
  "Corporate",
  "Academic Institution",
  "Other",
];

const ApplyInstitution = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      institutionName: "", institutionType: "", institutionCity: "", institutionCountry: "India",
      institutionWebsite: "",
      signatoryName: "", signatoryRole: "", signatoryEmail: "", signatoryPhone: "",
      nomineeFullName: "", nomineeRole: "", whyNominating: "", expectedChange: "",
      residentialConfirm: false, festivalConfirm: false, timeCommitmentConfirm: false,
      feeConfirm: false, poNumber: "",
      agreementConfirm: false, signatureText: "",
    },
  });

  const whyNominating = watch("whyNominating");
  const expectedChange = watch("expectedChange");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Split nominee full name into first/last
      const nameParts = data.nomineeFullName.trim().split(/\s+/);
      const nomineeFirstName = nameParts[0];
      const nomineeLastName = nameParts.slice(1).join(" ") || nameParts[0];

      const { data: nomination, error } = await supabase.from("nominations" as any).insert({
        institution_name: data.institutionName,
        institution_type: data.institutionType,
        institution_address: `${data.institutionCity}, ${data.institutionCountry}`,
        institution_city: data.institutionCity,
        institution_country: data.institutionCountry,
        institution_website: data.institutionWebsite || null,
        contact_name: data.signatoryName,
        contact_email: data.signatoryEmail,
        contact_phone: data.signatoryPhone,
        contact_position: data.signatoryRole,
        nominee_first_name: nomineeFirstName,
        nominee_last_name: nomineeLastName,
        nominee_email: data.signatoryEmail, // Institution contact email for now
        nominee_position: data.nomineeRole,
        nominee_years_at_institution: "N/A",
        why_nominating: data.whyNominating,
        expected_change: data.expectedChange,
        participation_confirmed: data.residentialConfirm,
        programme_confirmed: data.festivalConfirm,
        time_commitment_confirmed: data.timeCommitmentConfirm,
        fee_confirmed: data.feeConfirm,
        po_number: data.poNumber || null,
        agreement_confirmed: data.agreementConfirm,
        signatory_name: data.signatureText,
        signatory_date: new Date().toISOString().split("T")[0],
        status: "nomination_submitted",
      } as any).select("nominee_token, nomination_id").single();

      if (error) throw error;

      toast({ title: "Nomination submitted successfully" });
      navigate("/submission-confirmation");
    } catch (error: any) {
      console.error("Submission error:", error);
      toast({
        title: "Submission failed",
        description: error.message || "Please try again.",
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            {/* Left Column */}
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
                <p className="label-text mb-3 text-primary">Track 2</p>
                <h1 className="editorial-subheading mb-4">Nomination by the Institution</h1>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This form is completed by the nominating institution, independently of the
                  nominee. Do not complete this form together with the nominee or share your
                  answers before submission.
                </p>
              </div>

              <div className="border border-border p-5">
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
                  Important
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Track 2 is submitted by the institution. The nominee completes a different
                  form separately. Both must be received before the application is considered
                  complete.
                </p>
              </div>

              <div className="border border-border p-5">
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
                  What the Institution Covers
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fellowship fee: ₹5,00,000 (invoiced on confirmation)</li>
                  <li>• Travel to residential, Goa — June 2026</li>
                  <li>• Travel to Serendipity Arts Festival, Goa — December 2026</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border">
                  If your nominee is not selected, no charge is made.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-xs text-muted-foreground">
                  Questions?{" "}
                  <a href="mailto:tbf@serendipityarts.org" className="underline hover:text-foreground transition-colors">
                    tbf@serendipityarts.org
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
                {/* Section A — About the Institution */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    Section A — About the Institution
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <Label>Full name of organisation *</Label>
                      <Input {...register("institutionName")} className="mt-1.5" />
                      {fieldError("institutionName")}
                    </div>
                    <div>
                      <Label>Organisation type *</Label>
                      <Select onValueChange={(v) => setValue("institutionType", v)}>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select type" /></SelectTrigger>
                        <SelectContent>
                          {institutionTypes.map((t) => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldError("institutionType")}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <Label>City *</Label>
                        <Input {...register("institutionCity")} className="mt-1.5" />
                        {fieldError("institutionCity")}
                      </div>
                      <div>
                        <Label>Country *</Label>
                        <Input {...register("institutionCountry")} className="mt-1.5" />
                        {fieldError("institutionCountry")}
                      </div>
                    </div>
                    <div>
                      <Label>Website (optional)</Label>
                      <Input {...register("institutionWebsite")} placeholder="https://..." className="mt-1.5" />
                    </div>
                  </div>
                </div>

                {/* Section B — Authorised Signatory */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    Section B — Authorised Signatory
                  </h2>
                  <p className="text-xs text-muted-foreground mb-5">
                    This does not have to be the most senior person, just an authorised signatory.
                  </p>
                  <div className="space-y-5">
                    <div>
                      <Label>Full name of signatory *</Label>
                      <Input {...register("signatoryName")} className="mt-1.5" />
                      {fieldError("signatoryName")}
                    </div>
                    <div>
                      <Label>Role / Title *</Label>
                      <Input {...register("signatoryRole")} className="mt-1.5" />
                      {fieldError("signatoryRole")}
                    </div>
                    <div>
                      <Label>Email address *</Label>
                      <Input type="email" {...register("signatoryEmail")} placeholder="Work email" className="mt-1.5" />
                      {fieldError("signatoryEmail")}
                    </div>
                    <div>
                      <Label>Phone number *</Label>
                      <Input type="tel" {...register("signatoryPhone")} placeholder="Include country code" className="mt-1.5" />
                      {fieldError("signatoryPhone")}
                    </div>
                  </div>
                </div>

                {/* Section C — About the Nominee */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    Section C — About the Nominee
                  </h2>
                  <p className="text-xs text-muted-foreground mb-5">
                    The nominee's name should match their Form A submission exactly.
                  </p>
                  <div className="space-y-5">
                    <div>
                      <Label>Full name of nominee *</Label>
                      <Input {...register("nomineeFullName")} className="mt-1.5" />
                      {fieldError("nomineeFullName")}
                    </div>
                    <div>
                      <Label>Nominee's role within your organisation *</Label>
                      <Input {...register("nomineeRole")} className="mt-1.5" />
                      {fieldError("nomineeRole")}
                    </div>
                    <div>
                      <Label>Why are you nominating this person, and why now? *</Label>
                      <p className="text-xs text-muted-foreground mt-1 mb-1.5">
                        The jury looks for specificity — what do you know that a form cannot show?
                      </p>
                      <WordCountTextarea
                        value={whyNominating}
                        onChange={(e) => setValue("whyNominating", e.target.value)}
                        maxWords={250}
                        rows={6}
                      />
                      {fieldError("whyNominating")}
                    </div>
                    <div>
                      <Label>What do you expect the Fellowship to change — for the nominee, and for your organisation? *</Label>
                      <p className="text-xs text-muted-foreground mt-1 mb-1.5">
                        Honest answers preferred — it is fine if the benefit is primarily to the individual.
                      </p>
                      <WordCountTextarea
                        value={expectedChange}
                        onChange={(e) => setValue("expectedChange", e.target.value)}
                        maxWords={150}
                        rows={4}
                      />
                      {fieldError("expectedChange")}
                    </div>
                  </div>
                </div>

                {/* Section D — Release & Availability Confirmation */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    Section D — Release & Availability Confirmation
                  </h2>
                  <p className="text-xs text-muted-foreground mb-5">
                    All three confirmations are mandatory. If you cannot confirm, the nomination cannot proceed.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="residentialConfirm"
                        onCheckedChange={(checked) => setValue("residentialConfirm", checked === true)}
                        className="mt-0.5"
                      />
                      <div>
                        <label htmlFor="residentialConfirm" className="text-sm cursor-pointer">
                          We confirm we will release the nominee to attend the in-person residential in
                          Goa, 20–25 June 2026, and will cover their return travel costs. *
                        </label>
                        {fieldError("residentialConfirm")}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="festivalConfirm"
                        onCheckedChange={(checked) => setValue("festivalConfirm", checked === true)}
                        className="mt-0.5"
                      />
                      <div>
                        <label htmlFor="festivalConfirm" className="text-sm cursor-pointer">
                          We confirm we will release the nominee to attend the Serendipity Arts Festival,
                          Goa, December 2026, and will cover their return travel costs. *
                        </label>
                        {fieldError("festivalConfirm")}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="timeCommitmentConfirm"
                        onCheckedChange={(checked) => setValue("timeCommitmentConfirm", checked === true)}
                        className="mt-0.5"
                      />
                      <div>
                        <label htmlFor="timeCommitmentConfirm" className="text-sm cursor-pointer">
                          We confirm we will release the nominee to participate fully in the Fellowship,
                          including a maximum of 6 hours per week of structured online engagement across
                          nine months. *
                        </label>
                        {fieldError("timeCommitmentConfirm")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section E — Financial Commitment */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    Section E — Financial Commitment
                  </h2>
                  <div className="bg-muted/50 border border-border p-4 mb-5 text-sm text-muted-foreground leading-relaxed">
                    Fellowship fee: ₹5,00,000 — invoiced on confirmation of the Fellow's place,
                    prior to 20 June 2026. If the nominee is not selected, no charge is made.
                    If the Fellow withdraws within 8 weeks of the programme start date, the
                    institution remains liable for the full fee.
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="feeConfirm"
                        onCheckedChange={(checked) => setValue("feeConfirm", checked === true)}
                        className="mt-0.5"
                      />
                      <div>
                        <label htmlFor="feeConfirm" className="text-sm cursor-pointer">
                          We confirm we will pay the Fellowship fee of ₹5,00,000 on invoice, on
                          confirmation of the nominee's place. *
                        </label>
                        {fieldError("feeConfirm")}
                      </div>
                    </div>
                    <div>
                      <Label>Purchase order number or internal reference, if required for invoicing (optional)</Label>
                      <Input {...register("poNumber")} className="mt-1.5" />
                    </div>
                  </div>
                </div>

                {/* Section F — Nominating Partner Agreement */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    Section F — Nominating Partner Agreement
                  </h2>
                  <div className="bg-muted/50 border border-border p-4 mb-5 text-sm text-muted-foreground leading-relaxed">
                    Before this nomination is processed, your organisation will be asked to sign
                    the Nominating Partner Agreement. This covers: fee payment terms, release
                    obligations, withdrawal policy, and the principle that the Fellow's intellectual
                    work within the programme belongs to them, not the institution.
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="agreementConfirm"
                        onCheckedChange={(checked) => setValue("agreementConfirm", checked === true)}
                        className="mt-0.5"
                      />
                      <div>
                        <label htmlFor="agreementConfirm" className="text-sm cursor-pointer">
                          We confirm we have read and agree to the terms of the Nominating Partner Agreement. *
                        </label>
                        {fieldError("agreementConfirm")}
                      </div>
                    </div>
                    <div>
                      <Label>Signature of authorised signatory *</Label>
                      <p className="text-xs text-muted-foreground mt-1 mb-1.5">
                        Type your full name as a digital signature.
                      </p>
                      <Input {...register("signatureText")} placeholder="Full name" className="mt-1.5" />
                      {fieldError("signatureText")}
                    </div>
                    <div>
                      <Label>Date</Label>
                      <Input
                        value={new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                        disabled
                        className="mt-1.5 bg-muted/30"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="border-t border-border pt-8">
                  <p className="text-xs text-muted-foreground mb-6">
                    By submitting this nomination, you are confirming the institution's commitment to fund
                    the Fellowship fee, cover travel to both Goa moments, and release the Fellow to participate
                    fully. The nominee's form must also be received. The application is only considered
                    complete when both forms are in.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-foreground text-background px-10 py-4 font-bold tracking-wide text-sm uppercase hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Nomination"}
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

export default ApplyInstitution;
