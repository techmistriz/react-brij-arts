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
import { Textarea } from "@/components/ui/textarea";
import { submitApplication } from "@/lib/api/applyIndividual";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useDropdowns } from "@/hooks/useDropdowns";

const schema = z.object({
  user_type: z.string(),

  first_name: z.string().min(1, "Required").max(100),
  last_name: z.string().min(1, "Required").max(100),
  email: z.string().email("Please enter a valid email").max(255),
  password: z.string().min(8, "Password must be at least 8 characters"),
  contact: z.string().min(5, "Required").max(20),
  country_id: z.string().min(1, "Required"),
  linkedIn_url: z.string().max(255).optional().or(z.literal("")),
  website_url: z.string().max(255).optional().or(z.literal("")),
  job_title: z.string().min(1, "Required").max(200),
  job_level_id: z.string().min(1, "Required"),
  organisation: z.string().max(200).optional().or(z.literal("")),
  industry_id: z.string().min(1, "Required"),
  // Long-form fields
  professional_biography: z.string().min(1, "Required").max(5000),
  working_style: z.string().min(1, "Required").max(5000),
  cultural_leadership: z.string().min(1, "Required").max(5000),
  // Programme info
  cohort_id: z.string().min(1, "Required"),
  fellowship_source_id: z.string().min(1, "Required"),
  referral_code: z.string().max(50).optional().or(z.literal("")),
  is_apply_bursary: z.boolean().optional(),
  is_confirm_age: z
    .boolean()
    .refine((v) => v, "You must confirm you are over 21"),
  is_goa_available: z
    .boolean()
    .refine((v) => v, "You must confirm availability"),
});

type FormData = z.infer<typeof schema>;

const ApplyIndividual = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { countries, joblevels, industries, cohorts, fellowship } =
    useDropdowns();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      user_type: "individual",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      contact: "",
      job_title: "",
      country_id: "",
      cohort_id: "",
      linkedIn_url: "",
      website_url: "",
      job_level_id: "",
      organisation: "",
      industry_id: "",
      professional_biography: "",
      working_style: "", //
      cultural_leadership: "",
      fellowship_source_id: "", //
      referral_code: "",
      is_apply_bursary: false, //
      is_goa_available: false, //
      is_confirm_age: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      const res = await submitApplication(data);

      //save auth data
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      console.log("Track 1 application:", data);
      navigate("/submission-confirmation");
    } catch (error: any) {
      console.error(error);
      alert(error.message);
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

  // console.log({ ...register("website") });
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
                <p className="label-text mb-3 text-primary">Track 1</p>
                <h1 className="editorial-subheading mb-4">
                  Individual Applicant
                </h1>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Before you begin, please confirm that you are available for
                  both compulsory in-person moments:
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <li>• In-person residential, Goa — 20–25 June 2026</li>
                  <li>• Serendipity Arts Festival, Goa — December 2026</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
                  Stages
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The application is completed in two stages. Stage 1 takes
                  approximately 10–15 minutes. You can save your progress and
                  return later before completing Stage 2.
                </p>
              </div>

              <div className="border border-border p-5">
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
                  Bursaries
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  Ten bursaries available, from 25% to full fee coverage. Full
                  bursary recipients also receive a travel supplement.
                </p>
                <p className="text-xs text-muted-foreground">
                  Applying for a bursary has no bearing on assessment — the jury
                  never sees bursary requests.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Note:</strong> Selection is at the discretion of the
                  review committee. Submitting an application does not guarantee
                  a place.
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
                {/* Section 1 */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    1. Applicant Details
                  </h2>
                  <div className="space-y-5">
                    <input
                      type="hidden"
                      {...register("user_type")}
                      value="individual"
                    />
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <Label>First Name *</Label>
                        <Input {...register("first_name")} className="mt-1.5" />
                        {fieldError("first_name")}
                      </div>
                      <div>
                        <Label>Last Name *</Label>
                        <Input {...register("last_name")} className="mt-1.5" />
                        {fieldError("last_name")}
                      </div>
                    </div>
                    <div>
                      <Label>Email Address *</Label>
                      <Input
                        type="email"
                        {...register("email")}
                        className="mt-1.5"
                      />
                      {fieldError("email")}
                    </div>
                    <div>
                      <Label>Password</Label>
                      <Input
                        type="password"
                        {...register("password")}
                        className="mt-1.5"
                      />
                      {fieldError("password")}
                    </div>
                    <div>
                      <Label>Phone / WhatsApp *</Label>
                      <Input
                        type="tel"
                        {...register("contact")}
                        className="mt-1.5"
                      />
                      {fieldError("contact")}
                    </div>
                    <div>
                      <Label>Country / Region *</Label>
                      <Select onValueChange={(v) => setValue("country_id", v)}>
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((c) => (
                            <SelectItem key={c.id} value={String(c.id)}>
                              {c.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldError("country_id")}
                    </div>
                    <div>
                      <Label>LinkedIn Profile (optional)</Label>
                      <Input
                        {...register("linkedIn_url")}
                        placeholder="https://linkedin.com/in/..."
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label>Website / Portfolio (optional)</Label>
                      <Input
                        {...register("website_url")}
                        placeholder="https://..."
                        className="mt-1.5"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    2. Professional Background
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <Label>Job Title *</Label>
                      <Input {...register("job_title")} className="mt-1.5" />
                      {fieldError("job_title")}
                    </div>
                    <div>
                      <Label>Job Level *</Label>
                      <Select
                        onValueChange={(v) => setValue("job_level_id", v)}
                      >
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          {joblevels.map((level) => (
                            <SelectItem key={level.id} value={String(level.id)}>
                              {level.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldError("job_level_id")}
                    </div>
                    <div>
                      <Label>Organisation (optional)</Label>
                      <Input {...register("organisation")} className="mt-1.5" />
                    </div>
                    <div>
                      <Label>Industry / Sector *</Label>
                      <Select onValueChange={(v) => setValue("industry_id", v)}>
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select Industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((s) => (
                            <SelectItem key={s.id} value={String(s.id)}>
                              {s.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldError("industry_id")}
                    </div>
                  </div>
                </div>

                {/* Section 3 — Long-form responses */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    3. Written Responses
                  </h2>
                  <div className="space-y-7">
                    <div>
                      <Label>Professional Biography *</Label>
                      <p className="text-xs text-muted-foreground mt-1 mb-2 leading-relaxed">
                        Written in the third person, summarise your background,
                        professional or educational experience, areas of
                        expertise, and key accomplishments. This biography may
                        be used in programme publications or external
                        announcements if you are selected as a Fellow.
                      </p>
                      <Textarea
                        {...register("professional_biography")}
                        rows={6}
                        className="mt-1"
                        placeholder="Write your biography here..."
                      />
                      {fieldError("professional_biography")}
                    </div>
                    <div>
                      <Label>Collaboration and Working Style *</Label>
                      <p className="text-xs text-muted-foreground mt-1 mb-2 leading-relaxed">
                        Describe your collaboration style. How do you typically
                        work within a team, and how do you approach disagreement
                        or conflict when it arises in professional contexts?
                      </p>
                      <Textarea
                        {...register("working_style")}
                        rows={6}
                        className="mt-1"
                        placeholder="Describe your collaboration style..."
                      />
                      {fieldError("working_style")}
                    </div>
                    <div>
                      <Label>Cultural Leadership Perspective *</Label>
                      <p className="text-xs text-muted-foreground mt-1 mb-2 leading-relaxed">
                        Share your views on cultural leadership more broadly.
                        How do you see yourself contributing to the field, and
                        why does this work matter to you at this moment in your
                        practice?
                      </p>
                      <Textarea
                        {...register("cultural_leadership")}
                        rows={6}
                        className="mt-1"
                        placeholder="Share your perspective..."
                      />
                      {fieldError("cultural_leadership")}
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    4. Programme Information
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <Label>Preferred Cohort *</Label>
                      <Select onValueChange={(v) => setValue("cohort_id", v)}>
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select cohort" />
                        </SelectTrigger>
                        <SelectContent>
                          {cohorts.map((c) => (
                            <SelectItem key={c.id} value={String(c.id)}>
                              {c.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldError("cohort_id")}
                    </div>
                    <div>
                      <Label>How did you hear about the fellowship? *</Label>
                      <Select
                        onValueChange={(v) =>
                          setValue("fellowship_source_id", v)
                        }
                      >
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          {fellowship.map((o) => (
                            <SelectItem key={o.id} value={String(o.id)}>
                              {o.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldError("fellowship_source_id")}
                    </div>
                    <div>
                      <Label>Referral Code (optional)</Label>
                      <Input
                        {...register("referral_code")}
                        className="mt-1.5"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 5 — Bursary */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    5. Bursary
                  </h2>
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="is_apply_bursary"
                      onCheckedChange={(checked) =>
                        setValue("is_apply_bursary", checked === true)
                      }
                      className="mt-0.5"
                    />
                    <div>
                      <label
                        htmlFor="is_apply_bursary"
                        className="text-sm cursor-pointer"
                      >
                        I would like to apply for a bursary.
                      </label>
                      <p className="text-xs text-muted-foreground mt-1">
                        This has no impact on how your application is assessed.
                        The request for a bursary will be considered separately
                        by the programme team on the basis of the information
                        provided in the supporting attachment. Bursary decisions
                        are made only after the jury has completed its
                        evaluation of applications.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 6 — Eligibility */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    6. Eligibility Confirmation
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="is_goa_available"
                        onCheckedChange={(checked) =>
                          setValue("is_goa_available", checked === true)
                        }
                        className="mt-0.5"
                      />
                      <div>
                        <label
                          htmlFor="is_goa_available"
                          className="text-sm cursor-pointer"
                        >
                          I confirm that I am available for both in-person
                          moments in Goa (June & December 2026).
                        </label>
                        {fieldError("is_goa_available")}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="is_confirm_age"
                        onCheckedChange={(checked) =>
                          setValue("is_confirm_age", checked === true)
                        }
                        className="mt-0.5"
                      />
                      <div>
                        <label
                          htmlFor="is_confirm_age"
                          className="text-sm cursor-pointer"
                        >
                          I confirm that I am over 21 years of age.
                        </label>
                        {fieldError("is_confirm_age")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="border-t border-border pt-8">
                  <p className="text-xs text-muted-foreground mb-6">
                    By submitting, you agree that your information will be
                    reviewed by Serendipity Arts. Selection is at the discretion
                    of the review committee.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-foreground text-background px-10 py-4 font-bold tracking-wide text-sm uppercase hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
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

export default ApplyIndividual;
