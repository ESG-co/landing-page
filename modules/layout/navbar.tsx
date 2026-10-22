"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 border-b bg-background z-50">
      <div className="flex items-center justify-between py-4 md:py-6 px-4 sm:px-6 md:px-8 w-full max-w-360 mx-auto">
        <Link href="/" passHref className="shrink-0">
          <div className="flex items-center max-h-10 md:max-h-12 overflow-hidden w-36 sm:w-53 lg:w-56">
            <Image
              src="/logo.png"
              width={120}
              height={48}
              alt="Logo Trieka"
              className="relative right-2 sm:right-3 object-contain w-auto h-20 sm:h-24 lg:h-full"
              priority
            />
          </div>
        </Link>

        {/* Desktop & Tablet Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-12">
          {navbarItems.map((item, key) => (
            <Link key={key} href={item.href} passHref>
              <p className="font-mono uppercase text-xs lg:text-sm font-semibold tracking-[0.5px] opacity-65 hover:opacity-100 duration-200">
                {item.label}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA Button (Tablet & Desktop) */}
        <div className="hidden sm:flex items-center">
          <Button
            variant="outline"
            rightIcon={
              <ArrowRight className="relative size-4 lg:size-5 -rotate-45" />
            }
            className="w-auto px-4 lg:px-6 lg:w-56 text-xs lg:text-sm"
          >
            Project Discussion
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden items-center justify-center p-2 text-foreground hover:bg-secondary rounded-none border border-border cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navbarItems.map((item, key) => (
              <Link
                key={key}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-mono uppercase text-sm font-semibold tracking-[0.5px] opacity-75 hover:opacity-100 py-2.5 border-b border-border/40"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 sm:hidden">
            <Button
              variant="outline"
              rightIcon={<ArrowRight className="relative size-4 -rotate-45" />}
              className="w-full justify-center text-xs"
              onClick={() => setIsOpen(false)}
            >
              Project Discussion
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
