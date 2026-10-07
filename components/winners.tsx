import { winners } from "@/lib/content";
import { Cover } from "./cover";
import { Reveal } from "./motion/reveal";

export function Winners() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="max-w-xl">
          <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)]">Members’ Choice winners</h2>
          <p className="mt-4 text-lg leading-snug">Every year members vote for their favourite reads, and we celebrate with a special reprint.</p>
        </Reveal>
        <ul className="mt-14 flex flex-wrap gap-10">
          {winners.map((w, i) => (
            <li key={w.year} className="relative w-44 md:w-56" style={{ rotate: `${i % 2 ? 2 : -2}deg` }}>
              <Cover book={w} />
              <span className="font-hand absolute -right-4 -top-5 grid size-16 place-items-center rounded-full bg-terracotta text-xl text-oat">{w.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
