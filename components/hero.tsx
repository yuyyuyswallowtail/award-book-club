"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Panel } from "./panel";
import { Button } from "./button";

const HeroBook = dynamic(() => import("./three/hero-book"), { ssr: false });

const subscribe = (cb: () => void) => {
  const m = window.matchMedia("(min-width: 768px)");
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};

function BookFallback() {
  return (
    <div aria-hidden className="absolute inset-0 grid place-items-center">
      <div className="relative h-64 w-44 -rotate-[8deg] rounded-md bg-denim shadow-2xl">
        <span className="absolute inset-y-0 left-0 w-3 rounded-l-md bg-terracotta" />
        <span className="absolute left-1/2 top-12 size-16 -translate-x-1/2 rounded-full bg-terracotta" />
      </div>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const wide = useSyncExternalStore(subscribe, () => window.matchMedia("(min-width: 768px)").matches, () => false);
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <Panel className="bg-apricot">
      <div className="mx-auto grid min-h-[92svh] max-w-[1440px] items-center gap-8 px-6 pb-16 pt-36 md:grid-cols-12 md:px-12 lg:px-24">
        <div className="md:col-span-7">
          <motion.h1 className="display text-[clamp(3rem,8vw,8rem)]" {...rise(0.1)}>
            Books worth<br />staying up<br />for.
          </motion.h1>
          <motion.p className="mt-8 max-w-sm text-lg leading-snug" {...rise(0.3)}>
            A book club for people who would rather read than scroll. Pick up to three new hardcovers a month and we will bring them to your door.
          </motion.p>
          <motion.div className="mt-8" {...rise(0.45)}>
            <Button href="/books">Join the club</Button>
          </motion.div>
        </div>
        <div className="relative md:col-span-5">
          <div className="relative h-[24rem] md:h-[32rem]">
            {wide ? <HeroBook animate={!reduce} /> : <BookFallback />}
          </div>
          <p className="font-hand absolute right-0 top-2 w-40 rotate-6 text-2xl leading-tight">Delivered to your door, every month</p>
        </div>
      </div>
    </Panel>
  );
}
