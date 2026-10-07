import type { Metadata } from "next";
import { Button } from "@/components/button";
import { FaqItems } from "@/components/faq-items";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/motion/reveal";
import { faqs, merch } from "@/lib/content";

export const metadata: Metadata = {
  title: "Merch — Award Book Club",
  description: "Totes, bookmarks and reading socks for people who carry books everywhere.",
  alternates: { canonical: "/merch" },
};

export default function MerchPage() {
  const f = faqs.find((x) => x.id === "merch")!;
  return (
    <>
      <PageHeader title="Carry a good book" text="Small things for people who read in queues, on trains and under desks." className="bg-apricot" />
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 lg:px-24">
        <ul className="grid gap-8 md:grid-cols-3">
          {merch.map((m, i) => (
            <li key={m.name}>
              <Reveal delay={i * 0.08}>
                <div className={`grid aspect-square place-items-center rounded-3xl text-[8rem] ${m.cls}`} style={{ rotate: `${i % 2 ? 2 : -2}deg` }} aria-hidden>{m.glyph}</div>
                <h2 className="display mt-6 text-3xl">{m.name}</h2>
                <p className="mt-1 font-semibold">{m.price}</p>
                <div className="mt-4"><Button href="mailto:hello@awardbookclub.example?subject=Merch" tone="forest">Ask about it</Button></div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto max-w-2xl px-6 pb-24">
        <h2 className="display text-[clamp(2rem,4.5vw,4rem)]">Merch questions</h2>
        <div className="mt-8"><FaqItems items={f.items} tone={f.tone} /></div>
      </section>
    </>
  );
}
