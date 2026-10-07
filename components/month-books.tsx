import { books } from "@/lib/content";
import { BookCarousel } from "./book-carousel";
import { Reveal } from "./motion/reveal";

export function MonthBooks() {
  const month = books[0].month;
  const current = books.filter((b) => b.month === month);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24">
        <Reveal>
          <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)]">This month: {month}</h2>
          <p className="mt-4 max-w-md text-lg leading-snug">New books drop on the 1st of every month. Call us creatures of habit.</p>
        </Reveal>
      </div>
      <BookCarousel books={current} />
    </section>
  );
}
