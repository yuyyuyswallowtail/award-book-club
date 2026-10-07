export function Ticker({ text }: { text: string }) {
  const row = (
    <ul aria-hidden className="flex shrink-0 gap-10 pr-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i} className="display whitespace-nowrap text-[clamp(1.5rem,3vw,2.75rem)]">{text}</li>
      ))}
    </ul>
  );
  return (
    <div role="note" aria-label={text} className="relative my-20 h-44 overflow-hidden">
      <div className="absolute inset-x-[-5%] top-8 -rotate-2 bg-terracotta py-3 text-oat">
        <div className="marquee flex w-max">{row}{row}</div>
      </div>
      <div className="absolute inset-x-[-5%] top-20 rotate-2 bg-forest py-3 text-oat">
        <div className="marquee-rev flex w-max">{row}{row}</div>
      </div>
    </div>
  );
}
