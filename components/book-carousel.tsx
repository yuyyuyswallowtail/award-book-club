"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Book } from "@/lib/content";
import { BookCard } from "./book-card";

export function BookCarousel({ books }: { books: Book[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const scroll = (dir: number) => ref.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  const btn = "grid size-11 place-items-center rounded-full bg-forest text-oat transition-transform hover:scale-105";

  return (
    <div>
      <ul ref={ref} className="flex snap-x gap-5 overflow-x-auto px-6 pb-8 pt-6 [scrollbar-width:none] md:px-12 lg:px-24">
        {books.map((b, i) => (
          <li key={b.slug}><BookCard book={b} index={i} /></li>
        ))}
      </ul>
      <div className="mx-auto flex max-w-[1440px] justify-end gap-2 px-6 md:px-12 lg:px-24">
        <button type="button" onClick={() => scroll(-1)} aria-label="Previous books" className={btn}><ArrowLeft size={18} /></button>
        <button type="button" onClick={() => scroll(1)} aria-label="Next books" className={btn}><ArrowRight size={18} /></button>
      </div>
    </div>
  );
}
