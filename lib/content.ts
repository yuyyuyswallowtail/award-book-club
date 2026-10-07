export type Pattern = "sun" | "arch" | "waves" | "dots" | "stripes" | "moon";
export type Tone = "sage" | "rose" | "apricot";

export type CoverBook = { title: string; author: string; bg: string; fg: string; pattern: Pattern };

export type Book = CoverBook & {
  slug: string;
  month: string;
  blurb: string;
  tags: string[];
  tone: Tone;
  glance: string[];
  long: string;
  quotes: { text: string; who: string }[];
  excerpt: string[];
  why: string;
  warnings: string;
};

export const toneClass: Record<Tone, string> = {
  sage: "bg-sage",
  rose: "bg-rose",
  apricot: "bg-apricot",
};

const OAT = "#F4ECDD";
const FOREST = "#12271F";
const TERRA = "#E2573A";
const APRICOT = "#F6B98B";
const SAGE = "#BFD3B4";
const ROSE = "#EFB6C0";
const DENIM = "#2F4C8C";

export const books: Book[] = [
  {
    slug: "brine-and-honey", title: "Brine & Honey", author: "Marta Ilves", month: "October 2026",
    blurb: "A failing apiary, two estranged sisters and a summer that refuses to stay buried.",
    tags: ["Literary", "Mystery"], tone: "sage", bg: TERRA, fg: OAT, pattern: "sun",
    glance: ["Slow-burn mystery", "Salt-marsh setting", "Sibling secrets"],
    long: "When the last hive on the salt marsh falls silent, two estranged sisters return to the farm their mother never explained. What they dig up is older than the drought and far closer than they would like.",
    quotes: [{ text: "Quietly devastating, then suddenly unputdownable.", who: "Reader, Ines" }, { text: "The marsh is a character and it has opinions.", who: "Reader, Dewi" }],
    excerpt: ["The bees went first, as they always do. By the time Ilse noticed the silence, the whole hillside had gone to a hum that was only memory.", "Her sister’s car was already in the yard, engine ticking, door open, as if she had meant to stay only a minute."],
    why: "A debut with an unforgettable setting and a mystery that earns its ending.",
    warnings: "Grief, a missing parent, mild peril.",
  },
  {
    slug: "the-lantern-year", title: "The Lantern Year", author: "Tobias Wren", month: "October 2026",
    blurb: "A cosy fantasy about a village that borrows light from the dead.",
    tags: ["Fantasy", "Cosy"], tone: "apricot", bg: DENIM, fg: APRICOT, pattern: "moon",
    glance: ["Found family", "Gentle magic", "Seasonal structure"],
    long: "In Harrow’s End, every lantern holds a memory, and every winter someone must decide which to let go. A new keeper arrives with a lamp that burns the wrong colour.",
    quotes: [{ text: "A warm blanket with sharp teeth.", who: "Reader, Maya" }],
    excerpt: ["The lamplighter’s apprentice was late, which was unusual, and carrying the wrong lantern, which was unheard of.", "Nobody in the square said anything. They simply watched the light turn a colour no one had a name for."],
    why: "The most comforting book we read this year, with real emotional weight underneath.",
    warnings: "Loss of a parent, mild fantasy violence.",
  },
  {
    slug: "static-bloom", title: "Static Bloom", author: "Priya Castellanos", month: "October 2026",
    blurb: "A signal from an abandoned greenhouse station is not what it claims to be.",
    tags: ["Sci-Fi", "Thriller"], tone: "rose", bg: FOREST, fg: ROSE, pattern: "dots",
    glance: ["Isolated setting", "Unreliable signals", "Two-hander"],
    long: "Two engineers are sent to decommission a deep-space greenhouse. The plants are still growing, and they seem to be answering the radio.",
    quotes: [{ text: "I checked every window twice after finishing.", who: "Reader, Anton" }],
    excerpt: ["Day forty. The tomatoes have started to lean toward the console.", "Teo laughed when I wrote that down, then stopped when we both saw the log timestamps."],
    why: "Tense, strange and beautifully paced, with a final act nobody will predict.",
    warnings: "Isolation, body horror (mild), a character in peril.",
  },
  {
    slug: "orchard-of-salt", title: "Orchard of Salt", author: "Noor Halvorsen", month: "October 2026",
    blurb: "Two women, one war and a letter that arrives forty years late.",
    tags: ["Historical", "Romance"], tone: "sage", bg: ROSE, fg: FOREST, pattern: "arch",
    glance: ["Dual timeline", "Slow-burn romance", "Coastal village"],
    long: "In 1943 a seamstress hides a radio in a pear tree. In 1983 her granddaughter finds the first letter, and the village begins to remember out loud.",
    quotes: [{ text: "Tender, patient and quietly furious.", who: "Reader, Salma" }],
    excerpt: ["The pear tree had always bent toward the sea, and that winter it began to lean toward the house.", "Anneli wound the wire around the lowest branch and told herself it was only a hobby."],
    why: "A love story that treats history seriously and never forgets to be romantic.",
    warnings: "Wartime violence, loss.",
  },
  {
    slug: "moth-season", title: "Moth Season", author: "Felix Aranda", month: "October 2026",
    blurb: "Every autumn the moths return to the old school. This year they brought company.",
    tags: ["Horror", "Gothic"], tone: "apricot", bg: FOREST, fg: APRICOT, pattern: "stripes",
    glance: ["Boarding-school gothic", "Creeping dread", "Great atmosphere"],
    long: "A teacher takes a post at a remote boarding school just as the annual moth migration begins. The students are unusually calm about it, which is the first warning.",
    quotes: [{ text: "Atmosphere you can taste.", who: "Reader, Rina" }],
    excerpt: ["They arrived at dusk, as they always did, a grey tide against the windows.", "The headmistress did not look up. 'Do not open the east wing after the bell,' she said, 'and do not count them.'"],
    why: "Gothic horror done with restraint and a final image that stays with you.",
    warnings: "Horror themes, child peril, mild gore.",
  },
  {
    slug: "the-understudys-almanac", title: "The Understudy’s Almanac", author: "Imogen Strand", month: "October 2026",
    blurb: "A West End understudy gets one night in the spotlight and a lifetime of consequences.",
    tags: ["Contemporary", "Humour"], tone: "rose", bg: APRICOT, fg: FOREST, pattern: "waves",
    glance: ["Backstage comedy", "Heartfelt", "Fast and funny"],
    long: "Nell has understudied the same role for nine years. When the lead vanishes on opening night, she steps on stage and discovers why nobody ever lets her.",
    quotes: [{ text: "Funny, warm and secretly about everything.", who: "Reader, Joy" }],
    excerpt: ["There are three kinds of understudy: the hopeful, the bitter and Nell, who had become something stranger.", "She heard her name over the tannoy and felt, quite distinctly, her whole life tilt."],
    why: "The best palate cleanser we have found, and it still manages to make you cry.",
    warnings: "Mild workplace bullying.",
  },
  {
    slug: "low-tide-letters", title: "Low Tide Letters", author: "Kaito Merrow", month: "September 2026",
    blurb: "A year of letters between two strangers who share only a tide table.",
    tags: ["Literary", "Epistolary"], tone: "sage", bg: DENIM, fg: SAGE, pattern: "waves",
    glance: ["Told in letters", "Gentle and strange", "Short chapters"],
    long: "A lighthouse keeper and a night nurse begin writing after a misdelivered parcel. Neither expects the correspondence to rearrange their lives.",
    quotes: [{ text: "I read it slowly, which is rare for me.", who: "Reader, Bima" }],
    excerpt: ["Dear whoever you are, the tide is out and the beach is full of small decisions.", "Dear lighthouse, I think you might be lonelier than you admit, and I say this as an expert."],
    why: "A reminder that attention is a form of love.",
    warnings: "Grief, loneliness.",
  },
  {
    slug: "greenhouse-at-midnight", title: "Greenhouse at Midnight", author: "Selma Okafor", month: "September 2026",
    blurb: "A botanist, a ghost and a garden that blooms only after dark.",
    tags: ["Magical realism", "Romance"], tone: "rose", bg: SAGE, fg: FOREST, pattern: "arch",
    glance: ["Lush and strange", "Slow romance", "Nature writing"],
    long: "Ayo inherits a crumbling glasshouse and a ghost who insists on correcting her pruning. Together they try to save the only garden that grows by moonlight.",
    quotes: [{ text: "Sensual, strange and beautifully written.", who: "Reader, Lena" }],
    excerpt: ["The orchids opened at midnight, every night, and nobody in the family would say why.", "'You are holding it wrong,' said a voice from the vine, and Ayo dropped the shears."],
    why: "The cosiest love story with a ghost we have ever read.",
    warnings: "Grief, brief hospital scene.",
  },
  {
    slug: "paper-saints", title: "Paper Saints", author: "Jules Bramwell", month: "September 2026",
    blurb: "Four students, one forged manuscript and a library that keeps its secrets.",
    tags: ["Mystery", "Dark academia"], tone: "apricot", bg: TERRA, fg: OAT, pattern: "stripes",
    glance: ["Campus mystery", "Unreliable narrator", "Twisty"],
    long: "When a rare manuscript turns out to be forged, suspicion falls on the four students who catalogued it. Each has a reason to lie, and a reason to want it found.",
    quotes: [{ text: "I flew through it in two evenings.", who: "Reader, Dian" }],
    excerpt: ["The forgery was good, which was the problem. It was exactly the sort of thing we would have made.", "Marguerite closed the archive door and turned the key. 'Now,' she said, 'who wants to go first?'"],
    why: "A twisty, bookish thriller with prose that rewards a second read.",
    warnings: "Death of a character, academic pressure.",
  },
];

export const months = Array.from(new Set(books.map((b) => b.month)));

export const genres = [
  "Literary fiction", "Mystery", "Fantasy", "Romance", "Historical fiction",
  "Horror", "Science fiction", "Magical realism", "Contemporary", "and more",
];

export const steps = [
  { n: "01", title: "Explore the drop", text: "On the 1st of each month we reveal six new hardcovers." },
  { n: "02", title: "Build your box", text: "Choose one to three books. Add merch if you like." },
  { n: "03", title: "Wait by the door", text: "Your box arrives with a bookmark per book and a small surprise." },
  { n: "04", title: "Share your reads", text: "Tag us, talk about it with the club, then do it all again." },
];

export type FaqCategory = { id: string; title: string; tone: string; items: { q: string; a: string }[] };

export const faqs: FaqCategory[] = [
  {
    id: "membership", title: "Membership", tone: "bg-sage",
    items: [
      { q: "How does membership work?", a: "Each month we reveal six new hardcovers. Choose one to three, and your box ships at the start of the month." },
      { q: "How much does it cost?", a: "Pricing is shown at checkout and depends on how many books are in your box. There are no hidden fees." },
      { q: "Can I skip a month?", a: "Yes. Skip any month from your account before the order cutoff." },
      { q: "How do I cancel?", a: "Cancel anytime from your account. You keep access until the end of the billing period." },
    ],
  },
  {
    id: "shipping", title: "Shipping", tone: "bg-apricot",
    items: [
      { q: "Where do you ship?", a: "Within Indonesia for now, with more countries on the way." },
      { q: "How long does shipping take?", a: "Most boxes arrive within three to five working days." },
      { q: "My order arrived damaged. What do I do?", a: "Send us a photo and we will replace it." },
    ],
  },
  {
    id: "books", title: "Books", tone: "bg-rose",
    items: [
      { q: "When do new books drop?", a: "On the 1st of every month, always." },
      { q: "Do I keep the books?", a: "Yes. Every book is yours to keep, annotate and lend." },
      { q: "What genres do you carry?", a: "Mostly fiction: literary, mystery, fantasy, romance, historical, horror and more." },
    ],
  },
  {
    id: "gifting", title: "Gifting", tone: "bg-sage",
    items: [
      { q: "What does a gift include?", a: "A prepaid membership for the length you choose. The recipient picks their own books." },
      { q: "How is a gift redeemed?", a: "By email. The recipient receives a code and a link to choose their first box." },
    ],
  },
  {
    id: "merch", title: "Merch", tone: "bg-rose",
    items: [
      { q: "Does merch ship with my box?", a: "Yes. Add it to your box and it travels together." },
      { q: "Can I return merch?", a: "Unused items can be returned within 14 days." },
    ],
  },
];

export const giftTiers = [
  { label: "3 months", price: "$54", note: "A gentle start" },
  { label: "6 months", price: "$102", note: "Our most popular" },
  { label: "12 months", price: "$192", note: "For the serious reader" },
];

export const merch = [
  { name: "Anniversary tote", price: "$14", cls: "bg-terracotta text-oat", glyph: "✦" },
  { name: "Bookmark set", price: "$6", cls: "bg-denim text-oat", glyph: "❡" },
  { name: "Reading socks", price: "$12", cls: "bg-sage text-forest", glyph: "☾" },
];

export const winners: (CoverBook & { year: string })[] = [
  { year: "2025", title: "The Wintering Season", author: "Hana Verbeek", bg: FOREST, fg: SAGE, pattern: "moon" },
  { year: "2024", title: "Salt Road", author: "Ibrahim Cole", bg: DENIM, fg: OAT, pattern: "waves" },
  { year: "2023", title: "Small Fires", author: "Leona Park", bg: ROSE, fg: FOREST, pattern: "sun" },
];

export const exclusive: CoverBook = {
  title: "Ten Small Hauntings", author: "Eight Award Book Club authors", bg: FOREST, fg: APRICOT, pattern: "dots",
};

export const press = ["The Weekly Page", "Shelf Life Daily", "Paper & Ink", "Hardcover Review"];
