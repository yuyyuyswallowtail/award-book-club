import Link from "next/link";
import { toneClass, type Book } from "@/lib/content";
import { Cover } from "./cover";

const rot = [-3, 2, -1.5, 3, -2.5, 1.5];

export function BookCard({ book, index = 0 }: { book: Book; index?: number }) {
  const r = rot[index % rot.length];
  return (
    <Link href={`/books/${book.slug}`} className="group block w-52 shrink-0 snap-start md:w-60">
      <article
        style={{ "--r": `${r}deg` } as React.CSSProperties}
        className={`rotate-[var(--r)] rounded-3xl p-4 text-forest transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-0 ${toneClass[book.tone]}`}
      >
        <Cover book={book} />
        <h3 className="display mt-4 text-xl">{book.title}</h3>
        <p className="mt-1 text-sm opacity-70">{book.author}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {book.tags.slice(0, 2).map((t) => (
            <li key={t} className="rounded-full bg-oat/80 px-2.5 py-0.5 text-[11px] font-semibold">{t}</li>
          ))}
        </ul>
        <p className="mt-3 text-sm font-semibold opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">Read more →</p>
      </article>
    </Link>
  );
}
