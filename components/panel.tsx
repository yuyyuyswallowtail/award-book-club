import { Blobs } from "./blobs";

export function Panel({ id, className = "", children, flip = false }: { id?: string; className?: string; children: React.ReactNode; flip?: boolean }) {
  return (
    <section id={id} className={`relative overflow-hidden rounded-b-[2.5rem] md:rounded-b-[4rem] ${className}`}>
      <Blobs flip={flip} />
      <div className="relative">{children}</div>
    </section>
  );
}
