import { cn } from "@/lib/utils";
import React from "react";

interface ServiceItem {
  number: string;
  badge: string;
  badgeColor?: string;
  title: string;
  description: string;
  tags: string[];
}

const services: ServiceItem[] = [
  {
    number: "01",
    badge: "99+ PAGESPEED",
    badgeColor: "text-primary",
    title: "Landing Page",
    description:
      "High-conversion, story-driven architectural landing pages with micro-interactions, responsive speed (<1s load), and optimized SEO performance for modern brands.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "SEO Optimized"],
  },
  {
    number: "02",
    badge: "SYSTEM DESIGN",
    badgeColor: "text-emerald-600",
    title: "UI/UX Product Design",
    description:
      "Design system berskala enterprise, clickable prototype interaktif berkecepatan tinggi, riset pengguna berbasis data, dan pustaka token komponen komprehensif.",
    tags: [
      "Figma Master",
      "Tokens Studio",
      "UX Benchmarking",
      "Micro-Interactions",
    ],
  },
  {
    number: "03",
    badge: "RBAC & AUDIT LOGS",
    badgeColor: "text-primary",
    title: "Enterprise App (CRM, CMS, HR)",
    description:
      "Custom internal business systems, complex workflow automation, granular role-based access control (RBAC), immutable audit logging, dan seamless API integrations.",
    tags: ["Go / Nest.js", "PostgreSQL", "Enterprise RBAC", "REST & GraphQL"],
  },
  {
    number: "04",
    badge: "HIGH CONCURRENCY",
    badgeColor: "text-primary",
    title: "Custom Web App",
    description:
      "Full-stack tailored web platforms, scalable microservices, offline-ready synchronization, arsitektur database transaksi tinggi, dan sistem antrian resilient.",
    tags: ["Distributed Cache", "Redis", "Docker / K8s", "Zero-Downtime"],
  },
];

export default function ServiceSection() {
  return (
    <div className="w-full border-b">
      <div className="w-full max-w-360 mx-auto py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 flex flex-col gap-8 sm:gap-10 md:gap-12">
        <div className="flex items-center justify-between font-mono border-b pb-3 text-xs sm:text-sm">
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <p className="opacity-80 uppercase shrink-0">/ 03</p>
            <p className="opacity-60 uppercase tracking-wider truncate">
              Layanan Unggulan & Rekayasa
            </p>
          </div>

          <p className="opacity-60 uppercase shrink-0 ml-4">[03/06]</p>
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-8">
          <h2 className="font-space font-bold text-2xl sm:text-3xl lg:text-[40px] uppercase leading-tight sm:leading-snug lg:leading-12 md:max-w-[58%] lg:max-w-160">
            KEAHLIAN REKAYASA DIGITAL &<br className="hidden lg:inline" />{" "}
            DESAIN TERKURASI.
          </h2>

          <p className="leading-relaxed opacity-80 md:max-w-[38%] lg:max-w-90 text-sm md:text-base">
            Solusi end-to-end dengan disiplin teknis tinggi dari tahap
            arsitektur, prototyping interaktif, hingga rilis produksi
            siap-skala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-border bg-card/40">
          {services.map((item, index) => (
            <div
              key={item.number}
              className={cn(
                "p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between gap-6 sm:gap-8",
                index % 2 === 0 ? "md:border-r border-border" : "",
                index < 2 ? "border-b border-border" : "",
                index === 2 ? "border-b md:border-b-0 border-border" : "",
              )}
            >
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap font-mono text-[11px] sm:text-xs">
                  <span className="opacity-60 font-medium shrink-0">
                    [SERVICE // {item.number}]
                  </span>
                  <span
                    className={cn(
                      "font-semibold tracking-wider text-[11px] sm:text-xs",
                      item.badgeColor,
                    )}
                  >
                    {item.badge}
                  </span>
                </div>

                <div className="flex flex-col gap-2.5 sm:gap-3">
                  <h3 className="font-space font-bold text-xl sm:text-2xl text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed opacity-75">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-5 sm:pt-6 border-t border-border/70 flex flex-wrap gap-1.5 sm:gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="font-mono text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 bg-secondary border border-border/70 rounded-xs text-foreground/80 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
