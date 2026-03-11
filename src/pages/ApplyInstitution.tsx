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

const schema = z.object({
  institutionName: z.string().min(1, "Required").max(200),
  institutionType: z.string().min(1, "Required"),
  institutionWebsite: z.string().max(255).optional().or(z.literal("")),
  contactPerson: z.string().min(1, "Required").max(100),
  contactEmail: z.string().email("Please enter a valid email").max(255),
  contactPhone: z.string().min(5, "Required").max(20),
  nomineeFirstName: z.string().min(1, "Required").max(100),
  nomineeLastName: z.string().min(1, "Required").max(100),
  nomineeEmail: z.string().email("Please enter a valid email").max(255),
  nomineeJobTitle: z.string().min(1, "Required").max(200),
  nomineeCountry: z.string().min(1, "Required"),
  cohort: z.string().min(1, "Required"),
  feeConfirm: z.boolean().refine((v) => v, "You must confirm fee responsibility"),
  travelConfirm: z.boolean().refine((v) => v, "You must confirm travel coverage"),
  releaseConfirm: z.boolean().refine((v) => v, "You must confirm Fellow release"),
});

type FormData = z.infer<typeof schema>;

const countries = [
  "India", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal", "Bhutan", "Maldives",
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
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      institutionName: "", institutionType: "", institutionWebsite: "",
      contactPerson: "", contactEmail: "", contactPhone: "",
      nomineeFirstName: "", nomineeLastName: "", nomineeEmail: "",
      nomineeJobTitle: "", nomineeCountry: "", cohort: "",
      feeConfirm: false, travelConfirm: false, releaseConfirm: false,
    },
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    console.log("Track 2 nomination:", data);
    setTimeout(() => navigate("/submission-confirmation"), 1000);
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
                <h1 className="editorial-subheading mb-4">Institutional Nomination</h1>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nominate a practitioner from your team. Your organisation identifies the
                  nominee, funds their participation, and commits to releasing them to fully
                  engage in the fellowship over nine months.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
                  Nomination is not selection
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All nominees are assessed by the same jury and according to the same
                  criteria as individual applicants. If selected, they return to your
                  organisation as a sharper, better-connected cultural leader.
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
                {/* Section 1 */}
                <div>
                  <h2 className="font-bold text-lg mb-6 pb-3 border-b border-border">
                    1. Institution Details
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <Label>Institution Name *</Label>
                      <Input {...register("institutionName")} className="mt-1.5" />
                      {fieldError("institutionName")}
                    </div>
                    <div>
                      <Label>Institution Type *</Label>
                      <Select onValueChange={(v) => setValue("institutionType", v)}>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select type" /></SelectTrigger>
                        <SelectContent>
                          {["Cultural Institution", "Foundation", "Gallery / Museum", "Government Body", "Educational Institution", "NGO / Non-Profit", "Other"].map((t) => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldError("institutionType")}
                    </div>
                    <div>
                      <Label>Institution Website (optional)</Label>
                      <Input {...register("institutionWebsite")} placeholder="https://..." className="mt-1.5" />
                    </div>
                    <div>
                      <Label>Contact Person *</Label>
                      <Input {...register("contactPerson")} className="mt-1.5" />
                      {fieldError("contactPerson")}
                    </div>
                    <div>
                      <Label>Contact Email *</Label>
                      <Input type="email" {...register("contactEmail")} className="mt-1.5" />
                      {fieldError("contactEmail")}
                    </div>
                    <div>
                      <Label>Contact Phone *</Label>
                      <Input type="tel" {...register("contactPhone")} className="mt-1.5" />
                      {fieldError("contactPhone")}
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
                        <Input {...register("nomineeFirstName")} className="mt-1.5" />
                        {fieldError("nomineeFirstName")}
                      </div>
                      <div>
                        <Label>Last Name *</Label>
                        <Input {...register("nomineeLastName")} className="mt-1.5" />
                        {fieldError("nomineeLastName")}
                      </div>
                    </div>
                    <div>
                      <Label>Nominee Email *</Label>
                      <Input type="email" {...register("nomineeEmail")} className="mt-1.5" />
                      {fieldError("nomineeEmail")}
                    </div>
                    <div>
                      <Label>Nominee Job Title *</Label>
                      <Input {...register("nomineeJobTitle")} className="mt-1.5" />
                      {fieldError("nomineeJobTitle")}
                    </div>
                    <div>
                      <Label>Nominee Country *</Label>
                      <Select onValueChange={(v) => setValue("nomineeCountry", v)}>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select country" /></SelectTrigger>
                        <SelectContent>
                          {countries.map((c) => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldError("nomineeCountry")}
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
                    <Select onValueChange={(v) => setValue("cohort", v)}>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select cohort" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2026 Brij Cultural Leaders Fellowship">2026 Brij Cultural Leaders Fellowship</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldError("cohort")}
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
                        id="feeConfirm"
                        onCheckedChange={(checked) => setValue("feeConfirm", checked === true)}
                        className="mt-0.5"
                      />
                      <div>
                        <label htmlFor="feeConfirm" className="text-sm cursor-pointer">
                          We confirm responsibility for the Fellowship fee of ₹5,00,000.
                        </label>
                        {fieldError("feeConfirm")}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="travelConfirm"
                        onCheckedChange={(checked) => setValue("travelConfirm", checked === true)}
                        className="mt-0.5"
                      />
                      <div>
                        <label htmlFor="travelConfirm" className="text-sm cursor-pointer">
                          We confirm coverage of the nominee's travel to both in-person moments in Goa.
                        </label>
                        {fieldError("travelConfirm")}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="releaseConfirm"
                        onCheckedChange={(checked) => setValue("releaseConfirm", checked === true)}
                        className="mt-0.5"
                      />
                      <div>
                        <label htmlFor="releaseConfirm" className="text-sm cursor-pointer">
                          We commit to releasing the Fellow for up to six hours per week of structured engagement.
                        </label>
                        {fieldError("releaseConfirm")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="border-t border-border pt-8">
                  <p className="text-xs text-muted-foreground mb-6">
                    By submitting this nomination, you agree to the terms of the Nominating
                    Partner Agreement. If your nominee is not selected, no charge is made.
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
