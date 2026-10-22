import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function CTASection() {
  return (
    <div className="w-full max-w-360 mx-auto py-10 px-4 sm:px-6 md:px-8 md:py-16">
      <div className="w-full bg-secondary border p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col gap-8 md:gap-10">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs sm:text-sm border-b pb-3 sm:pb-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <p className="opacity-80 uppercase">/ INITIATION</p>
          </div>

          <p className="opacity-60 uppercase tracking-wider">
            Konsultasi Arsitektur
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-12">
          <h2 className="font-space font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] uppercase leading-tight md:leading-tight lg:leading-12 w-full max-w-none lg:max-w-160">
            PUNYA IDE SISTEM KOMPLEKS?
            <br className="hidden sm:inline" /> MARI BERDISKUSI DENGAN TIM
            <br className="hidden sm:inline" /> ENJINIRING KAMI.
          </h2>

          <div className="flex flex-col gap-6 w-full max-w-none lg:max-w-90">
            <p className="leading-6 opacity-80 text-sm md:text-base">
              Ceritakan kebutuhan dan tantangan teknis Anda langsung kepada
              Senior Technical Architect kami. Murni konsultasi teknik dan
              evaluasi kelayakan sistem.
            </p>

            <div className="flex flex-col gap-3 w-full max-w-sm lg:max-w-none">
              <Button
                className="w-full justify-center bg-[#090c13] hover:bg-[#090c13]/90 text-white border-0 font-mono text-xs uppercase tracking-wider"
                rightIcon={<ArrowRight className="size-4" />}
              >
                Jadwalkan Diskusi Teknis
              </Button>

              <Button
                variant="outline"
                className="w-full justify-center bg-white hover:bg-zinc-50 border-border text-foreground font-mono text-xs uppercase tracking-wider"
              >
                Kirim Dokumen RFP
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/70 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] sm:text-xs opacity-60 uppercase">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <p>• RESPON CEPAT &lt; 2 JAM</p>
            <p>• MUTUAL NDA TERSEDIA</p>
          </div>

          <p>JAKARTA // REMOTE APAC</p>
        </div>
      </div>
    </div>
  );
}
