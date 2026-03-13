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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitInstitutionalNomination } from "@/lib/api/applyInstitution";
import {
  getCohorts,
  getCountries,
  getInstitution,
} from "@/lib/api/commonDropdown";

import { useDropdowns } from "@/hooks/useDropdowns";

const schema = z.object({
  user_type: z.string(),

  institution_name: z.string().min(1, "Required").max(200),
  institution_type_id: z.string().min(1, "Required"),
  institution_website: z.string().max(255).optional().or(z.literal("")),
  contact_person: z.string().min(1, "Required").max(100),
  contact_email: z.string().email("Please enter a valid email").max(255),
  contact_phone: z.string().min(10, "Required").max(20),
  first_name: z.string().min(1, "Required").max(100),
  last_name: z.string().min(1, "Required").max(100),
  email: z.string().email("Please enter a valid email").max(255),
  password: z.string().min(8, "Password must be at least 8 characters"),
  job_title: z.string().min(1, "Required").max(200),
  country_id: z.string().min(1, "Required"),
  cohort_id: z.string().min(1, "Required"),
  is_fee_responsible: z
    .boolean()
    .refine((v) => v, "You must confirm fee responsibility"),
  is_travel_covered: z
    .boolean()
    .refine((v) => v, "You must confirm travel coverage"),
  is_release_committed: z
    .boolean()
    .refine((v) => v, "You must confirm Fellow release"),
});

type FormData = z.infer<typeof schema>;

const countries = [
  "India",
  "Pakistan",
  "Bangladesh",
  "Sri Lanka",
  "Nepal",
  "Bhutan",
  "Maldives",
];

const ApplyInstitution = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { institution, countries, cohorts } = useDropdowns();

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
      user_type: "institutional",
      institution_name: "",
      institution_type_id: "",
      institution_website: "",
      contact_person: "",
      contact_email: "",
      contact_phone: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      job_title: "",
      country_id: "",
      cohort_id: "",
      is_fee_responsible: false,
      is_travel_covered: false,
      is_release_committed: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log("Nomination form Data", data);

    try {
      const result = await submitInstitutionalNomination(data);
      console.log("Track 2 API response:", result);
      alert("Nomination submitted successfully!");
     navigate("/submission-confirmation");
    } catch (error: any) {
      console.error("Submission error:", error);
      alert(error.message || "Failed to submit nomination");
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
                <h1 className="editorial-subheading mb-4">
                  Institutional Nomination
                </h1>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nominate a practitioner from your team. Your organisation
                  identifies the nominee, funds their participation, and commits
                  to releasing them to fully engage in the fellowship over nine
                  months.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
                  Nomination is not selection
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All nominees are assessed by the same jury and according to
                  the same criteria as individual applicants. If selected, they
                  return to your organisation as a sharper, better-connected
                  cultural leader.
                </p>
              </div>

              <div className="border border-border p-5">
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
                  What the Institution Covers
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • Fellowship fee: ₹5,00,000 (invoiced on confirmation)
                  </li>
                  <li>• Travel to residential, Goa — June 2026</li>
                  <li>
                    • Travel to Serendipity Arts Festival, Goa — December 2026
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border">
                  If your nominee is not selected, no charge is made.
                </p>
              </div>

              <div className="border border-border p-5">
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
                  What the Programme Provides
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Accommodation at both in-person moments</li>
                  <li>• All meals during the six-day residential</li>
                  <li>• Festival accreditation</li>
                  <li>• Nine months of online sessions</li>
                  <li>• Mentor one-to-one sessions</li>
                  <li>• Programme materials</li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-xs text-muted-foreground">
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
                    1. Institution Details
                  </h2>
                  <input
                    type="hidden"
                    {...register("user_type")}
                    value="individual"
                  />
                  <div className="space-y-5">
                    <div>
                      <Label>Institution Name *</Label>
                      <Input
                        {...register("institution_name")}
                        className="mt-1.5"
                      />
                      {fieldError("institution_name")}
                    </div>
                    <div>
                      <Label>Institution Type *</Label>
                      <Select
                        onValueChange={(v) =>
                          setValue("institution_type_id", v)
                        }
                      >
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {institution.map((t) => (
                            <SelectItem key={t.id} value={String(t.id)}>
                              {t.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldError("institution_type_id")}
                    </div>
                    <div>
                      <Label>Institution Website (optional)</Label>
                      <Input
                        {...register("institution_website")}
                        placeholder="https://..."
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label>Contact Person *</Label>
                      <Input
                        {...register("contact_person")}
                        className="mt-1.5"
                      />
                      {fieldError("contact_person")}
                    </div>
                    <div>
                      <Label>Contact Email *</Label>
                      <Input
                        type="email"
                        {...register("contact_email")}
                        className="mt-1.5"
                      />
                      {fieldError("contact_email")}
                    </div>
                    <div>
                      <Label>Contact Phone *</Label>
                      <Input
                        type="tel"
                        {...register("contact_phone")}
                        className="mt-1.5"
                      />
                      {fieldError("contact_phone")}
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    2. Nominee Details
                  </h2>
                  <div className="space-y-5">
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
                      <Label>Nominee Email *</Label>
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
                      <Label>Nominee Job Title *</Label>
                      <Input {...register("job_title")} className="mt-1.5" />
                      {fieldError("job_title")}
                    </div>
                    <div>
                      <Label>Nominee Country *</Label>
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
                  </div>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    3. Programme Information
                  </h2>
                  <div>
                    <Label>Preferred Cohort *</Label>
                    <Select onValueChange={(v) => setValue("cohort_id", v)}>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Select Cohort" />
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
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    4. Institutional Commitments
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="is_fee_responsible"
                        onCheckedChange={(checked) =>
                          setValue("is_fee_responsible", checked === true)
                        }
                        className="mt-0.5"
                      />
                      <div>
                        <label
                          htmlFor="is_fee_responsible"
                          className="text-sm cursor-pointer"
                        >
                          We confirm responsibility for the Fellowship fee of
                          ₹5,00,000.
                        </label>
                        {fieldError("is_fee_responsible")}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="is_travel_covered"
                        onCheckedChange={(checked) =>
                          setValue("is_travel_covered", checked === true)
                        }
                        className="mt-0.5"
                      />
                      <div>
                        <label
                          htmlFor="is_travel_covered"
                          className="text-sm cursor-pointer"
                        >
                          We confirm coverage of the nominee's travel to both
                          in-person moments in Goa.
                        </label>
                        {fieldError("is_travel_covered")}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="is_release_committed"
                        onCheckedChange={(checked) =>
                          setValue("is_release_committed", checked === true)
                        }
                        className="mt-0.5"
                      />
                      <div>
                        <label
                          htmlFor="is_release_committed"
                          className="text-sm cursor-pointer"
                        >
                          We commit to releasing the Fellow for up to six hours
                          per week of structured engagement.
                        </label>
                        {fieldError("is_release_committed")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="border-t border-border pt-8">
                  <p className="text-xs text-muted-foreground mb-6">
                    By submitting this nomination, you agree to the terms of the
                    Nominating Partner Agreement. If your nominee is not
                    selected, no charge is made.
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
