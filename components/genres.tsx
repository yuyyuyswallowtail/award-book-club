"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { books, genres, type Book } from "@/lib/content";
import { Cover } from "./cover";
import { Panel } from "./panel";

function Genre({ label, progress, range }: { label: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  return <motion.li style={{ opacity }} className="display text-[clamp(2.25rem,6.5vw,6.5rem)]">{label}</motion.li>;
}

function Floater({ book, progress, className, from, to }: { book: Book; progress: MotionValue<number>; className: string; from: number; to: number }) {
  const y = useTransform(progress, [0, 1], [from, to]);
  return (
    <motion.div aria-hidden style={{ y }} className={`absolute hidden w-28 md:block lg:w-36 ${className}`}>
      <Cover book={book} />
    </motion.div>
  );
}

export function Genres() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const k = reduce ? 0 : 1;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });

  return (
    <Panel className="bg-rose">
      <div ref={ref} className="relative mx-auto max-w-[1440px] px-6 py-32 text-center md:px-12 lg:px-24">
        <Floater book={books[0]} progress={scrollYProgress} className="left-[4%] top-[12%] -rotate-6" from={120 * k} to={-80 * k} />
        <Floater book={books[3]} progress={scrollYProgress} className="right-[5%] top-[8%] rotate-6" from={60 * k} to={-140 * k} />
        <Floater book={books[7]} progress={scrollYProgress} className="bottom-[8%] left-[8%] rotate-3" from={160 * k} to={-40 * k} />
        <Floater book={books[4]} progress={scrollYProgress} className="bottom-[10%] right-[7%] -rotate-3" from={100 * k} to={-100 * k} />
        <p className="font-hand -rotate-2 text-2xl">Choose from</p>
        <h2 className="sr-only">Genres</h2>
        <ul className="relative mt-4">
          {genres.map((g, i) => (
            <Genre key={g} label={g} progress={scrollYProgress} range={[i / genres.length, Math.min(1, (i + 2) / genres.length)]} />
          ))}
        </ul>
      </div>
    </Panel>
  );
}
