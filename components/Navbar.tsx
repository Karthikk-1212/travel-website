"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/#destinations", label: "Destinations" },
  { href: "/#vehicles", label: "Vehicles" },
  { href: "/#packages", label: "Packages" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-basalt-600/40 bg-basalt-900/90 backdrop-blur supports-[backdrop-filter]:bg-basalt-900/70">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl font-semibold text-parchment-100">
        AARUSHI<span className="text-brass-500">Travels</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-parchment-200/80 transition hover:text-brass-500"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+917975748092"
            className="flex items-center gap-2 rounded-card bg-brass-500 px-4 py-2 text-sm font-semibold text-basalt-950 transition hover:bg-brass-400"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-parchment-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-basalt-600/40 bg-basalt-900 md:hidden">
          <div className="container flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-card px-2 py-2 text-sm text-parchment-200/90 hover:bg-basalt-800"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+917975748092"
              className="mt-2 flex items-center justify-center gap-2 rounded-card bg-brass-500 px-4 py-2 text-sm font-semibold text-basalt-950"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
