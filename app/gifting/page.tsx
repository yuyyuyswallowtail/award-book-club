import type { Metadata } from "next";
import { FaqItems } from "@/components/faq-items";
import { GiftSection } from "@/components/gift-section";
import { PageHeader } from "@/components/page-header";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gifting — Award Book Club",
  description: "Give a prepaid membership and let them choose their own books.",
  alternates: { canonical: "/gifting" },
};

export default function GiftingPage() {
  const gifting = faqs.find((f) => f.id === "gifting")!;
  return (
    <>
      <PageHeader title="Give a good read" text="A membership they can use at their own pace, with books they pick themselves." className="bg-sage" />
      <div className="mt-16"><GiftSection /></div>
      <section className="mx-auto max-w-2xl px-6 py-24">
        <h2 className="display text-[clamp(2rem,4.5vw,4rem)]">Gifting questions</h2>
        <div className="mt-8"><FaqItems items={gifting.items} tone={gifting.tone} /></div>
      </section>
    </>
  );
}
