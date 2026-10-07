import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookCarousel } from "@/components/book-carousel";
import { Cover } from "@/components/cover";
import { FaqItems } from "@/components/faq-items";
import { Panel } from "@/components/panel";
import { Reveal } from "@/components/motion/reveal";
import { books, toneClass } from "@/lib/content";

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) return {};
  return {
    title: `${book.title} — Award Book Club`,
    description: book.blurb,
    alternates: { canonical: `/books/${book.slug}` },
  };
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) notFound();

  const similar = books
    .filter((b) => b.slug !== book.slug)
    .sort((a, b) => b.tags.filter((t) => book.tags.includes(t)).length - a.tags.filter((t) => book.tags.includes(t)).length)
    .slice(0, 5);

  return (
    <>
      <Panel className={toneClass[book.tone]}>
        <div className="mx-auto max-w-4xl px-6 pb-20 pt-36 text-center md:px-12">
          <p className="font-semibold">{book.author}</p>
          <h1 className="display mt-3 text-[clamp(3rem,9vw,8rem)]">{book.title}</h1>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {book.tags.map((t) => <li key={t} className="rounded-full bg-oat px-3 py-1 text-sm font-semibold">{t}</li>)}
          </ul>
          <div className="relative mx-auto mt-12 w-60 md:w-72">
            <Cover book={book} />
            <span className="absolute -left-6 top-6 -rotate-6 rounded-md bg-terracotta px-3 py-1 text-sm font-bold uppercase tracking-wide text-oat">{book.month}</span>
          </div>
        </div>
      </Panel>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal>
          <p className="font-hand -rotate-2 text-2xl">At a glance</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-3">
            {book.glance.map((g) => <li key={g} className="display rounded-full bg-sage px-5 py-2 text-xl">{g}</li>)}
          </ul>
          <p className="display mt-16 text-[clamp(1.5rem,3vw,2.5rem)] leading-tight">{book.blurb}</p>
          <p className="mt-8 text-lg leading-relaxed opacity-80">{book.long}</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 lg:px-24">
        <Reveal><h2 className="display text-center text-[clamp(2rem,4.5vw,4rem)]">Do not just take our word for it</h2></Reveal>
        <ul className="mt-12 flex flex-wrap justify-center gap-6">
          {book.quotes.map((q, i) => (
            <li key={q.text} className={`w-full max-w-sm rounded-2xl p-6 shadow-md ${i % 2 ? "rotate-2 bg-apricot" : "-rotate-2 bg-rose"}`}>
              <p className="text-lg leading-snug">“{q.text}”</p>
              <p className="font-hand mt-4 text-xl">— {q.who}</p>
            </li>
          ))}
        </ul>
      </section>

      <Panel className="bg-apricot" flip>
        <div className="mx-auto max-w-2xl px-6 py-24">
          <h2 className="display text-center text-[clamp(2rem,4.5vw,4rem)]">Get a taste</h2>
          <div className="mt-10 space-y-5 rounded-3xl bg-oat p-8 text-lg leading-relaxed md:p-12">
            {book.excerpt.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </Panel>

      <section className="mx-auto max-w-2xl px-6 py-24">
        <h2 className="display text-center text-[clamp(2rem,4.5vw,4rem)]">Book notes</h2>
        <div className="mt-10">
          <FaqItems tone="bg-sage" items={[{ q: "Why we chose it", a: book.why }, { q: "Content notes", a: book.warnings }]} />
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24">
          <h2 className="display text-[clamp(2rem,4.5vw,4rem)]">Similar titles</h2>
        </div>
        <BookCarousel books={similar} />
        <p className="mx-auto mt-6 max-w-[1440px] px-6 md:px-12 lg:px-24"><Link href="/books" className="font-semibold underline underline-offset-4">Back to all books</Link></p>
      </section>
    </>
  );
}
