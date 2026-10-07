import { giftTiers } from "@/lib/content";
import { Button } from "./button";
import { Panel } from "./panel";
import { Reveal } from "./motion/reveal";

export function GiftSection({ showLink = false }: { showLink?: boolean }) {
  return (
    <Panel className="bg-apricot">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-24">
        <Reveal className="max-w-xl">
          <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)]">A gift outside of the box</h2>
          <p className="mt-4 text-lg leading-snug">Gift a membership and they pick their own books. No spying on shelves needed. The e-gift card arrives instantly.</p>
        </Reveal>
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {giftTiers.map((t, i) => (
            <li key={t.label} className={`rounded-3xl bg-oat p-8 shadow-md ${i === 1 ? "md:-translate-y-4 md:rotate-1" : i === 2 ? "md:-rotate-1" : ""}`}>
              <p className="font-hand text-2xl">{t.note}</p>
              <p className="display mt-4 text-4xl">{t.label}</p>
              <p className="mt-2 text-lg font-semibold">{t.price}</p>
              <div className="mt-6"><Button href="mailto:hello@awardbookclub.example?subject=Gift%20membership" tone="forest">Send a gift</Button></div>
            </li>
          ))}
        </ul>
        {showLink && <div className="mt-10"><Button href="/gifting" tone="oat">All gift options</Button></div>}
      </div>
    </Panel>
  );
}
