import Image from "next/image";
import React from "react";

interface WorkProject {
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: WorkProject[] = [
  {
    category: "ASTRALOGIX // ERP",
    title: "Workforce Management & ERP System",
    description:
      "Portal HR enterprise multi-tier dengan granular audit logging, sistem approval matriks bertingkat, dan sinkronisasi payroll real-time.",
    image: "/hero-2.png",
    tags: ["Enterprise App (CRM, CMS, HR)"],
  },
  {
    category: "PRIMALOGISTICS // IOT",
    title: "Global Freight & Telemetry Engine",
    description:
      "Arsitektur pelacakan kontainer dan rute kapal multi-moda berkapasitas ribuan update koordinat per detik dengan visualisasi rute interaktif.",
    image: "/hero-2.png",
    tags: ["Custom Web App"],
  },
  {
    category: "BANKDIGITAL.ID // FINTECH",
    title: "Open API Gateway & DevHub",
    description:
      "Portal pengembang perbankan terbuka dengan sandbox interaktif, validasi token mTLS, rate limiting cerdas, dan analisis telemetri transaksi.",
    image: "/hero-2.png",
    tags: ["Custom Web App", "Enterprise App (CRM, CMS, HR)"],
  },
];

export default function WorkSection() {
  return (
    <div className="w-full border-b">
      <div className="w-full max-w-360 mx-auto py-16 px-8 flex flex-col gap-12">
        <div className="flex items-center justify-between font-mono border-b pb-3 text-xs sm:text-sm">
          <div className="flex items-center gap-6">
            <p className="opacity-80 uppercase">/ 04</p>
          </div>

          <p className="opacity-60 uppercase tracking-wider">Selected Works</p>
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <h2 className="font-space font-bold text-3xl md:text-[40px] uppercase leading-tight md:leading-12 max-w-160">
            KARYA REKAYASA &<br className="hidden md:inline" /> DIGITAL
            TERPILIH.
          </h2>

          <p className="leading-6 opacity-80 max-w-90 text-sm md:text-base">
            Koleksi sistem berskala tinggi, platform digital, dan produk web
            modern yang dirancang dengan presisi arsitektural.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Featured Project */}
          <div className="border border-border bg-card p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col justify-between gap-8 flex-1">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase">
                  <span className="opacity-60">
                    HIGH-CONVERSION LANDING PAGE REDESIGN
                  </span>
                  <span className="opacity-40">•</span>
                  <span className="text-emerald-600 font-semibold">
                    COMPLETED 2025
                  </span>
                </div>

                <h3 className="font-space font-bold text-2xl md:text-3xl lg:text-[34px] uppercase leading-tight text-foreground">
                  TRANSFORMASI ARSITEKTUR & DESAIN LANDING PAGE B2B SAAS.
                </h3>

                <p className="leading-relaxed opacity-75 text-sm md:text-base max-w-xl">
                  Restrukturisasi holistik web presentation layer untuk SaaS
                  platform analitik data global. Mengeliminasi overhead runtime,
                  memangkas LCP menjadi 0.8s, dan mengoptimalkan funnel konversi
                  pengguna baru sebesar +41.8%.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Landing Page", "UI/UX Product Design"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2.5 py-1 bg-secondary border border-border/70 rounded-xs text-foreground/80 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative w-full lg:w-[48%] aspect-16/10 overflow-hidden border border-border/40 shadow-sm shrink-0">
              <Image
                src="/hero-2.png"
                alt="Transformasi Arsitektur & Desain Landing Page B2B SaaS"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Grid Projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((item, index) => (
              <div
                key={index}
                className="border border-border bg-card p-6 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-5">
                  <div className="relative w-full aspect-16/10 overflow-hidden border border-border/40">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <p className="font-mono text-xs opacity-60 uppercase tracking-wider">
                      {item.category}
                    </p>
                    <h4 className="font-space font-bold text-xl text-foreground leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed opacity-75">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50 flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="font-mono text-xs px-2.5 py-1 bg-secondary border border-border/70 rounded-xs text-foreground/80 font-medium"
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
    </div>
  );
}
