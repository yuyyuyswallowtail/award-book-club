import { faqs } from "@/lib/content";
import { Button } from "./button";
import { FaqItems } from "./faq-items";
import { Reveal } from "./motion/reveal";

export function FaqSection() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24">
      <Reveal className="mx-auto max-w-3xl">
        <h2 className="display text-center text-[clamp(2.25rem,5vw,4.5rem)]">Common questions</h2>
        <div className="mt-12"><FaqItems items={faqs[0].items.slice(0, 3)} tone="bg-sage" /></div>
        <div className="mt-8 flex justify-center"><Button href="/faq">Show all FAQ</Button></div>
      </Reveal>
    </section>
  );
}
