import { ReactNode } from "react";
import NavbarSection from "./navbar";
import FooterSection from "./footer";

export default function LayoutSection({ children }: { children: ReactNode }) {
  return (
    <body className="flex flex-col min-h-screen">
      <NavbarSection />
      {children}
      <FooterSection />
    </body>
  );
}
