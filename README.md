# MARGINALIA Book Club

A playful book subscription website, inspired by the energy of aardvarkbookclub.com.
Original design: layout ideas and motion language are referenced; no brand assets, covers or copy are reused.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, Three.js, React Three Fiber, Drei, Lucide React.

## Design

- Palette: oat `#F4ECDD`, forest `#12271F`, terracotta `#E2573A`, apricot `#F6B98B`, sage `#BFD3B4`, rose `#EFB6C0`, denim `#2F4C8C`
- Type: Bricolage Grotesque (display), DM Sans (body), Caveat (handwritten notes)
- Rounded colour-blocked sections with organic wave backgrounds
- 3D hero book, tilted card fans, marquee ticker, sticker pills, sticky FAQ categories
- Typographic generated book covers (no third-party images)
- Respects `prefers-reduced-motion`

## Pages

`/` home, `/books` monthly picks, `/books/[slug]` book detail, `/gifting`, `/merch`, `/faq`

## Develop

```bash
bun install
bun dev
bun run lint
bun run build
```

## Deploy

Deployed on Vercel via CLI:

```bash
bunx vercel login
bunx vercel link
bunx vercel --prod
```

Set `NEXT_PUBLIC_SITE_URL` in Vercel for canonical, OpenGraph and sitemap URLs.

## Credits

Design reference: aardvarkbookclub.com (not affiliated).
