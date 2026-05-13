"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/data";

function isInternalPath(href: string) {
  return href.startsWith("/");
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-panel-dark/72 px-4 py-3 text-white shadow-panel backdrop-blur-xl lg:px-5"
        aria-label="Hlavní navigace"
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Resilium úvod">
          <Image
            src="/logo-cele.png"
            alt="Resilium"
            width={174}
            height={44}
            priority
            className="h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navItems.map((item) =>
            isInternalPath(item.href) ? (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-text-muted transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-text-muted transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        <Link
          href="/#paths"
          className="hidden rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-white transition hover:bg-accent-warm lg:inline-flex"
        >
          Vybrat program
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Otevřít menu"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-white transition ${isOpen ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-white transition ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-white transition ${isOpen ? "top-2 -rotate-45" : "top-4"}`} />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="mx-auto mt-3 max-w-7xl rounded-[1.5rem] border border-white/20 bg-panel-dark/95 p-3 text-white shadow-panel backdrop-blur-xl lg:hidden"
        >
          <div className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-text-primary transition hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#paths"
              className="mt-2 rounded-2xl bg-accent px-4 py-3 text-center text-sm font-bold text-white"
              onClick={() => setIsOpen(false)}
            >
              Vybrat program
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
