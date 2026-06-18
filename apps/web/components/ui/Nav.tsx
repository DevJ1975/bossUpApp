"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/site.config";
import { LogoWordmark } from "./LogoWordmark";
import { Button } from "./Button";
import { MenuIcon, CloseIcon } from "./icons";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="BossUp home">
          <LogoWordmark variant="brand" />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={site.brochurePath} variant="ghost" download>
            Overview
          </Button>
          <Button href="#contact" variant="primary">
            Book a pilot
          </Button>
        </div>

        <button
          type="button"
          className="rounded-full border border-line p-2 text-fg lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon size={22} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-px flex h-16 items-center justify-between">
              <LogoWordmark variant="brand" />
              <button
                type="button"
                className="rounded-full border border-line p-2 text-fg"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <CloseIcon size={22} />
              </button>
            </div>
            <div className="container-px mt-8 flex flex-col gap-2">
              {nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 text-2xl font-display font-semibold text-fg"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Button
                  href={site.brochurePath}
                  variant="outline"
                  download
                  onClick={() => setOpen(false)}
                >
                  Download overview
                </Button>
                <Button
                  href="#contact"
                  variant="primary"
                  onClick={() => setOpen(false)}
                >
                  Book a pilot
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
