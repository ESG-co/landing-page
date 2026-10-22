import { cn } from "@/lib/utils";
import React from "react";

export default function PartnerSection() {
  return (
    <div className="bg-secondary w-full border-b">
      <div className="w-full max-w-360 mx-auto py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 flex flex-col gap-8 sm:gap-10">
        <div className="flex items-center justify-between font-mono border-b pb-3 text-xs sm:text-sm">
          <div className="flex items-center gap-6">
            <p className="opacity-80 uppercase">/ 02</p>
          </div>

          <p className="opacity-60 uppercase tracking-wider">Partner Kami</p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 lg:gap-12">
          <div className="flex flex-col gap-3 sm:gap-4 max-w-none md:max-w-130 lg:max-w-160">
            <h2 className="font-space font-semibold text-2xl sm:text-3xl md:text-3xl lg:text-[40px] leading-tight md:leading-snug lg:leading-12 uppercase">
              DIPERCAYA OLEH PERUSAHAAN TERKEMUKA DI ASIA TENGGARA.
            </h2>

            <p className="leading-relaxed opacity-80 text-sm sm:text-base">
              Kami membantu mitra enterprise dan institusi finansial membangun
              fondasi perangkat lunak berperforma tinggi dengan standar
              keandalan 99.98%.
            </p>
          </div>

          <div className="flex flex-col gap-1 items-start md:items-end shrink-0">
            <p className="font-space text-5xl sm:text-6xl md:text-7xl lg:text-[86px] font-bold leading-none">
              50+
            </p>
            <p className="font-mono uppercase tracking-[1.5px] text-[11px] sm:text-xs text-left md:text-right">
              KORPORASI & SKALA NASIONAL
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {[...Array(5)].map((_, key) => (
            <div
              key={key}
              className={cn(
                "flex items-center justify-center bg-white border border-border rounded-lg py-4 sm:py-5 px-3 text-center",
                key === 4 ? "col-span-2 md:col-span-1" : "",
              )}
            >
              <p className="font-space font-bold text-sm sm:text-base">
                Company {key + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
