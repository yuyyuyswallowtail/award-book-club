import { BookOpen, DoorOpen, PackageOpen, Share2 } from "lucide-react";
import { steps } from "@/lib/content";
import { Panel } from "./panel";
import { Reveal } from "./motion/reveal";

const icons = [BookOpen, PackageOpen, DoorOpen, Share2];
const look = [
  { rot: "md:-rotate-6", cls: "bg-oat text-forest" },
  { rot: "md:rotate-3 md:translate-y-6", cls: "bg-apricot text-forest" },
  { rot: "md:-rotate-2", cls: "bg-terracotta text-oat" },
  { rot: "md:rotate-6 md:translate-y-4", cls: "bg-denim text-oat" },
];

export function HowItWorks() {
  return (
    <Panel className="bg-sage" flip>
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)]">How it works</h2>
          <p className="font-hand -rotate-3 text-2xl">Consider us your professional book curator</p>
        </Reveal>
        <ol className="mt-16 grid gap-6 md:grid-cols-4 md:gap-0">
          {steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <li key={s.n} className={`rounded-3xl p-6 shadow-lg transition-transform duration-500 hover:z-10 hover:rotate-0 hover:-translate-y-2 md:-mx-2 md:min-h-72 ${look[i].rot} ${look[i].cls}`}>
                <p className="font-hand text-2xl">Step #{i + 1}</p>
                <Icon size={40} aria-hidden className="mt-6" />
                <h3 className="display mt-6 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-80">{s.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </Panel>
  );
}
