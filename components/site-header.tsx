"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const links = [
  { label: "All books", href: "/books" },
  { label: "Gifting", href: "/gifting" },
  { label: "Merch", href: "/merch" },
  { label: "FAQ", href: "/faq" },
];

const base = "rounded-full px-4 py-2 text-sm font-semibold backdrop-blur transition-colors";
const active = "bg-forest text-oat";

const subscribeScroll = (cb: () => void) => {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 24,
    () => false,
  );

  const idle = scrolled
    ? "hover:bg-forest hover:text-oat"
    : "bg-oat/90 hover:bg-forest hover:text-oat";

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled
            ? "pointer-events-auto bg-oat/90 shadow-[0_6px_24px_-10px_rgba(18,39,31,0.35)] backdrop-blur-md"
            : "pointer-events-none bg-transparent"
        }`}
      >
        <div className={`mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 transition-[padding] duration-300 md:px-8 ${scrolled ? "py-2.5" : "py-4"}`}>
          <Link href="/" aria-label="Award Book Club home" className="pointer-events-auto flex items-baseline gap-2">
            <span className="display text-2xl md:text-3xl">Award</span>
            <span className="hidden text-[10px] font-bold uppercase leading-none tracking-widest sm:block">Book<br />Club</span>
          </Link>
          <nav aria-label="Primary" className="pointer-events-auto hidden items-center gap-2 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} aria-current={path === l.href ? "page" : undefined} className={`${base} ${path === l.href ? active : idle}`}>
                {l.label}
              </Link>
            ))}
            <Link href="/books" className="group inline-flex items-center gap-2 rounded-lg bg-terracotta px-4 py-2 text-sm font-semibold text-oat">
              Join the club
              <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-1" />
            </Link>
          </nav>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`${base} ${scrolled ? "bg-forest text-oat" : idle} pointer-events-auto md:hidden`}
          >
            Menu
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 flex flex-col justify-between bg-forest px-6 py-6 text-oat"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <button type="button" onClick={() => setOpen(false)} className="self-end rounded-full bg-oat px-4 py-2 text-sm font-semibold text-forest">Close</button>
            <ul className="space-y-2">
              {[{ label: "Home", href: "/" }, ...links].map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.07 } }}>
                  <Link href={l.href} onClick={() => setOpen(false)} className="display block text-[clamp(3rem,14vw,6rem)]">{l.label}</Link>
                </motion.li>
              ))}
            </ul>
            <p className="font-hand text-2xl text-apricot">Books worth staying up for.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
