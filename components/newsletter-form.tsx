"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Email address"
        className="w-full rounded-lg bg-oat px-4 py-3 text-forest placeholder:text-forest/50"
      />
      <button type="submit" className="rounded-lg bg-terracotta px-5 py-3 font-semibold text-oat">Subscribe</button>
      {done && <p role="status" className="text-sm sm:basis-full">Thank you, you are on the list.</p>}
    </form>
  );
}
