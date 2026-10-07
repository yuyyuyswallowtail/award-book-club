import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tones = {
  terracotta: "bg-terracotta text-oat",
  forest: "bg-forest text-oat",
  oat: "bg-oat text-forest",
};

export function Button({ href, children, tone = "terracotta" }: { href: string; children: React.ReactNode; tone?: keyof typeof tones }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-stretch overflow-hidden rounded-lg font-semibold transition-transform duration-300 hover:-translate-y-0.5 ${tones[tone]}`}
    >
      <span className="px-5 py-3">{children}</span>
      <span aria-hidden className="grid w-12 place-items-center border-l border-current/25">
        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
