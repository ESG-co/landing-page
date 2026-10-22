import type { Metadata } from "next";
import { Space_Grotesk, Open_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LayoutSection from "@/modules/layout/view";

const spaceGrotesk = Space_Grotesk({
  display: "swap",
  preload: true,
  variable: "--space",
});

const openSans = Open_Sans({
  display: "swap",
  preload: true,
  variable: "--opensans",
});

const jetBrains = JetBrains_Mono({
  display: "swap",
  preload: true,
  variable: "--jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://esg.co"),
  title: {
    default: "ESG.co — Software House & Rekayasa Produk Digital",
    template: "%s | ESG.co",
  },
  description:
    "Software house terpercaya untuk pengembangan custom web app, arsitektur sistem enterprise, dan desain produk digital berkinerja tinggi.",
  keywords: [
    "ESG.co",
    "ESG",
    "Software House",
    "Software House Indonesia",
    "Software House Jakarta",
    "Custom Software Development",
    "Enterprise Application",
    "Web Development",
    "UI/UX Design",
    "Digital Engineering",
  ],
  authors: [{ name: "ESG.co" }],
  creator: "ESG.co",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "ESG.co",
    title: "ESG.co — Software House & Rekayasa Produk Digital",
    description:
      "Software house terpercaya untuk pengembangan custom web app, arsitektur sistem enterprise, dan desain produk digital berkinerja tinggi.",
    images: [
      {
        url: "/hero-1.png",
        width: 1200,
        height: 630,
        alt: "ESG.co — Software House & Rekayasa Produk Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESG.co — Software House & Rekayasa Produk Digital",
    description:
      "Software house terpercaya untuk pengembangan custom web app, arsitektur sistem enterprise, dan desain produk digital berkinerja tinggi.",
    images: ["/hero-1.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${openSans.variable} ${jetBrains.variable} h-full antialiased`}
    >
      <LayoutSection>{children}</LayoutSection>
    </html>
  );
}
