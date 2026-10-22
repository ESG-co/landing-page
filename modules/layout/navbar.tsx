import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarItem {
  label: string;
  href: string;
}

const navbarItems: NavbarItem[] = [
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export default function NavbarSection() {
  return (
    <nav className="sticky top-0 border-b">
      <div className="flex items-center justify-between py-6 px-8 w-full max-w-360 mx-auto">
        <Link href="/" passHref>
          <div className="flex items-center max-h-12 overflow-hidden w-56">
            <Image
              src="/logo.png"
              width={120}
              height={48}
              alt="Logo Trieka"
              className="relative right-3"
            />
          </div>
        </Link>

        <div className="flex items-center gap-12">
          {navbarItems.map((item, key) => (
            <Link key={key} href={item.href} passHref>
              <p className="font-mono uppercase text-sm font-semibold tracking-[0.5px] opacity-65 hover:opacity-100 duration-200">
                {item.label}
              </p>
            </Link>
          ))}
        </div>

        <Button
          variant="outline"
          rightIcon={<ArrowRight className="relative size-5 -rotate-45" />}
          className="w-56"
        >
          Project Discussion
        </Button>
      </div>
    </nav>
  );
}
