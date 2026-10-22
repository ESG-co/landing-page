import { cn } from "@/lib/utils";
import React from "react";

interface MethodItem {
  number: string;
  phase: string;
  badgeColor?: string;
  title: string;
  description: string;
  deliverable: string;
}

const methods: MethodItem[] = [
  {
    number: "01",
    phase: "DISCOVERY",
    badgeColor: "text-primary",
    title: "Discovery & Feasibility",
    description:
      "Audit menyeluruh arsitektur eksisting, scoping fungsional, estimasi konkurensi traffic, dan simulasi proyeksi biaya cloud.",
    deliverable: "DELIVERABLE: RFC & ROADMAP",
  },
  {
    number: "02",
    phase: "PROTOTYPE",
    badgeColor: "text-emerald-600",
    title: "UI/UX & Blueprint",
    description:
      "Interactive clickable prototype, standardisasi design system, skema relasi database (ERD), dan kontrak OpenAPI.",
    deliverable: "DELIVERABLE: UI TOKENS & SCHEMA",
  },
  {
    number: "03",
    phase: "SPRINT",
    badgeColor: "text-primary",
    title: "Agile Sprints & QA",
    description:
      "Siklus bi-weekly terukur, peer-reviewed code, automated unit & e2e testing suite, serta demo progres transparan ke stakeholder.",
    deliverable: "DELIVERABLE: TESTED CODE & DEMOS",
  },
  {
    number: "04",
    phase: "RELEASE",
    badgeColor: "text-emerald-600",
    title: "Deploy & SLA",
    description:
      "Zero-downtime blue/green deployment, setup observabilitas & alert real-time, handover teknis, dan jaminan support SLA 24/7.",
    deliverable: "DELIVERABLE: GO-LIVE & SLA 24/7",
  },
];

export default function MetodeSection() {
  return (
    <div className="w-full border-b">
      <div className="w-full max-w-360 mx-auto py-16 px-8 flex flex-col gap-12">
        <div className="flex items-center justify-between font-mono border-b pb-3 text-xs sm:text-sm">
          <div className="flex items-center gap-6">
            <p className="opacity-80 uppercase">/ 05</p>
            <p className="opacity-60 uppercase tracking-wider truncate">
              Metodologi & Protokol Kerja
            </p>
          </div>

          <p className="opacity-60 uppercase">[05/06]</p>
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <h2 className="font-space font-bold text-3xl md:text-[40px] uppercase leading-tight md:leading-12 max-w-160">
            METODOLOGI KERJA
            <br className="hidden md:inline" /> TRANSPARAN & TERUKUR.
          </h2>

          <p className="leading-6 opacity-80 max-w-90 text-sm md:text-base">
            Setiap inisiatif dieksekusi dengan siklus sprint presisi tinggi,
            evaluasi kode berkala, dan dokumentasi arsitektural yang transparan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-border bg-card/40">
          {methods.map((item, index) => (
            <div
              key={item.number}
              className={cn(
                "p-8 flex flex-col justify-between gap-12",
                index < 3 ? "border-b md:border-b-0" : "",
                index < 2 ? "md:border-b" : "",
                index % 2 === 0 ? "md:border-r" : "md:border-r-0",
                "lg:border-b-0",
                index < 3 ? "lg:border-r" : "lg:border-r-0",
                "border-border",
              )}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="opacity-60 font-medium">
                    TAHAP {item.number}
                  </span>
                  <span
                    className={cn(
                      "font-semibold tracking-wider text-xs",
                      item.badgeColor,
                    )}
                  >
                    {item.phase}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-space font-bold text-2xl text-foreground">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed opacity-75 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="font-mono text-xs tracking-wider opacity-60 uppercase">
                {item.deliverable}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
