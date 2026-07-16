import { motion } from "framer-motion";
import { FileText, ArrowUpRight } from "lucide-react";

import reportBg1 from "../assets/compliance-img/grad-1.jpg";
import reportBg2 from "../assets/compliance-img/grad-2.jpg";
import reportBg3 from "../assets/compliance-img/grad-3.jpg";
import reportBg4 from "../assets/compliance-img/grad-4.jpg";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
    },
};

const reports = [
    {
        period: "JUNE 2026",
        description:
            "Half-yearly Environmental Clearance compliance submission covering water sourcing (Delhi Jal Board), STP operations, air, noise and construction-phase monitoring.",
        pdf: "/academy/fellowship/compliance-reports",
        bg: reportBg1,
    },
    {
        period: "DECEMBER 2025",
        description:
            "Compliance status against Environmental Clearance conditions for the reporting period ending December 2025, including groundwater usage, sewage treatment with tertiary STP, rainwater harvesting and monitoring returns to the Regional Office, MoEF&CC.",
        pdf: "/academy/fellowship/compliance-reports",
        bg: reportBg2,
    },
    {
        period: "DECEMBER 2024",
        description:
            "Signed half-yearly compliance report documenting adherence to specific and general conditions of the Environmental Clearance during the July–December 2024 window.",
        pdf: "/academy/fellowship/compliance-reports",
        bg: reportBg3,
    },
    {
        period: "JUNE 2024",
        description:
            "Compliance report including ambient air quality (PM10, PM2.5, SO₂, NO₂, CO), noise monitoring in the designated silence zone and supporting annexures.",
        pdf: "/academy/fellowship/compliance-reports",
        bg: reportBg4,
    },
];


const ComplianceReports = () => {
    return (
        <>
            <Navbar />
            <section className="bg-[#f7f7f7] pt-20 border-t border-neutral-300">
                <div className="max-w-7xl mx-auto px-4 md:px-0 py-6 md:py-20">
                    <motion.div {...fadeUp}>
                        <h2 className="font-heading font-bold uppercase text-[36px] md:text-[47px] leading-[37px] tracking-tighter">
                            Six-Monthly Compliance Reports
                        </h2>

                        <p className="mt-6 font-body text-[20px] leading-7 text-[#333] max-w-[42rem]">
                            Half-yearly compliance submissions filed against the Environmental Clearance
                            conditions — covering water sourcing through Delhi Jal Board, tertiary sewage
                            treatment, rainwater harvesting, and ambient air and noise monitoring.
                        </p>
                    </motion.div>
                </div>

                {/* Full-width divider */}
                <div className="w-full border-t border-neutral-300"></div>

                {/* Cards */}

                <div className="max-w-7xl mx-auto px-4 md:px-0 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reports.map((report, i) => (
                            <motion.div
                                key={report.title}
                                {...fadeUp}
                                transition={{
                                    ...fadeUp.transition,
                                    delay: i * 0.1,
                                }}
                            >
                                <a
                                    href={report.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex flex-col justify-between min-h-[380px] overflow-hidden p-8"
                                    style={{
                                        backgroundImage: `url(${report.bg})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                >
                                    <div className="relative z-10">
                                        <div className="flex font-heading items-center gap-2 text-xl md:text-2xl md:font-bold font-semibold uppercase tracking-tighter  text-white">

                                            {report.period}
                                        </div>


                                        <p className="mt-5 text-white/90 leading-6">
                                            {report.description}
                                        </p>
                                    </div>

                                    <div className="relative z-10 inline-flex items-center gap-2 text-sm font-medium  text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-4"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                        Open PDF
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ComplianceReports;