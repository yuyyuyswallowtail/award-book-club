import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { BookCarousel } from "@/components/book-carousel";
import { Reveal } from "@/components/motion/reveal";
import { books, months } from "@/lib/content";

export const metadata: Metadata = {
  title: "All books — Award Book Club",
  description: "Every monthly drop of new hardcovers, grouped by month.",
  alternates: { canonical: "/books" },
};

export default function BooksPage() {
  return (
    <>
      <PageHeader title="Our selections" text="A fresh drop of new hardcovers on the 1st of every month." className="bg-rose" />
      {months.map((m) => (
        <section key={m} className="pt-16">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24">
            <Reveal><h2 className="display text-[clamp(2rem,4.5vw,4rem)]">{m}</h2></Reveal>
          </div>
          <BookCarousel books={books.filter((b) => b.month === m)} />
        </section>
      ))}
    </>
  );
}
