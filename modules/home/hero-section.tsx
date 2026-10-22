import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="w-full border-b">
      <div className="w-full max-w-360 mx-auto flex flex-col gap-6 md:gap-8 p-4 sm:p-6 md:p-8 md:pb-16">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
          <h1 className="font-space uppercase font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] w-full max-w-none lg:max-w-125 leading-tight md:leading-tight lg:leading-16">
            Rekayasa Sistem Tanpa Kompromi.
          </h1>

          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-14 w-full max-w-none lg:max-w-100 font-mono">
            <p className="uppercase text-xs sm:text-sm tracking-[1.2px] leading-5 sm:leading-6 opacity-80">
              MENGUBAH KOMPLEKSITAS MENJADI ARSITEKTUR KELAS DUNIA MELALUI KODE
              BERSIH, DISIPLIN REKAYASA, DAN EFISIENSI MAKSIMAL.
            </p>

            <Link
              href="#"
              className="flex items-center gap-2 uppercase border-b-2 border-black w-fit pb-2"
            >
              <span className="text-xs sm:text-sm font-semibold">
                Eksplorasi Cara Kerja
              </span>
              <ArrowDown className="size-4 sm:size-4.5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 border-t pt-4 sm:pt-5">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-4 sm:gap-8">
              <p className="opacity-80 uppercase">/ 10+ Tahun Pengalaman</p>

              <p className="opacity-80 uppercase">
                / 500+ Servis Terverifikasi
              </p>
            </div>

            <p className="opacity-60 uppercase">[01/06]</p>
          </div>

          <div className="flex items-center relative">
            <div className="relative h-56 sm:h-72 md:h-92 lg:h-105 border-2 border-white shadow-xl rounded-lg sm:rounded-xl overflow-hidden w-[65%] sm:w-[63%]">
              <Image
                src="/hero-1.png"
                alt="Hero Image 1"
                className="object-cover object-center"
                fill
                sizes="(max-width: 640px) 65vw, (max-width: 1024px) 63vw, 55vw"
                priority
              />
            </div>
            <div className="absolute h-44 sm:h-56 md:h-72 lg:h-85 border-2 border-white shadow-xl rounded-lg sm:rounded-xl overflow-hidden right-0 bottom-2 sm:bottom-4 md:bottom-6 w-[42%] sm:w-2/5">
              <Image
                src="/hero-2.png"
                alt="Hero Image 2"
                className="object-cover object-center"
                fill
                sizes="(max-width: 640px) 42vw, (max-width: 1024px) 40vw, 35vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
