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
import { useDropdowns } from "@/hooks/useDropdowns";
import { submitApplication } from "@/lib/api/register";

const countWords = (text: string) =>
  text.trim().split(/\s+/).filter(Boolean).length;

const schema = z.object({
  // Section A — About the Institution
  user_type: z.string(),
  name: z.string().min(1, "Required").max(200),
  institution_type_id: z.string().min(1, "Required"),
  city: z.string().min(1, "Required").max(100),
  country: z.string().min(1, "Required").max(100),
  website_url: z.string().max(255).optional().or(z.literal("")),

  // Section B — Authorised Signatory
  signatory_name: z.string().min(1, "Required").max(200),
  signatory_role: z.string().min(1, "Required").max(200),
  signatory_email: z.string().email("Please enter a valid email").max(255),
  signatory_phone: z.string().min(5, "Required").max(20),

  // Section C — About the Nominee
  first_name: z.string().min(1, "Required").max(200),
  last_name: z.string().min(1, "Required").max(200),
  email: z.string().email("Please enter a valid email"),
  role_title: z.string().min(1, "Required").max(200),
  nomination_reason: z
    .string()
    .min(1, "Required")
    .refine((v) => countWords(v) <= 250, "Maximum 250 words"),
  expected_fellowship_impact: z
    .string()
    .min(1, "Required")
    .refine((v) => countWords(v) <= 150, "Maximum 150 words"),

  // Section D — Release & Availability
  confirm_residential_release_and_travel: z
    .boolean()
    .refine((v) => v, "You must confirm this"),
  confirm_saf_release_and_travel: z
    .boolean()
    .refine((v) => v, "You must confirm this"),
  confirm_fellowship_participation_commitment: z
    .boolean()
    .refine((v) => v, "You must confirm this"),

  // Section E — Financial Commitment
  fee_payment_confirmation: z
    .boolean()
    .refine((v) => v, "You must confirm this"),
  purchase_order_number: z.string().max(100).optional().or(z.literal("")),

  // Section F — Nominating Partner Agreement
  partner_agreement_confirmation: z
    .boolean()
    .refine((v) => v, "You must confirm this"),
  signatory_signature: z.string().min(1, "Required").max(200),
  signature_date: z.string(),
});

type FormData = z.infer<typeof schema>;

// const institutionTypes = [
//   "Cultural Institution",
//   "NGO or Foundation",
//   "Government Body",
//   "Corporate",
//   "Academic Institution",
//   "Other",
// ];

const ApplyInstitution = () => {
 const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { institutionType } = useDropdowns();

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
      user_type: "institutional",
      name: "",
      institution_type_id: "",
      city: "",
      country: "India",
      website_url: "",
      signatory_name: "",
      signatory_role: "",
      signatory_email: "",
      signatory_phone: "",
      first_name: "",
      last_name: "",
      email: "",
      role_title: "",
      nomination_reason: "",
      expected_fellowship_impact: "",
      confirm_residential_release_and_travel: false,
      confirm_saf_release_and_travel: false,
      confirm_fellowship_participation_commitment: false,
      fee_payment_confirmation: false,
      purchase_order_number: "",
      partner_agreement_confirmation: false,
      signatory_signature: "",
      signature_date: "",
    },
  });

  const nomination_reason = watch("nomination_reason");
  const expected_fellowship_impact = watch("expected_fellowship_impact");

 const onSubmit = async (data: FormData) => {
  // console.log("form2", data);
  setIsSubmitting(true);

  try {
    const finalData = {
      ...data,

      confirm_residential_release_and_travel: data.confirm_residential_release_and_travel ? 1 : 0,
      confirm_saf_release_and_travel: data.confirm_saf_release_and_travel ? 1 : 0,
      confirm_fellowship_participation_commitment:
        data.confirm_fellowship_participation_commitment ? 1 : 0,

      fee_payment_confirmation: data.fee_payment_confirmation ? 1 : 0,
      partner_agreement_confirmation: data.partner_agreement_confirmation ? 1 : 0,
    };

    // console.log("FINAL PAYLOAD:", finalData);

    const response = await submitApplication(finalData);

    // console.log("API response:", response);

    toast({ title: "Nomination submitted successfully", className:"font-semibold" });
    navigate("/submission-confirmation");
  } catch (error: any) {
  toast({
    description: error.message, 
    className:"font-semibold"
  });
  } finally {
    setIsSubmitting(false);
  }
};
  const fieldError = (name: keyof FormData) =>
    errors[name] ? (
      <p className="text-destructive text-xs mt-1">
        {errors[name]?.message as string}
      </p>
    ) : null;


    useEffect(() => {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  setValue("signature_date", today);
}, [setValue]);


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
                <ArrowLeft size={14} /> All Routes
              </Link>

              <div>
                <p className="label-text mb-3 text-brij-orange">Route 2</p>
                <h1 className="editorial-subheading mb-4">Nomination by the Institution</h1>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This form is completed by the nominating institution, independently of the
                  nominee. Do not complete this form together with the nominee or share your
                  answers before submission.
                </p>
              </div>

              <div className="border border-border p-5 brij-gradient-grain">
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3 relative z-10 text-white">
                  Important Note
                </h3>
                <p className="text-sm text-white/90 leading-relaxed relative z-10">
                  Route 2 is submitted by the institution. The nominee completes a different
                  form separately. Both must be received before the application is considered
                  complete.
                </p>
              </div>

              <div className="border border-border p-5 brij-gradient-grain">
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3 relative z-10 text-white">
                  What the Institution Covers
                </h3>
                <ul className="space-y-2 text-sm text-white/90 relative z-10">
                  <li>• Fellowship fee: ₹5,00,000 (invoiced on confirmation)</li>
                  <li>• Travel to residential, Goa — June 2026</li>
                  <li>• Travel to Serendipity Arts Festival, Goa — December 2026</li>
                </ul>
                <p className="text-xs text-white/70 mt-4 pt-3 border-t border-white/20 relative z-10">
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
                     <input
                      type="hidden"
                      {...register("user_type")}
                      value="institutional"
                    />
                    <div>
                      <Label>Full name of organisation *</Label>
                      <Input {...register("name")} className="mt-1.5" />
                      {fieldError("name")}
                    </div>
                    <div>
                      <Label>Organisation type *</Label>
                      <Select onValueChange={(v) => setValue("institution_type_id", v)}>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select type" /></SelectTrigger>
                        <SelectContent>
                          {institutionType.map((t) => (
                            <SelectItem key={t.id} value={t.id.toString()}>
                              {t.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldError("institution_type_id")}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <Label>City *</Label>
                        <Input {...register("city")} className="mt-1.5" />
                        {fieldError("city")}
                      </div>
                      <div>
                        <Label>Country *</Label>
                        <Input {...register("country")} className="mt-1.5" />
                        {fieldError("country")}
                      </div>
                    </div>
                    <div>
                      <Label>Website (optional)</Label>
                      <Input {...register("website_url")} placeholder="https://..." className="mt-1.5" />
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
                      <Input {...register("signatory_name")} className="mt-1.5" />
                      {fieldError("signatory_name")}
                    </div>
                    <div>
                      <Label>Role / Title *</Label>
                      <Input {...register("signatory_role")} className="mt-1.5" />
                      {fieldError("signatory_role")}
                    </div>
                    <div>
                      <Label>Email address *</Label>
                      <Input type="email" {...register("signatory_email")} placeholder="Work email" className="mt-1.5" />
                      {fieldError("signatory_email")}
                    </div>
                    <div>
                      <Label>Phone number *</Label>
                      <Input type="tel" {...register("signatory_phone")} placeholder="Include country code" className="mt-1.5" />
                      {fieldError("signatory_phone")}
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
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <Label>First name of nominee *</Label>
                        <Input {...register("first_name")} className="mt-1.5" />
                        {fieldError("first_name")}
                      </div>
                      <div>
                        <Label>Last name of nominee *</Label>
                        <Input {...register("last_name")} className="mt-1.5" />
                        {fieldError("last_name")}
                      </div>
                    </div>
                      <div>
                      <Label>Nominee email *</Label>
                      <Input
                        type="email"
                        {...register("email")}
                        className="mt-1.5"
                      />
                      {fieldError("email")}
                    </div>
                    <div>
                      <Label>Nominee's role within your organisation *</Label>
                      <Input {...register("role_title")} className="mt-1.5" />
                      {fieldError("role_title")}
                    </div>
                    <div>
                      <Label>Why are you nominating this person, and why now? *</Label>
                      <p className="text-xs text-muted-foreground mt-1 mb-1.5">
                        The jury looks for specificity — what do you know that a form cannot show?
                      </p>
                      <WordCountTextarea
                        value={nomination_reason}
                        onChange={(e) => setValue("nomination_reason", e.target.value)}
                        maxWords={250}
                        rows={6}
                      />
                      {fieldError("nomination_reason")}
                    </div>
                    <div>
                      <Label>What do you expect the Fellowship to change — for the nominee, and for your organisation? *</Label>
                      <p className="text-xs text-muted-foreground mt-1 mb-1.5">
                        Honest answers preferred — it is fine if the benefit is primarily to the individual.
                      </p>
                      <WordCountTextarea
                        value={expected_fellowship_impact}
                        onChange={(e) => setValue("expected_fellowship_impact", e.target.value)}
                        maxWords={150}
                        rows={4}
                      />
                      {fieldError("expected_fellowship_impact")}
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
                        id="confirm_residential_release_and_travel"
                        onCheckedChange={(checked) =>
                          setValue(
                            "confirm_residential_release_and_travel",
                            checked === true,
                          )
                        }
                        className="mt-0.5"
                      />
                      <div>
                        <label htmlFor="confirm_residential_release_and_travel" className="text-sm cursor-pointer">
                          We confirm we will release the nominee to attend the in-person residential in
                          Goa, 20–25 June 2026, and will cover their return travel costs. *
                        </label>
                        {fieldError("confirm_residential_release_and_travel")}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                       <Checkbox
                        id="confirm_saf_release_and_travel"
                        onCheckedChange={(checked) =>
                          setValue(
                            "confirm_saf_release_and_travel",
                            checked === true,
                          )
                        }
                        className="mt-0.5"
                      />
                      <div>
                        <label htmlFor="confirm_saf_release_and_travel" className="text-sm cursor-pointer">
                          We confirm we will release the nominee to attend the Serendipity Arts Festival,
                          Goa, December 2026, and will cover their return travel costs. *
                        </label>
                        {fieldError("confirm_saf_release_and_travel")}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="confirm_fellowship_participation_commitment"
                        onCheckedChange={(checked) =>
                          setValue(
                            "confirm_fellowship_participation_commitment",
                            checked === true,
                          )
                        }
                        className="mt-0.5"
                      />
                      <div>
                        <label htmlFor="confirm_fellowship_participation_commitment" className="text-sm cursor-pointer">
                          We confirm we will release the nominee to participate fully in the Fellowship,
                          including a maximum of 6 hours per week of structured online engagement across
                          nine months. *
                        </label>
                        {fieldError("confirm_fellowship_participation_commitment")}
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
                        id="fee_payment_confirmation"
                        onCheckedChange={(checked) =>
                          setValue("fee_payment_confirmation", checked === true)
                        }
                        className="mt-0.5"
                      />
                      <div>
                        <label htmlFor="fee_payment_confirmation" className="text-sm cursor-pointer">
                          We confirm we will pay the Fellowship fee of ₹5,00,000 on invoice, on
                          confirmation of the nominee's place. *
                        </label>
                        {fieldError("fee_payment_confirmation")}
                      </div>
                    </div>
                    <div>
                      <Label>Purchase order number or internal reference, if required for invoicing (optional)</Label>
                      <Input {...register("purchase_order_number")} className="mt-1.5" />
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
                        id="partner_agreement_confirmation"
                        onCheckedChange={(checked) =>
                          setValue(
                            "partner_agreement_confirmation",
                            checked === true,
                          )
                        }
                        className="mt-0.5"
                      />
                      <div>
                        <label htmlFor="partner_agreement_confirmation" className="text-sm cursor-pointer">
                          We confirm we have read and agree to the terms of the Nominating Partner Agreement. *
                        </label>
                        {fieldError("partner_agreement_confirmation")}
                      </div>
                    </div>
                    <div>
                      <Label>Signature of authorised signatory *</Label>
                      <p className="text-xs text-muted-foreground mt-1 mb-1.5">
                        Type your full name as a digital signature.
                      </p>
                      <Input {...register("signatory_signature")} placeholder="Full name" className="mt-1.5" />
                      {fieldError("signatory_signature")}
                    </div>
                    <div>
                      <Label>Date</Label>
                      <Input
                        value={new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                        disabled
                        className="mt-1.5 bg-muted/30"
                      />

                        {/* Hidden input for form submission */}
                      <input
                        type="hidden"
                        {...register("signature_date")}
                        value={new Date().toISOString().split("T")[0]} // YYYY-MM-DD
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
                    className="relative overflow-hidden w-full sm:w-auto bg-foreground text-background px-10 py-4 font-heading font-bold tracking-wide text-sm uppercase transition-colors disabled:opacity-50 group hover:text-white"
                  >
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 brij-gradient-grain"></span>
                    <span className="relative z-10">{isSubmitting ? "Submitting..." : "Submit Nomination"}</span>
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
