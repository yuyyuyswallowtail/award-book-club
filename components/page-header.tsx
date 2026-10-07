import { Panel } from "./panel";

export function PageHeader({ title, text, className = "bg-sage" }: { title: string; text: string; className?: string }) {
  return (
    <Panel className={className}>
      <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-40 md:px-12 lg:px-24">
        <h1 className="display text-[clamp(3rem,9vw,8rem)]">{title}</h1>
        <p className="mt-6 max-w-md text-lg leading-snug">{text}</p>
      </div>
    </Panel>
  );
}
