import Link from "next/link";
import { NewsletterForm } from "./newsletter-form";

const nav = [
  { label: "All books", href: "/books" },
  { label: "Gifting", href: "/gifting" },
  { label: "Merch", href: "/merch" },
  { label: "FAQ", href: "/faq" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-denim px-6 pb-8 pt-20 text-oat md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-[1440px] gap-14 md:grid-cols-3">
        <div>
          <p className="display text-4xl">Award</p>
          <p className="mt-2 text-sm uppercase tracking-widest opacity-70">Book Club</p>
          <p className="font-hand mt-6 text-2xl text-apricot">Books worth staying up for.</p>
        </div>
        <ul className="space-y-2">
          {nav.map((n) => (
            <li key={n.href}><Link href={n.href} className="text-lg hover:text-apricot">{n.label}</Link></li>
          ))}
          <li className="flex gap-4 pt-4 text-sm">
            <a href="https://instagram.com" className="hover:text-apricot">Instagram</a>
            <a href="https://tiktok.com" className="hover:text-apricot">TikTok</a>
          </li>
        </ul>
        <div>
          <h2 className="display text-3xl">Join our mailing list</h2>
          <NewsletterForm />
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-[1440px] flex-wrap justify-between gap-4 border-t border-oat/20 pt-6 text-xs opacity-70">
        <p>© 2026 Award Book Club. A design exercise, not a real business.</p>
        <p className="flex gap-5"><Link href="/">Terms of Service</Link><Link href="/">Privacy Policy</Link></p>
      </div>
    </footer>
  );
}
