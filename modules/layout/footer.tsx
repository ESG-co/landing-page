import { Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full bg-secondary mt-auto border-t">
      <div className="flex flex-col gap-4 sm:gap-8 lg:gap-12 w-full max-w-360 mx-auto py-10 sm:py-10 lg:py-16 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 justify-between">
          <div className="flex flex-col gap-5 sm:gap-6 w-full lg:max-w-110">
            <Link href="/" passHref>
              <div className="flex items-center max-h-8 overflow-hidden w-56">
                <Image
                  src="/logo.png"
                  width={100}
                  height={32}
                  alt="Logo Trieka"
                  className="relative right-3"
                />
              </div>
            </Link>

            <p className="font-medium text-sm opacity-70 max-w-lg">
              High-velocity engineering & digital product architecture. Building
              resilient systems for world-class enterprises.
            </p>

            <div className="flex items-center gap-2.5 sm:gap-3">
              <Compass className="size-4.5 text-primary shrink-0" />

              <p className="font-mono text-xs sm:text-[13px] opacity-70">
                6.2088° S, 106.8456° E — JKT / ID
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-16 md:gap-24 lg:gap-32 lg:ml-auto">
            <div className="flex flex-col gap-4 sm:gap-5">
              <p className="font-mono font-semibold uppercase text-xs tracking-[1px] opacity-40">
                Services
              </p>

              <div className="flex flex-col gap-2.5">
                {[
                  "Landing Page",
                  "UI/UX Product Design",
                  "Enterprise App",
                  "Custom Web App",
                ].map((item, key) => (
                  <Link
                    key={key}
                    href={`/services#${item.toLowerCase().split(" ").join("-")}`}
                    className="text-xs sm:text-sm font-medium w-fit opacity-70 hover:opacity-100 duration-200"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5">
              <p className="font-mono font-semibold uppercase text-xs tracking-[1px] opacity-40">
                Contact
              </p>

              <div className="flex flex-col gap-2.5">
                <Link
                  href="mailto:Hello.esgco@gmail.com"
                  className="text-xs sm:text-sm font-medium w-fit opacity-70 hover:opacity-100 duration-200 break-all sm:break-normal"
                >
                  Hello.esgco@gmail.com
                </Link>
                <Link
                  href="https://wa.me/+6283873057719"
                  className="text-xs sm:text-sm font-medium w-fit opacity-70 hover:opacity-100 duration-200"
                  target="_blank"
                >
                  +62 838-7305-7719
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-border" />

        <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm">
          <p className="font-medium opacity-70">
            Copyright © ESG.co 2026. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
            <Link
              href="#"
              className="font-medium opacity-70 hover:opacity-100 transition-opacity"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-medium opacity-70 hover:opacity-100 transition-opacity"
            >
              Terms & Services
            </Link>

            <p className="font-mono font-bold text-primary">LP_VER 1.0.0</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
