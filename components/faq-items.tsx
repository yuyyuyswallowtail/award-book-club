import { Plus } from "lucide-react";

export function FaqItems({ items, tone = "bg-sage" }: { items: { q: string; a: string }[]; tone?: string }) {
  return (
    <div className="space-y-3">
      {items.map((it) => (
        <details key={it.q} className={`group rounded-2xl px-5 py-4 ${tone}`}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
            {it.q}
            <Plus size={18} aria-hidden className="shrink-0 transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <p className="mt-3 max-w-2xl leading-relaxed opacity-80">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
