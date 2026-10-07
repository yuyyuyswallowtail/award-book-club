import { Reveal } from "./motion/reveal";

const stickers = [
  { t: "Range of genres", cls: "left-[2%] top-[14%] -rotate-6 bg-terracotta text-oat" },
  { t: "Free shipping", cls: "right-[2%] top-[22%] rotate-6 bg-denim text-oat" },
  { t: "Affordable", cls: "left-[10%] top-[52%] rotate-3 bg-sage" },
  { t: "Sturdy hardcovers", cls: "right-[6%] top-[58%] -rotate-3 bg-rose" },
  { t: "Curated by humans", cls: "left-1/2 top-[82%] -translate-x-1/2 -rotate-2 bg-apricot" },
];

export function WhyUs() {
  return (
    <section className="px-6 py-32 md:px-12 lg:px-24">
      <Reveal className="relative mx-auto h-[32rem] max-w-5xl">
        <h2 className="sr-only">Why Award Book Club?</h2>
        <div aria-hidden className="absolute left-1/2 top-[44%] size-64 -translate-x-1/2 -translate-y-1/2 md:size-80">
          <svg viewBox="0 0 200 200" className="spin-slow absolute size-full">
            <defs>
              <path id="ring" d="M100 100m-80 0a80 80 0 1 1 160 0a80 80 0 1 1-160 0" />
            </defs>
            <text className="fill-forest/70 text-[11px] font-bold uppercase">
              <textPath href="#ring" textLength="495">Award ✦ Book Club ✦ Award ✦ Book Club ✦ Award ✦ Book Club ✦</textPath>
            </text>
          </svg>
          <span className="display absolute inset-0 grid place-items-center text-8xl">A</span>
        </div>
        <ul>
          {stickers.map((s) => (
            <li key={s.t} className={`display absolute whitespace-nowrap rounded-full px-5 py-2 text-[clamp(1.1rem,3.2vw,2.75rem)] shadow-md ${s.cls}`}>
              {s.t}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
