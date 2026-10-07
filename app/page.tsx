import { Hero } from "@/components/hero";
import { MonthBooks } from "@/components/month-books";
import { HowItWorks } from "@/components/how-it-works";
import { Genres } from "@/components/genres";
import { WhyUs } from "@/components/why-us";
import { Ticker } from "@/components/ticker";
import { FaqSection } from "@/components/faq-section";
import { GiftSection } from "@/components/gift-section";
import { Winners } from "@/components/winners";
import { Exclusive } from "@/components/exclusive";
import { Press } from "@/components/press";

export default function Page() {
  return (
    <>
      <Hero />
      <MonthBooks />
      <HowItWorks />
      <Genres />
      <WhyUs />
      <Ticker text="First box ships free this autumn ✦" />
      <FaqSection />
      <GiftSection showLink />
      <Winners />
      <Exclusive />
      <Press />
    </>
  );
}
