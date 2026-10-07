import { press } from "@/lib/content";

export function Press() {
  return (
    <section aria-label="Mentioned by" className="px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-hand text-2xl">Mentioned by</p>
        <ul className="mt-4 flex flex-wrap gap-x-12 gap-y-3">
          {press.map((p) => <li key={p} className="display text-[clamp(1.5rem,3vw,2.5rem)] opacity-60">{p}</li>)}
        </ul>
      </div>
    </section>
  );
}
