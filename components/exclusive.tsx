import { exclusive } from "@/lib/content";
import { Cover } from "./cover";
import { Panel } from "./panel";
import { Reveal } from "./motion/reveal";

export function Exclusive() {
  return (
    <Panel className="bg-sage" flip>
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-12 lg:px-24">
        <Reveal>
          <p className="font-hand text-2xl">Club exclusive</p>
          <h2 className="display mt-2 text-[clamp(2.25rem,5vw,4.5rem)]">{exclusive.title}</h2>
          <p className="mt-4 max-w-md text-lg leading-snug">An original anthology from our authors. No, you cannot get it anywhere else.</p>
          <p className="mt-6 max-w-md rounded-2xl bg-rose p-5 text-sm font-semibold -rotate-1">“Not a bad story in the bunch.” — Reader, Brittany</p>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto w-56 rotate-3 md:w-72"><Cover book={exclusive} /></Reveal>
      </div>
    </Panel>
  );
}
