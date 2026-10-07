import type { Metadata } from "next";
import { FaqItems } from "@/components/faq-items";
import { PageHeader } from "@/components/page-header";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Common questions — Award Book Club",
  description: "Answers about membership, shipping, books, gifting and merch.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHeader title="Common questions" text="The archive of everything members ask us." className="bg-sage" />
      <div className="mx-auto grid max-w-[1100px] gap-12 px-6 py-20 md:grid-cols-[12rem_1fr]">
        <nav aria-label="FAQ categories" className="md:sticky md:top-28 md:self-start">
          <ul className="flex flex-wrap gap-2 md:flex-col">
            {faqs.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className={`inline-block rounded-full px-4 py-2 text-sm font-semibold ${c.tone}`}>{c.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-16">
          {faqs.map((c) => (
            <section key={c.id} id={c.id} className="scroll-mt-28">
              <h2 className="display text-[clamp(2rem,4vw,3.5rem)]">{c.title}</h2>
              <div className="mt-6"><FaqItems items={c.items} tone={c.tone} /></div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
