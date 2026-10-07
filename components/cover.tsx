import type { CoverBook, Pattern } from "@/lib/content";

function Art({ kind }: { kind: Pattern }) {
  const c = { fill: "currentColor", opacity: 0.22 };
  return (
    <svg aria-hidden viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
      {kind === "sun" && (
        <>
          <circle cx="100" cy="200" r="70" {...c} />
          <circle cx="100" cy="200" r="40" {...c} />
        </>
      )}
      {kind === "arch" && (
        <>
          <path d="M40 300V210a60 60 0 0 1 120 0v90Z" {...c} />
          <path d="M70 300v-80a30 30 0 0 1 60 0v80Z" {...c} />
        </>
      )}
      {kind === "waves" &&
        [0, 1, 2, 3].map((i) => (
          <path key={i} d={`M-10 ${190 + i * 28}q30-24 60 0t60 0t60 0t60 0`} fill="none" stroke="currentColor" strokeWidth="6" opacity="0.25" />
        ))}
      {kind === "dots" &&
        Array.from({ length: 30 }).map((_, i) => <circle key={i} cx={30 + (i % 5) * 35} cy={170 + Math.floor(i / 5) * 20} r="6" {...c} />)}
      {kind === "stripes" &&
        [0, 1, 2, 3, 4].map((i) => <rect key={i} x="-20" y={180 + i * 24} width="240" height="10" transform="rotate(-12 100 200)" {...c} />)}
      {kind === "moon" && <path d="M130 170a60 60 0 1 0 0 120a48 48 0 1 1 0-120Z" {...c} />}
    </svg>
  );
}

export function Cover({ book, className = "" }: { book: CoverBook; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`Cover of ${book.title} by ${book.author}`}
      className={`@container relative aspect-[2/3] overflow-hidden rounded-md shadow-[0_12px_30px_-12px_rgba(18,39,31,0.55)] ${className}`}
      style={{ background: book.bg, color: book.fg }}
    >
      <Art kind={book.pattern} />
      <p className="display absolute inset-x-0 top-0 p-[9%] text-[15cqw] leading-[0.95]">{book.title}</p>
      <p className="absolute inset-x-0 bottom-0 p-[9%] text-[6cqw] font-bold uppercase tracking-widest">{book.author}</p>
    </div>
  );
}
